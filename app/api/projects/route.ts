import { NextResponse } from "next/server";
import { google } from "googleapis";

interface Project {
  id: string;
  name: string;
  location: string;
  type: string;
  dateCompleted: string;
}

export async function GET() {
  try {
    // Initialize Google Sheets API using environment variables
    const credentials = {
      type: "service_account",
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL,
      universe_domain: "googleapis.com",
    };

    const auth = new google.auth.GoogleAuth({
      credentials: credentials as any,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Get spreadsheet ID from environment variables
    const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

    if (!SPREADSHEET_ID) {
      console.error("GOOGLE_SHEET_ID environment variable is not set");
      return NextResponse.json(
        { error: "Google Spreadsheet ID is not configured" },
        { status: 500 }
      );
    }

    // Define the range where your project data is located
    // Default range assumes headers in row 1, data starts from row 2
    // Expected columns: Project Name, Location, Type, Date Completed
    const RANGE = process.env.GOOGLE_SHEETS_RANGE || "Sheet1!A2:D";

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });

    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      return NextResponse.json({ projects: [] });
    }

    // Transform the raw data into the expected format
    const projects: Project[] = rows
      .filter((row) => row.length >= 4 && row[0]) // Filter out empty rows
      .map((row, index) => ({
        id: (index + 1).toString(),
        name: row[0]?.toString().trim() || "",
        location: row[1]?.toString().trim() || "",
        type: row[2]?.toString().trim() || "",
        dateCompleted: row[3]?.toString().trim() || "",
      }));

    return NextResponse.json({ projects });
  } catch (error) {
    console.error("Error fetching projects from Google Sheets:", error);

    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes("Unable to detect")) {
        return NextResponse.json(
          {
            error:
              "Google service account authentication failed. Please check your credentials.",
          },
          { status: 401 }
        );
      }
      if (error.message.includes("not found")) {
        return NextResponse.json(
          {
            error:
              "Spreadsheet not found. Please check your spreadsheet ID and permissions.",
          },
          { status: 404 }
        );
      }
    }

    return NextResponse.json(
      { error: "Failed to fetch projects data" },
      { status: 500 }
    );
  }
}
