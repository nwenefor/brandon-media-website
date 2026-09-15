import type { Metadata } from "next";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { JsonLd } from "@/components/json-ld";
import { business, organizationSchema, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: business.displayName,
  title: {
    default: "Brandon Media Group | Virginia Wedding Photographer & Videographer",
    template: `%s | ${business.displayName}`
  },
  description:
    "Professional wedding photography and cinematic wedding videography for couples across Virginia, Northern Virginia, Alexandria, Washington, DC, and the DMV.",
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: business.logo
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AnalyticsProvider />
        <JsonLd data={organizationSchema} />
        {children}
      </body>
    </html>
  );
}
