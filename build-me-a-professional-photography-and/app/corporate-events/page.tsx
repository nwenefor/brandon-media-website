import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Corporate Event Photo & Video Coverage in Richmond and the DMV",
  description:
    "Polished corporate event photo and video coverage for conferences, galas, brand activations, and company events in Richmond, Fredericksburg, Northern Virginia, Washington DC, Arlington, Alexandria, Stafford, and the DMV area."
};

const formFields = [
  { type: "text", name: "organization", label: "Company / Organization Name", required: true },
  { type: "email", name: "email", label: "Email", placeholder: "you@company.com", required: true },
  { type: "tel", name: "phone", label: "Phone Number", placeholder: "540-214-7725", required: true },
  { type: "date", name: "eventDate", label: "Event Date", required: true },
  { type: "text", name: "eventLocation", label: "Event Location", placeholder: "Venue or city", required: true },
  { type: "select", name: "coverageNeeded", label: "Coverage Needed", options: ["Photo", "Video", "Both"], required: true },
  { type: "text", name: "eventLength", label: "Estimated Event Length", placeholder: "Example: 4 hours", required: true },
  {
    type: "select",
    name: "mainGoal",
    label: "Main Goal",
    options: ["Documentation", "Social Media Content", "Marketing Recap", "Internal Use", "Not Sure"],
    required: true
  },
  { type: "text", name: "budgetRange", label: "Budget Range", placeholder: "Estimated budget", required: true },
  { type: "textarea", name: "message", label: "Message", placeholder: "Tell us about the event, audience, schedule, and delivery needs.", required: true }
] as const;

export default function CorporateEventsPage() {
  return (
    <ServicePage
      eyebrow="Corporate Event Media · DMV Area"
      headline="Corporate Event Photo & Video Coverage That Feels Polished, Professional, and On-Brand"
      subheadline="Coverage for conferences, galas, company events, brand activations, networking events, and milestone celebrations across Richmond, Fredericksburg, Northern Virginia, Washington DC, Arlington, Alexandria, Stafford, and the DMV area."
      primaryCta="Request Availability"
      secondaryCta="View Event Work"
      secondaryCtaHref="/?portfolio=Corporate%20Events#portfolio"
      heroImage="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=2200&q=90"
      heroAlt="Corporate event photo and video coverage for Washington DC and Northern Virginia companies"
      positioning="Corporate events need more than someone with a camera. They need clean coverage, professional presence, reliable delivery, and content that can be used across websites, internal communications, social media, and future marketing throughout Richmond, Fredericksburg, Northern Virginia, Washington DC, Arlington, Alexandria, Stafford, and the DMV area."
      captureTitle="What We Capture"
      captureItems={[
        "Event Highlights",
        "Speaker & Panel Coverage",
        "Guest Reactions & Networking",
        "Social Media Clips"
      ]}
      bestFor={[
        "Conferences",
        "Business networking events",
        "Corporate galas",
        "Award ceremonies",
        "Brand activations",
        "Company celebrations",
        "Nonprofit events"
      ]}
      deliverables={[
        "Edited photo gallery",
        "Event recap video",
        "Short social media clips",
        "Speaker or panel clips",
        "Private online delivery gallery"
      ]}
      ctaTitle="Planning a corporate event?"
      ctaCopy="Share your date, location, and coverage needs so we can recommend the right package."
      projectType="Corporate Event"
      formFields={formFields}
    />
  );
}
