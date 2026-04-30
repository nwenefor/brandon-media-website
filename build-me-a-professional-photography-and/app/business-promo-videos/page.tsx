import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Business Promo Videos | Brandon Media Group LLC",
  description:
    "Clean, story-driven promotional videos for local businesses, service providers, restaurants, salons, gyms, clinics, creators, and brands."
};

const formFields = [
  { type: "text", name: "businessName", label: "Business Name", required: true },
  { type: "email", name: "email", label: "Email", placeholder: "you@business.com", required: true },
  { type: "tel", name: "phone", label: "Phone Number", placeholder: "540-214-7725", required: true },
  { type: "text", name: "industry", label: "Industry", placeholder: "Restaurant, clinic, gym, salon, service business", required: true },
  { type: "text", name: "websiteInstagram", label: "Website / Instagram", placeholder: "Website URL or @handle", required: true },
  {
    type: "select",
    name: "projectGoal",
    label: "Project Goal",
    options: ["Brand Awareness", "More Leads", "Product or Service Promo", "Social Media Content", "Event Promo"],
    required: true
  },
  {
    type: "select",
    name: "videoNeeded",
    label: "Video Needed",
    options: ["Main Promo", "Reels", "Both", "Not Sure"],
    required: true
  },
  { type: "text", name: "preferredTimeline", label: "Preferred Timeline", placeholder: "When do you need it?", required: true },
  { type: "text", name: "budgetRange", label: "Budget Range", placeholder: "Estimated budget", required: true },
  { type: "textarea", name: "message", label: "Message", placeholder: "Tell us what you do, what you want to promote, and where the video will be used.", required: true }
] as const;

export default function BusinessPromoVideosPage() {
  return (
    <ServicePage
      eyebrow="Business Promo Videos · DMV Area"
      headline="Promo Videos for Local Businesses That Need Better Content and More Trust"
      subheadline="Clean, story-driven video content for local businesses, service providers, restaurants, salons, gyms, clinics, creators, and brands."
      primaryCta="Start a Promo Project"
      secondaryCta="View Business Work"
      secondaryCtaHref="/?portfolio=Business%20Promos#portfolio"
      heroImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=90"
      heroAlt="Local business owner reviewing promotional content"
      positioning="Your business does not need random clips. It needs content that explains what you do, builds trust, and gives people a reason to choose you. We create clean promotional videos that help local businesses look more credible and connect with customers."
      captureTitle="Video Types"
      captureItems={[
        "Brand Story Video",
        "Service Explainer Video",
        "Customer Experience Video",
        "Social Media Reels",
        "Behind-the-Scenes Content",
        "Product or Service Showcase"
      ]}
      bestFor={[
        "Local service businesses",
        "Restaurants",
        "Beauty and wellness brands",
        "Gyms and trainers",
        "Real estate agents",
        "Event vendors",
        "Online creators",
        "Small business owners"
      ]}
      deliverables={[
        "One main promo video",
        "Short vertical clips",
        "Social media-ready exports",
        "Thumbnail options",
        "Clean color and audio",
        "Usage-ready digital delivery"
      ]}
      ctaTitle="Need content for your business?"
      ctaCopy="Tell us what you do, what you want to promote, and where the video will be used."
      projectType="Business Promo"
      formFields={formFields}
    />
  );
}
