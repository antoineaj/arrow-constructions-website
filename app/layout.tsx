import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.scss";
import type { Metadata } from "next";

export const metadata = {
  title: "MEP Subcontractor Co.",
  description: "Professional Mechanical, Electrical, and Plumbing Services",
  keywords: [
    "MEP",
    "Subcontractor",
    "Construction",
    "Electrical",
    "Mechanical",
    "Plumbing",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
