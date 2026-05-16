import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Real Estate Photography & Video in Richmond and the DMV",
  description:
    "Clean real estate photography, walkthrough videos, and social media tours for listings, rentals, and properties in Richmond, Fredericksburg, Northern Virginia, Washington DC, Arlington, Alexandria, Stafford, and the DMV area."
};

const formFields = [
  { type: "text", name: "name", label: "Name", placeholder: "Full name", required: true },
  { type: "email", name: "email", label: "Email", placeholder: "you@example.com", required: true },
  { type: "tel", name: "phone", label: "Phone", placeholder: "540-214-7725", required: true },
  { type: "text", name: "propertyAddress", label: "Property Address", placeholder: "Street address", required: true },
  {
    type: "select",
    name: "propertyType",
    label: "Property Type",
    options: ["Residential", "Luxury Listing", "Rental", "Airbnb", "Commercial", "New Construction"],
    required: true
  },
  {
    type: "select",
    name: "contentNeeded",
    label: "Content Needed",
    options: ["Photos", "Video", "Both", "Social Clips"],
    required: true
  },
  { type: "date", name: "preferredShootDate", label: "Preferred Shoot Date", required: true },
  { type: "text", name: "turnaroundNeeded", label: "Turnaround Needed", placeholder: "Standard or rush", required: true },
  { type: "textarea", name: "message", label: "Message", placeholder: "Share access details, square footage, listing goals, and must-capture areas.", required: true }
] as const;

export default function RealEstateMediaPage() {
  return (
    <ServicePage
      eyebrow="Real Estate Media · DMV Area"
      headline="Clean Real Estate Photo & Video for Listings That Need to Stand Out"
      subheadline="Professional real estate visuals for agents, property managers, builders, and short-term rental hosts across Richmond, Fredericksburg, Stafford, Northern Virginia, Arlington, Alexandria, Washington DC, and the DMV area."
      primaryCta="Book Real Estate Media"
      secondaryCta="View Property Work"
      secondaryCtaHref="/?portfolio=Real%20Estate#portfolio"
      heroImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90"
      heroAlt="Real estate photography and walkthrough video for Richmond VA and DMV area listings"
      positioning="Buyers judge a property before they ever step inside. Clean visuals help listings feel brighter, more polished, and more trustworthy. Brandon Media Group creates photo and video content designed to help properties present at their best across Richmond, Fredericksburg, Stafford, Northern Virginia, Arlington, Alexandria, Washington DC, and the DMV area."
      captureTitle="Services"
      captureItems={[
        "Listing Photography",
        "Walkthrough Video",
        "Vertical Social Media Tour",
        "Agent Intro Video",
        "Community / Neighborhood Clips",
        "Airbnb / Short-Term Rental Content"
      ]}
      bestFor={[
        "Residential listings",
        "Luxury listings",
        "Rental properties",
        "Airbnb / short-term rentals",
        "New construction",
        "Agent marketing"
      ]}
      deliverables={[
        "Edited listing photos",
        "Short walkthrough video",
        "Vertical reels for Instagram and TikTok",
        "Online delivery link",
        "Fast turnaround option"
      ]}
      ctaTitle="Ready to market a property?"
      ctaCopy="Send the address, preferred date, and content needed."
      projectType="Real Estate"
      formFields={formFields}
    />
  );
}
