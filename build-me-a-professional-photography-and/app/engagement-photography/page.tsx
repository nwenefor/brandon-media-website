import type { Metadata } from "next";
import { WeddingLandingPage } from "@/components/wedding-landing-page";
import { createMetadata } from "@/lib/seo";

const path = "/engagement-photography";
const title = "Virginia Engagement Photographer | Brandon Media Group";
const description = "Relaxed engagement photography in Virginia and the DMV, with natural direction, flexible location planning, session preparation, and wedding-booking options.";

export const metadata: Metadata = createMetadata({ title, description, path });

// CONTENT TODO: Add a dedicated engagement gallery and verified couple testimonial when approved assets are available.
// CONTENT TODO: Publish engagement-session pricing and delivery timing only after the business confirms those details.

export default function EngagementPhotographyPage() {
  return (
    <WeddingLandingPage
      path={path}
      eyebrow="Engagement Photography · Virginia & the DMV"
      headline="Relaxed Engagement Photography Built Around Your Connection"
      subheadline="A low-pressure portrait session with natural direction, thoughtful location planning, and images that still feel like you."
      heroImage="/portfolio/recent-work/weddings/_DSC7381.jpg"
      heroAlt="Couple sharing a kiss during a naturally directed portrait"
      introEyebrow="Time in Front of the Camera"
      introTitle="An engagement session can be useful and meaningful."
      introParagraphs={[
        "Engagement photographs can mark this season of your relationship, give you images for announcements or wedding materials, and help you learn what it feels like to be photographed together before the wedding day. The session is guided, but it is not built around stiff poses or performing a version of yourselves.",
        "Brandon Media Group uses simple prompts, movement, and calm direction to create a mix of polished portraits and natural interaction. Locations are chosen with the look you want, practical access, available light, privacy, and any permit requirements in mind."
      ]}
      showcaseTitle="Natural portrait direction, shown through real wedding work"
      showcaseCopy="The current public portfolio contains wedding-day portraits rather than a dedicated engagement gallery. These real Brandon Media Group images show the clean color, relaxed direction, and couple-focused approach you can expect; ask whether a full engagement example is available."
      gallery={[
        { src: "/portfolio/recent-work/weddings/_DSC7381.jpg", alt: "Couple kissing during an outdoor wedding portrait", label: "Natural Interaction" },
        { src: "/portfolio/recent-work/weddings/_DSC7179.jpg", alt: "Bride holding a white bouquet during a clean portrait", label: "Clean Color" },
        { src: "/portfolio/recent-work/weddings/_DSC7106.jpg", alt: "Groom looking down while adjusting his formalwear", label: "Quiet Detail" },
        { src: "/portfolio/recent-work/weddings/_DSC7277-2.jpg", alt: "Bride smiling with her bouquet and wedding ring", label: "Relaxed Direction" }
      ]}
      detailsEyebrow="Session Coverage"
      detailsTitle="A simple session with room to settle in"
      detailsCopy="The exact session length, image count, pricing, and delivery timing are confirmed during the inquiry process rather than guessed on the page."
      details={[
        { title: "Location planning", copy: "Choose a setting based on your preferred look, travel comfort, light, access, and any photography rules—not a generic list of popular spots." },
        { title: "Natural direction", copy: "Clear prompts and small adjustments help you look comfortable while leaving room for genuine expressions and movement." },
        { title: "Outfit guidance", copy: "We can discuss how colors, formality, layers, and movement will work together without asking you to dress unlike yourselves." },
        { title: "A varied gallery", copy: "The session can include wider environmental portraits, closer connection, movement, and quiet details within the agreed time." },
        { title: "Wedding preparation", copy: "You learn how the direction feels and what kinds of prompts work for you, which can make wedding-day portrait time more familiar." },
        { title: "Wedding booking options", copy: "If you are also planning wedding coverage, ask how an engagement session can fit alongside photography or a combined photo-and-video collection." }
      ]}
      momentsTitle="The session is about more than smiling at the camera."
      momentsCopy="A balanced engagement gallery can move between classic portraits and the gestures that make the relationship recognizable to you."
      moments={[
        "Walking and natural movement",
        "Close, connected portraits",
        "Individual portraits when useful",
        "Wide images that include the setting",
        "Small details and meaningful objects",
        "A more polished, camera-aware portrait",
        "Candid conversation and laughter",
        "A second look when timing and the session plan allow"
      ]}
      planningEyebrow="Prepare Without Overplanning"
      planningTitle="Choose a place and pace that let you be present."
      planningParagraphs={[
        "The best location is one that supports the photographs you want and the experience you are comfortable having. That may be an outdoor setting, a city backdrop, or an indoor space where photography is permitted. A quieter time of day can help with light, crowds, and parking.",
        "Bring only what has a reason to be there. Comfortable footwear for walking, a small touch-up kit, and weather-appropriate layers are usually more useful than a long prop list. If conditions change, the backup plan should protect the experience as well as the images."
      ]}
      planningPoints={[
        "Share visual preferences without trying to recreate someone else’s relationship.",
        "Confirm access, parking, fees, and permit rules for the chosen location.",
        "Select outfits that coordinate in formality and tone rather than matching exactly.",
        "Tell us what usually makes you feel awkward in photographs so direction can adapt."
      ]}
      investmentTitle="Engagement-session planning and pricing"
      investmentCopy="Engagement-session pricing is not currently published on the site. Share whether you are looking for a standalone session or adding portraits to wedding coverage, along with your preferred area and timing, for an accurate recommendation."
      faqs={[
        { question: "Where can we take engagement photographs?", answer: "Sessions can be planned within Brandon Media Group’s supported Virginia and DMV service area. The final location should fit your preferred style and be practical for access, light, privacy, and any permit requirements." },
        { question: "What should we wear?", answer: "Choose clothing that feels comfortable and consistent with the level of formality you want. Coordinating tones and movement usually matter more than matching exactly. Specific guidance can follow once the setting and season are known." },
        { question: "We feel awkward in photographs. Can you help?", answer: "Yes. The approach uses calm direction, simple movement, and prompts rather than expecting you to arrive knowing how to pose." },
        { question: "Can an engagement session be added to wedding coverage?", answer: "Engagement sessions can be discussed alongside wedding photography or combined photo-and-video coverage. Exact booking options are confirmed during inquiry." },
        { question: "Can we use the images for save-the-dates?", answer: "Many couples plan engagement images with announcements or wedding materials in mind. Share any print or design deadline before booking so timing can be confirmed." },
        { question: "What happens if the weather changes?", answer: "A weather plan can include adjusting the time, choosing a permitted indoor alternative, or rescheduling when practical. The specific option is agreed around the location and forecast." }
      ]}
      relatedTitle="Connect your engagement session to the wedding plan"
      relatedLinks={[
        { label: "Wedding Photography", href: "/wedding-photography", copy: "See how portraits and documentary coverage come together on the wedding day." },
        { label: "Wedding Photo + Video", href: "/wedding-photo-video", copy: "Explore one coordinated plan for the complete celebration." },
        { label: "Alexandria Weddings", href: "/alexandria-wedding-photographer-videographer", copy: "Plan engagement and wedding coverage around Alexandria." },
        { label: "Northern Virginia Weddings", href: "/northern-virginia-wedding-photographer-videographer", copy: "Review coverage options across Northern Virginia." },
        { label: "Contact", href: "/#contact", copy: "Share the season, setting, and purpose you have in mind for the session." }
      ]}
      ctaTitle="Tell us what would make the session feel like you."
      ctaCopy="Share your preferred season, general location, how you plan to use the photographs, and whether you are also considering wedding coverage."
      projectType="Engagement Photography"
      serviceName="Engagement Photography"
      serviceDescription={description}
      areaServed={["Virginia", "Northern Virginia", "Alexandria, Virginia", "Washington, DC", "DMV area"]}
      primaryCta="Request a Session"
      secondaryCta="View Portrait Style"
    />
  );
}
