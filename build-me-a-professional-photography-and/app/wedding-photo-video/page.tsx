import type { Metadata } from "next";
import { WeddingLandingPage } from "@/components/wedding-landing-page";
import { createMetadata } from "@/lib/seo";

const path = "/wedding-photo-video";
const title = "Virginia Wedding Photo & Video | Brandon Media Group";
const description = "Coordinated wedding photography and videography across Virginia and the DMV, with one planning process, natural coverage, clear audio, and polished delivery.";

export const metadata: Metadata = createMetadata({ title, description, path });

// CONTENT TODO: Add a verified combined-coverage testimonial when exact client wording is approved.

export default function WeddingPhotoVideoPage() {
  return (
    <WeddingLandingPage
      path={path}
      eyebrow="Wedding Photo + Video · Virginia & the DMV"
      headline="Wedding Photography and Videography From One Studio"
      subheadline="A coordinated approach for couples who want a complete gallery and cinematic film without managing two separate creative plans."
      heroImage="/portfolio/recent-work/weddings/_DSC7381.jpg"
      heroAlt="Newly married couple embracing during outdoor wedding portraits"
      introEyebrow="One Connected Story"
      introTitle="Photography and film can share the timeline without competing for it."
      introParagraphs={[
        "Brandon Media Group offers photography-only, film-only, and combined wedding coverage. The combined option is designed for couples who want the stillness of a photograph and the movement and sound of a film, planned through one studio from the beginning.",
        "Coordination does not mean making every photograph and video frame identical. It means the coverage priorities, portrait windows, ceremony plan, and reception schedule are considered together. That can simplify communication and help the day move more naturally while each medium does what it does best."
      ]}
      showcaseTitle="One celebration, preserved in more than one way"
      showcaseCopy="Existing Brandon Media Group wedding images show the people, preparations, and portraits that can anchor both the photographic gallery and the film narrative."
      gallery={[
        { src: "/portfolio/recent-work/weddings/_DSC7381.jpg", alt: "Wedding couple sharing a kiss outdoors after their ceremony", label: "Portrait + Motion" },
        { src: "/portfolio/recent-work/weddings/_DSC7106.jpg", alt: "Groom adjusting his attire while getting ready", label: "Preparation" },
        { src: "/portfolio/recent-work/weddings/_DSC7179.jpg", alt: "Bride posing with a white bouquet", label: "Portraiture" },
        { src: "/portfolio/recent-work/weddings/1000228928.JPG", alt: "Groomsmen standing together in formal wedding attire", label: "Wedding Party" }
      ]}
      detailsEyebrow="Combined Coverage"
      detailsTitle="What a coordinated photo-and-film plan can provide"
      detailsCopy="Exact hours and deliverables vary by collection. The plan is confirmed in writing after your date, schedule, and priorities are reviewed."
      details={[
        { title: "One planning conversation", copy: "Share the timeline, priorities, and logistics once so photography and film can be considered together." },
        { title: "Connected coverage", copy: "The plan accounts for both still portraits and motion, helping important moments receive the right kind of attention." },
        { title: "Photography gallery", copy: "A full or curated edited gallery preserves details, people, portraits, and the sequence of the day, depending on the selected collection." },
        { title: "Cinematic wedding film", copy: "A story-driven film combines motion, natural sound, music, and the spoken words captured during the celebration." },
        { title: "Ceremony & audio options", copy: "Current collections include ceremony coverage and professional audio options for vows, speeches, and toasts." },
        { title: "Private online delivery", copy: "Finished photographs and films are delivered digitally through a private online experience for convenient viewing and sharing." }
      ]}
      momentsTitle="Two mediums, one set of priorities."
      momentsCopy="A coordinated plan gives both photography and videography the context needed to tell the day honestly from preparation through celebration."
      moments={[
        "Attire, rings, invitations, and personal details",
        "Getting-ready photographs, motion, and natural sound",
        "First looks and private vows",
        "Ceremony entrances, vows, rings, and reactions",
        "Family, wedding-party, and couple portraits",
        "Reception entrances and first dances",
        "Speeches and toasts with clear audio",
        "Guest candids, dancing, and final moments"
      ]}
      planningEyebrow="A Shared Timeline"
      planningTitle="Decide what matters before deciding how many hours."
      planningParagraphs={[
        "Start with the moments you would miss if they were not preserved. If getting ready, a first look, full ceremony, sunset portraits, speeches, and open dancing all matter, those priorities need to fit the same realistic schedule.",
        "Combined coverage works best when travel time, family groups, reception formalities, and private moments are disclosed early. The goal is not to add more production to the day; it is to make both forms of coverage more prepared."
      ]}
      planningPoints={[
        "List the moments that need photographs, film, or both.",
        "Share the complete address list and travel plan.",
        "Identify must-hear audio such as private vows, ceremony vows, and toasts.",
        "Confirm long-form edits and social clips before the coverage plan is finalized."
      ]}
      investmentTitle="Combined wedding coverage and delivery"
      investmentCopy="Current wedding guidance on the site places most couples between $1,500 and $2,600, depending on coverage needs. A precise photo-and-video quote is prepared after the date, location, hours, and requested film and gallery deliverables are known."
      timingCopy="The current published delivery windows are 4–6 weeks for photographs and 6–8 weeks for wedding films."
      faqs={[
        { question: "Why book wedding photography and videography together?", answer: "A combined booking creates one planning path for the timeline and coverage priorities. It may reduce the coordination you need to handle while still giving photographs and film distinct roles." },
        { question: "Can we customize what photo and video include?", answer: "Coverage and enhancements can be discussed around your timeline and delivery needs. Exact inclusions are confirmed in the service agreement." },
        { question: "Will photo and video both cover the ceremony?", answer: "Ceremony coverage is part of the current wedding offering, but the exact photo, film, and audio plan depends on the collection you select." },
        { question: "Can we add social media clips or a documentary edit?", answer: "Yes. Social media highlight clips and a full documentary edit are listed among the current wedding enhancements." },
        { question: "How long does delivery take?", answer: "The current delivery windows are 4–6 weeks for wedding photographs and 6–8 weeks for wedding films." },
        { question: "Can we book only one service instead?", answer: "Yes. Brandon Media Group also offers photography-only and cinematic video-only coverage." }
      ]}
      relatedTitle="Explore each part of the wedding experience"
      relatedLinks={[
        { label: "Wedding Photography", href: "/wedding-photography", copy: "Review the photographic approach, gallery coverage, and delivery." },
        { label: "Wedding Videography", href: "/wedding-videography", copy: "Learn about cinematic storytelling, ceremony films, and audio." },
        { label: "Engagement Photography", href: "/engagement-photography", copy: "Plan a relaxed portrait session before the wedding day." },
        { label: "Alexandria Weddings", href: "/alexandria-wedding-photographer-videographer", copy: "See how combined coverage can be planned for Alexandria." },
        { label: "Northern Virginia Weddings", href: "/northern-virginia-wedding-photographer-videographer", copy: "Explore wedding coverage across Northern Virginia." },
        { label: "Contact", href: "/#contact", copy: "Check availability and request the full wedding pricing guide." }
      ]}
      ctaTitle="One inquiry for the complete story."
      ctaCopy="Tell us your date, location, and which parts of the day you want preserved in photographs, film, or both."
      projectType="Wedding Photo + Video"
      serviceName="Wedding Photography and Videography"
      serviceDescription={description}
      areaServed={["Virginia", "Northern Virginia", "Alexandria, Virginia", "Washington, DC", "DMV area"]}
      secondaryCta="View Wedding Work"
    />
  );
}
