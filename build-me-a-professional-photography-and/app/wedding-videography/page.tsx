import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { WeddingAdLandingPage } from "@/components/wedding-ad-landing-page";
import { createMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site";

const path = "/wedding-videography";
const title = "Virginia Wedding Videographer | Brandon Media Group";
const description =
  "Cinematic wedding videography and photography across Virginia, Washington DC and Maryland. View films, compare collections and check your wedding date.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path,
  image: "/og.png"
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteUrl}${path}#service`,
  name: "Wedding Videography",
  description,
  url: `${siteUrl}${path}`,
  provider: {
    "@id": `${siteUrl}/#organization`
  },
  areaServed: [
    { "@type": "State", name: "Virginia" },
    { "@type": "State", name: "Maryland" },
    { "@type": "City", name: "Washington, DC" }
  ],
  serviceType: "Wedding videography and photography"
};

export default function WeddingVideographyPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <WeddingAdLandingPage pagePath={path} />
    </>
  );
}

// CONFIG TODO: Add an approved consultation-booking URL before rendering a consultation CTA.
