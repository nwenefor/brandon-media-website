import type { Metadata } from "next";
import { WeddingAdLandingPage } from "@/components/wedding-ad-landing-page";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Brandon Media Group | Virginia Wedding Photographer & Videographer",
  description:
    "Cinematic wedding videography and natural photography across Virginia, Washington DC and Maryland. View wedding work, compare collections and check your date.",
  path: "/",
  image: "/og.png"
});

export default function Home() {
  return <WeddingAdLandingPage pagePath="/" />;
}
