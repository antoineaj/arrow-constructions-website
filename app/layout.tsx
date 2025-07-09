import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { CookieProvider } from "../components/common/CookieContext";
import CookieConsent from "../components/common/CookieConsent";
import "./globals.scss";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap", // This ensures text remains visible during webfont load
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Arrow Constructions",
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
      <head>
        {/* Resource hints for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Privacy and security meta tags */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      </head>
      <body className={dmSans.className}>
        <CookieProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </CookieProvider>
      </body>
    </html>
  );
}
