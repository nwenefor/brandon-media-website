import type { Metadata } from "next";
import { WeddingLandingPage } from "@/components/wedding-landing-page";
import { createMetadata } from "@/lib/seo";

const path = "/northern-virginia-wedding-photographer-videographer";
const title = "Northern Virginia Wedding Photographer & Videographer | Brandon Media Group";
const description = "Wedding photography and videography across Northern Virginia, with natural portraits, cinematic films, timeline guidance, clear audio, and coordinated coverage.";

export const metadata: Metadata = createMetadata({ title, description, path });

// CONTENT TODO: Add location-labeled Northern Virginia galleries only when each wedding location is verified.
// CONTENT TODO: Add a verified Northern Virginia couple testimonial when exact approved wording is available.

export default function NorthernVirginiaWeddingPage() {
  return (
    <WeddingLandingPage
      path={path}
      eyebrow="Northern Virginia Weddings"
      headline="Northern Virginia Wedding Photography & Videography"
      subheadline="Clean, natural photographs and cinematic films for couples who want calm coverage, thoughtful planning, and a true record of the day."
      heroImage="/portfolio/recent-work/weddings/_DSC7381.jpg"
      heroAlt="Newly married couple embracing during outdoor wedding portraits"
      introEyebrow="Coverage Across Northern Virginia"
      introTitle="A steady approach for celebrations with real moving parts."
      introParagraphs={[
        "Brandon Media Group serves wedding couples across Northern Virginia and the wider DMV area, with Alexandria, Arlington, and Stafford already represented in the business’s supported service area. Coverage is available as photography, videography, or a coordinated combination of both.",
        "Northern Virginia wedding schedules often need to account for more than the ceremony start time. Multiple addresses, regional traffic, parking, property access, family logistics, and a connection to Washington, DC can all shape the usable photography and film time. Planning those details early protects the moments the coverage is there to preserve."
      ]}
      showcaseTitle="Real wedding work, presented without unverified location claims"
      showcaseCopy="These images come from existing Brandon Media Group wedding galleries. Because the public files do not confirm where each wedding occurred, the portfolio demonstrates style and coverage rather than assigning a city or venue to the photographs."
      gallery={[
        { src: "/portfolio/recent-work/weddings/_DSC7381.jpg", alt: "Wedding couple sharing a kiss during outdoor portraits", label: "Couple Portraits" },
        { src: "/portfolio/recent-work/weddings/_DSC7179.jpg", alt: "Bride posing with a white bouquet", label: "Bridal Portrait" },
        { src: "/portfolio/recent-work/weddings/_DSC7106.jpg", alt: "Groom adjusting embroidered wedding attire", label: "Getting Ready" },
        { src: "/portfolio/recent-work/weddings/1000228928.JPG", alt: "Groomsmen gathered in coordinated formalwear", label: "Wedding Party" }
      ]}
      detailsEyebrow="Northern Virginia Services"
      detailsTitle="Coverage choices for the way you want to remember the day"
      detailsCopy="The collection is built after the date, timeline, addresses, and priorities are understood. No venue history, hours, or deliverables are assumed."
      details={[
        { title: "Wedding photography", copy: "Natural documentary coverage paired with clear direction for couple, family, and wedding-party portraits." },
        { title: "Wedding videography", copy: "Cinematic films shaped by movement, natural sound, professional audio, and the emotional sequence of the day." },
        { title: "Photo + video", copy: "One planning conversation connects both services while allowing photographs and film to do different jobs." },
        { title: "Engagement photography", copy: "A relaxed portrait session can help you feel more familiar with direction before the wedding." },
        { title: "Timeline guidance", copy: "Travel, portraits, ceremony audio, family groups, and reception events are considered before the coverage plan is final." },
        { title: "Flexible enhancements", copy: "Current options include added hours, a documentary edit, social clips, a same-day teaser, and a raw-footage archive." }
      ]}
      momentsTitle="Every part of the day adds context to the finished story."
      momentsCopy="The coverage plan can follow preparations, ceremony, portraits, and reception while staying centered on the people and traditions that matter to you."
      moments={[
        "Getting ready and meaningful personal details",
        "First looks and private exchanges",
        "Ceremony entrances, vows, rings, and reactions",
        "Family and wedding-party portraits",
        "Couple portraits with calm direction",
        "Reception entrances, dances, and traditions",
        "Speeches and toasts with professional audio",
        "Candid guest moments and open celebration"
      ]}
      planningEyebrow="Regional Wedding Planning"
      planningTitle="Treat distance and access as part of the creative plan."
      planningParagraphs={[
        "A schedule can look generous until traffic, parking, room access, and gathering family members are included. Share all addresses and hard start times early, especially if the wedding moves between Northern Virginia and Washington, DC. That lets the coverage plan protect the ceremony and reception rather than relying on an unrealistic transfer window.",
        "For portraits, identify what the property allows, whether a public location requires permission, and what indoor option is available in difficult weather. The most useful plan is not the one with the most locations; it is the one that keeps the people and photographs from feeling rushed."
      ]}
      planningPoints={[
        "Include realistic driving, parking, loading, and walking time between addresses.",
        "Confirm property access, photography rules, and audio restrictions in advance.",
        "Prioritize the family groups and traditions that cannot be recreated later.",
        "Choose one weather-safe portrait option that will still feel intentional."
      ]}
      investmentTitle="Northern Virginia wedding coverage and delivery"
      investmentCopy="Current wedding guidance on the site places most couples between $1,500 and $2,600, depending on coverage needs. Exact pricing depends on the date, schedule, locations, hours, and whether the collection includes photography, film, or both."
      timingCopy="The current published delivery windows are 4–6 weeks for wedding photographs and 6–8 weeks for wedding films."
      faqs={[
        { question: "What parts of Northern Virginia do you serve?", answer: "Northern Virginia is an existing service area for Brandon Media Group, with Alexandria, Arlington, and Stafford also named in the current site content. Availability for your exact date and location is confirmed through inquiry." },
        { question: "Can our wedding include locations in Northern Virginia and Washington, DC?", answer: "It can when the selected coverage and timeline reasonably allow. Share every address, hard start time, and expected travel window so the quote and plan reflect the real schedule." },
        { question: "Do you offer photography and videography together?", answer: "Yes. Couples can choose photography-only, cinematic video-only, or a combined photo-and-video collection." },
        { question: "Do you help with the timeline?", answer: "Yes. The current wedding process includes timeline support, with attention to travel, portraits, ceremony coverage, audio, family groups, and reception events." },
        { question: "How are wedding photographs and films delivered?", answer: "Current deliverables use private online gallery delivery. The specific photographs, films, and long-form edits depend on the selected collection." },
        { question: "When should we inquire?", answer: "Inquire when you have a date and general location, even if every detail is not final. Availability and the right next planning step can then be confirmed without assuming a booking window." }
      ]}
      relatedTitle="Choose the service that matches your priorities"
      relatedLinks={[
        { label: "Wedding Photography", href: "/wedding-photography", copy: "Explore natural portraits, documentary moments, and gallery delivery." },
        { label: "Wedding Videography", href: "/wedding-videography", copy: "Review cinematic storytelling, ceremony films, and clear audio." },
        { label: "Wedding Photo + Video", href: "/wedding-photo-video", copy: "Learn how one coordinated coverage plan can serve both mediums." },
        { label: "Engagement Photography", href: "/engagement-photography", copy: "Plan a relaxed portrait session before the wedding." },
        { label: "Alexandria Weddings", href: "/alexandria-wedding-photographer-videographer", copy: "See practical planning guidance for an Alexandria celebration." },
        { label: "Contact", href: "/#contact", copy: "Share your Northern Virginia date, locations, and coverage needs." }
      ]}
      ctaTitle="Start with the date, locations, and moments that matter."
      ctaCopy="Tell us what is planned so far and whether you are considering photography, videography, or complete combined coverage."
      projectType="Northern Virginia Wedding"
      serviceName="Northern Virginia Wedding Photography and Videography"
      serviceDescription={description}
      areaServed={["Northern Virginia", "Alexandria, Virginia", "Arlington, Virginia", "Stafford, Virginia", "Washington, DC", "DMV area"]}
      secondaryCta="View Wedding Work"
    />
  );
}
