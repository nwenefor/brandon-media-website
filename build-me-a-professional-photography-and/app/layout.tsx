import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Brandon Media Group LLC | DMV Photo & Video Studio",
    template: "%s | Brandon Media Group LLC"
  },
  description:
    "Premium wedding photography, wedding videography, corporate event coverage, and real estate media for Richmond, Fredericksburg, Northern Virginia, Washington DC, Arlington, Alexandria, Stafford, and the DMV area."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
