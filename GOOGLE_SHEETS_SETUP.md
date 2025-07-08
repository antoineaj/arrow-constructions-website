# Google Sheets Integration Setup

This project now integrates with Google Sheets to dynamically fetch project data. Follow these steps to set up the integration:

## 1. Google Sheets Setup

### Create your Google Spreadsheet

1. Create a new Google Spreadsheet
2. Set up your columns in the first row (headers):
   - Column A: Project Name
   - Column B: Location
   - Column C: Type
   - Column D: Date Completed

### Sample data format:

```
Project Name               | Location        | Type        | Date Completed
Luxury Apartment Complex   | Downtown        | Residential | 2024
Regional Bank HQ           | Financial Dist  | Banking     | 2023
Corporate Office Tower     | Business Park   | Office      | Ongoing
```

### Supported project types:

- residential
- banking
- office/offices
- restaurant/hotel
- retail
- commercial
- industrial
- miscellaneous

## 2. Google Service Account Setup

The `google-service-account.json` file is already configured in your project. To use it:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project: `arrowconstructions`
3. Go to your Google Spreadsheet
4. Click "Share" and add the service account email: `nextjs-projects-sheet-reader@arrowconstructions.iam.gserviceaccount.com`
5. Give it "Viewer" permissions

## 3. Environment Configuration

1. Open `.env.local` file
2. Replace `your-spreadsheet-id-here` with your actual Google Spreadsheet ID
3. You can find the spreadsheet ID in your Google Sheets URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
   ```

Example `.env.local`:

```
GOOGLE_SPREADSHEET_ID=1abcd1234567890efghijk
```

## 4. Optional Configuration

You can customize the sheet range by adding this to `.env.local`:

```
GOOGLE_SHEETS_RANGE=Sheet1!A2:D
```

## 5. Testing

1. Start your development server: `npm run dev`
2. Visit `/projects` page
3. The page should now display projects from your Google Spreadsheet

## Project Type Mapping

The system automatically maps Google Sheets project types to display categories:

- `residential` → Residential
- `banking` → Banking
- `office`/`offices` → Offices
- `restaurant`/`hotel` → Restaurants-Hotels
- `retail` → Retail
- `commercial` → Offices
- `industrial` → Miscellaneous
- Any other type → Miscellaneous

## Error Handling

The application includes comprehensive error handling:

- Loading states while fetching data
- Error messages for configuration issues
- Fallback behavior when API fails
- Detailed console logging for debugging

## API Endpoint

The projects data is available at: `/api/projects`

Response format:

```json
{
  "projects": [
    {
      "id": "1",
      "name": "Project Name",
      "location": "Project Location",
      "type": "project-type",
      "dateCompleted": "2024"
    }
  ]
}
```
