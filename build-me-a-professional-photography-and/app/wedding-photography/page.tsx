import type { Metadata } from "next";
import { WeddingLandingPage } from "@/components/wedding-landing-page";
import { createMetadata } from "@/lib/seo";

const path = "/wedding-photography";
const title = "Virginia Wedding Photographer | Brandon Media Group";
const description = "Natural, polished wedding photography across Virginia and the DMV, with calm direction, thoughtful portraits, full-day storytelling, and private galleries.";

export const metadata: Metadata = createMetadata({ title, description, path });

// CONTENT TODO: Add a verified client testimonial when written permission and exact wording are available.

export default function WeddingPhotographyPage() {
  return (
    <WeddingLandingPage
      path={path}
      eyebrow="Wedding Photography · Virginia & the DMV"
      headline="Wedding Photography With a Calm, Story-Driven Approach"
      subheadline="Natural photographs, polished portraits, and the in-between moments that let you remember how the celebration actually felt."
      heroImage="/portfolio/recent-work/weddings/_DSC7179.jpg"
      heroAlt="Bride holding a white bouquet during her wedding portrait"
      introEyebrow="Honest, Refined Images"
      introTitle="Photographs for the people living the day—not performing for it."
      introParagraphs={[
        "Brandon Media Group blends documentary observation with clear, relaxed direction. The goal is to preserve real expressions and relationships while also making space for the family photographs, wedding-party images, and couple portraits you will want in the finished gallery.",
        "Good coverage begins before the shutter is pressed. We learn what matters to you, review the timeline, and identify the people and traditions that should not be missed. On the wedding day, that preparation makes it easier to move between candid moments and guided portraits without making the photography feel like the main event."
      ]}
      showcaseTitle="Real celebrations, thoughtfully photographed"
      showcaseCopy="A selection from existing Brandon Media Group wedding galleries. These images are shown as portfolio work without assigning an unverified venue or city to the celebration."
      gallery={[
        { src: "/portfolio/recent-work/weddings/_DSC7381.jpg", alt: "Newly married couple sharing a kiss during outdoor portraits", label: "Couple Portrait" },
        { src: "/portfolio/recent-work/weddings/_DSC7179.jpg", alt: "Bride standing with her bouquet against a light backdrop", label: "Bridal Portrait" },
        { src: "/portfolio/recent-work/weddings/_DSC7106.jpg", alt: "Groom getting ready in embroidered black wedding attire", label: "Getting Ready" },
        { src: "/portfolio/recent-work/weddings/1000228928.JPG", alt: "Group of groomsmen in coordinated wedding attire", label: "Wedding Party" }
      ]}
      detailsEyebrow="Photography Coverage"
      detailsTitle="A gallery that follows the day from details to celebration"
      detailsCopy="Coverage is planned around your schedule, priorities, and selected collection. The exact hours and inclusions are documented before the wedding."
      details={[
        { title: "Getting ready", copy: "Attire, invitation details, final preparations, and the interactions that set the emotional tone before the ceremony." },
        { title: "Ceremony", copy: "Entrances, vows, ring exchanges, reactions, and the moments immediately before and after you are married." },
        { title: "Family & wedding party", copy: "An organized plan helps important group photographs move efficiently while keeping everyone comfortable." },
        { title: "Couple portraits", copy: "Natural direction and thoughtful composition create polished portraits without forcing expressions or interrupting your connection." },
        { title: "Reception story", copy: "Room details, entrances, dances, toasts, traditions, guest reactions, and open celebration complete the visual record." },
        { title: "Private online gallery", copy: "The finished collection is edited with clean color and delivered through a private online gallery for easy viewing and sharing." }
      ]}
      momentsTitle="Both the milestones and the spaces between them matter."
      momentsCopy="A complete wedding gallery brings formal photographs and unscripted interactions together, so the day reads as one connected story."
      moments={[
        "Wedding attire, rings, invitations, and personal details",
        "Getting ready with the people closest to you",
        "First looks and private exchanges",
        "Ceremony entrances, vows, and reactions",
        "Family and wedding-party photographs",
        "Guided couple portraits",
        "Reception details, dances, and speeches",
        "Candid guest moments and open dancing"
      ]}
      planningEyebrow="Photography Planning"
      planningTitle="Make room for portraits without losing the party."
      planningParagraphs={[
        "The portrait plan should support the day rather than take it over. A concise family-photo list, realistic travel windows, and a clear point person can prevent delays and keep the people you love from waiting around unnecessarily.",
        "Light changes through the day, but meaningful photographs are not limited to a perfect sunset. Share your schedule and locations early so portrait time can be placed where it works naturally, with an indoor or weather-safe alternative in mind."
      ]}
      planningPoints={[
        "Keep the formal family list focused and identify any sensitive relationships.",
        "Allow time for travel, parking, and gathering the wedding party.",
        "Set aside a short, protected window for couple portraits.",
        "Tell us about heirlooms, traditions, or people that need special attention."
      ]}
      investmentTitle="Wedding photography investment and delivery"
      investmentCopy="Current wedding guidance on the site places most couples between $1,500 and $2,600, depending on coverage needs. Photography-only and combined collections are available; an exact quote follows confirmation of the date, location, timeline, and requested deliverables."
      timingCopy="The current delivery window for wedding photographs is 4–6 weeks through a private online gallery."
      faqs={[
        { question: "What is your wedding photography style?", answer: "The existing Brandon Media Group approach is clean, natural, and story-driven, with calm direction for portraits and space for real moments to unfold." },
        { question: "Do you help with the wedding timeline?", answer: "Yes. Timeline guidance is included in the current wedding process so photography priorities, travel, family groups, and major events can be planned realistically." },
        { question: "How are wedding photographs delivered?", answer: "Edited photographs are delivered in a private online gallery designed for viewing and sharing." },
        { question: "How long does the gallery take?", answer: "The current published delivery window for wedding photographs is 4–6 weeks." },
        { question: "Can we book photography without videography?", answer: "Yes. Photography-only coverage is listed alongside cinematic video-only and combined photo-and-video collections." },
        { question: "Do you photograph engagement sessions too?", answer: "Yes. Engagement photography is available for couples who want relaxed portraits, time in front of the camera before the wedding, or images for announcements and wedding materials." }
      ]}
      relatedTitle="Build the coverage that fits your plans"
      relatedLinks={[
        { label: "Wedding Videography", href: "/wedding-videography", copy: "Explore cinematic films, ceremony coverage, and professional audio." },
        { label: "Wedding Photo + Video", href: "/wedding-photo-video", copy: "Learn about coordinated photography and videography from one studio." },
        { label: "Engagement Photography", href: "/engagement-photography", copy: "Prepare for a relaxed session before the wedding day." },
        { label: "Alexandria Weddings", href: "/alexandria-wedding-photographer-videographer", copy: "Plan wedding coverage in Alexandria, Virginia." },
        { label: "Northern Virginia Weddings", href: "/northern-virginia-wedding-photographer-videographer", copy: "Review local planning considerations across Northern Virginia." },
        { label: "Contact", href: "/#contact", copy: "Check your date and request a coverage recommendation." }
      ]}
      ctaTitle="Tell us how you want the day remembered."
      ctaCopy="Share your date, location, estimated timeline, and any people or traditions that should have a place in your finished gallery."
      projectType="Wedding Photography"
      serviceName="Wedding Photography"
      serviceDescription={description}
      areaServed={["Virginia", "Northern Virginia", "Alexandria, Virginia", "Washington, DC", "DMV area"]}
      secondaryCta="View Wedding Photography"
    />
  );
}
