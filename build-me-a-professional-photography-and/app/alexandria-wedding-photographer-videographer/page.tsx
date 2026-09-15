import type { Metadata } from "next";
import { WeddingLandingPage } from "@/components/wedding-landing-page";
import { createMetadata } from "@/lib/seo";

const path = "/alexandria-wedding-photographer-videographer";
const title = "Alexandria VA Wedding Photographer & Videographer | Brandon Media Group";
const description = "Wedding photography and videography in Alexandria, Virginia, with natural imagery, cinematic films, timeline planning, clear audio, and coordinated coverage.";

export const metadata: Metadata = createMetadata({ title, description, path });

// CONTENT TODO: Add an Alexandria-specific wedding gallery only after the location is verified in the project records.
// CONTENT TODO: Add a verified Alexandria couple testimonial when exact approved wording is available.

export default function AlexandriaWeddingPage() {
  return (
    <WeddingLandingPage
      path={path}
      eyebrow="Alexandria, Virginia Weddings"
      headline="Wedding Photography & Videography in Alexandria, Virginia"
      subheadline="Natural wedding photographs and cinematic films, planned around your people, your timeline, and the practical details of an Alexandria celebration."
      heroImage="/portfolio/recent-work/weddings/_DSC7381.jpg"
      heroAlt="Wedding couple sharing a kiss during outdoor portraits"
      introEyebrow="Local Coverage, Honest Context"
      introTitle="A flexible approach for a wedding day that may move through the city."
      introParagraphs={[
        "Alexandria can support many different wedding-day looks, from historic streets and urban architecture to waterfront light, hotels, and indoor celebrations. Brandon Media Group provides wedding photography, wedding videography, and coordinated coverage for couples planning in Alexandria and the surrounding Northern Virginia and DMV area.",
        "The current public portfolio is not labeled with enough location data to claim a specific Alexandria venue. The work shown here is real Brandon Media Group wedding coverage and represents the studio’s visual approach—not a claim that every image was created in Alexandria."
      ]}
      showcaseTitle="Recent wedding work from Brandon Media Group"
      showcaseCopy="Clean color, calm portrait direction, and attention to the people around the couple define the work. A venue-specific gallery can be discussed during inquiry if verified examples are available."
      gallery={[
        { src: "/portfolio/recent-work/weddings/_DSC7381.jpg", alt: "Newly married couple kissing during outdoor portraits", label: "Couple Portraits" },
        { src: "/portfolio/recent-work/weddings/_DSC7106.jpg", alt: "Groom adjusting his wedding attire while getting ready", label: "Getting Ready" },
        { src: "/portfolio/recent-work/weddings/_DSC7179.jpg", alt: "Bride standing with a white bouquet", label: "Bridal Portrait" },
        { src: "/portfolio/recent-work/weddings/1000228928.JPG", alt: "Groomsmen standing together in coordinated formalwear", label: "Wedding Party" }
      ]}
      detailsEyebrow="Services in Alexandria"
      detailsTitle="Choose photography, videography, or one coordinated collection"
      detailsCopy="Coverage is shaped around the date, addresses, timeline, and deliverables you need. Exact availability and inclusions are confirmed before booking."
      details={[
        { title: "Wedding photography", copy: "Documentary-minded coverage with relaxed direction for couple, family, and wedding-party portraits." },
        { title: "Wedding videography", copy: "Cinematic storytelling with professional audio for vows, speeches, toasts, and other meaningful words." },
        { title: "Photo + video", copy: "One planning process coordinates the timeline and priorities for both the finished gallery and wedding film." },
        { title: "Engagement photography", copy: "A relaxed session can introduce the portrait approach and create images before the wedding day." },
        { title: "Timeline guidance", copy: "Address changes, portrait windows, family groups, and reception events are considered before coverage begins." },
        { title: "Private delivery", copy: "Finished photographs and films are delivered through a private online experience for viewing and sharing." }
      ]}
      momentsTitle="Coverage follows the relationships, not a city keyword list."
      momentsCopy="The location creates a setting. The people, words, and traditions give the photographs and film their meaning."
      moments={[
        "Getting ready and personal details",
        "First looks and private vows",
        "Ceremony entrances, vows, and rings",
        "Family and wedding-party portraits",
        "Couple portraits around the day’s real locations",
        "Reception details, entrances, and dances",
        "Speeches and toasts with clear audio",
        "Candid guest moments and celebration"
      ]}
      planningEyebrow="Planning an Alexandria Wedding"
      planningTitle="Build travel, access, and portrait time into the plan."
      planningParagraphs={[
        "If getting ready, the ceremony, portraits, and reception happen at different addresses, share the full route early. Alexandria traffic, parking, loading access, and walking time can affect how much coverage is realistically available between events. A schedule that treats travel as real time is usually calmer for everyone.",
        "For outdoor or public-space portraits, confirm access and photography rules rather than assuming a location is always available. It also helps to choose a weather-safe portrait option and identify which photographs can happen indoors without disrupting the celebration."
      ]}
      planningPoints={[
        "List every address, arrival window, and parking or loading instruction.",
        "Ask properties and public spaces about photography access or permit rules.",
        "Keep the family-photo list focused and assign someone who knows the group.",
        "Plan an indoor or covered alternative for portraits and audio-sensitive moments."
      ]}
      investmentTitle="Alexandria wedding coverage and delivery"
      investmentCopy="Current wedding guidance on the site places most couples between $1,500 and $2,600, depending on coverage needs. The exact Alexandria quote depends on the date, schedule, locations, hours, and whether you choose photography, film, or both."
      timingCopy="The current published delivery windows are 4–6 weeks for wedding photographs and 6–8 weeks for wedding films."
      faqs={[
        { question: "Do you provide both wedding photography and videography in Alexandria?", answer: "Yes. Brandon Media Group offers photography-only, cinematic video-only, and combined wedding coverage in Alexandria, subject to date availability." },
        { question: "Have you worked at our Alexandria venue?", answer: "The current public project records do not verify specific Alexandria venues, so none are claimed on this page. Share your venue during inquiry and Brandon Media Group can answer directly and plan around its actual rules and layout." },
        { question: "Can coverage include more than one Alexandria location?", answer: "Yes, when the selected coverage and timeline allow. Share every address and travel window so the plan does not treat transportation, parking, or loading as portrait time." },
        { question: "What happens if our portrait plan depends on weather?", answer: "Choose a permitted indoor, covered, or otherwise weather-safe alternative before the day. The final plan can prioritize the most important groups and couple portraits if conditions change." },
        { question: "How do we receive photographs and films?", answer: "Current wedding deliverables use private online gallery delivery. Exact gallery and film inclusions depend on the selected collection." },
        { question: "How do we check our date?", answer: "Send the date, ceremony and reception locations, estimated timeline, and the coverage you are considering. Brandon Media Group will confirm availability and the appropriate next step." }
      ]}
      relatedTitle="Explore wedding services available in Alexandria"
      relatedLinks={[
        { label: "Wedding Photography", href: "/wedding-photography", copy: "Review portrait coverage, documentary moments, and gallery delivery." },
        { label: "Wedding Videography", href: "/wedding-videography", copy: "Explore cinematic films, ceremony coverage, and professional audio." },
        { label: "Wedding Photo + Video", href: "/wedding-photo-video", copy: "Plan both services through one coordinated studio workflow." },
        { label: "Engagement Photography", href: "/engagement-photography", copy: "Prepare for a relaxed portrait session before the wedding." },
        { label: "Northern Virginia Weddings", href: "/northern-virginia-wedding-photographer-videographer", copy: "See the broader Northern Virginia wedding coverage area." },
        { label: "Contact", href: "/#contact", copy: "Share your Alexandria date, addresses, and coverage priorities." }
      ]}
      ctaTitle="Tell us about your Alexandria wedding."
      ctaCopy="Share the date, ceremony and reception locations, expected travel, and whether you are considering photography, videography, or both."
      projectType="Alexandria Wedding"
      serviceName="Alexandria Wedding Photography and Videography"
      serviceDescription={description}
      areaServed={["Alexandria, Virginia", "Northern Virginia", "DMV area"]}
      secondaryCta="View Wedding Work"
    />
  );
}
