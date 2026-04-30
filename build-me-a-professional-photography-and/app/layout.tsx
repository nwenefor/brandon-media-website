import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brandon Media Group LLC | Wedding Photography & Films",
  description:
    "Clean, natural, story-driven wedding photography and cinematic films for couples across Washington DC, Maryland, and Virginia."
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
