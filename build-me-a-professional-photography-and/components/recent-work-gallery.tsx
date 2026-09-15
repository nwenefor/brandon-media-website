"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

const previewCount = 9;

const weddingImages: GalleryImage[] = [
  // Add more wedding images here
  // First 9 images are shown by default. Remaining images are revealed with View More.
  // Next/Image generates responsive AVIF/WebP variants while preserving the original gallery files.
  { src: "/portfolio/recent-work/weddings/1000228928.JPG", alt: "Groomsmen standing together in coordinated formal wedding attire" },
  { src: "/portfolio/recent-work/weddings/1000228930.JPG", alt: "Wedding celebration portrait from a Brandon Media Group gallery" },
  { src: "/portfolio/recent-work/weddings/1000228931%202.JPG", alt: "Two wedding guests posing together near a floral backdrop" },
  { src: "/portfolio/recent-work/weddings/1000228932.JPG", alt: "Wedding-day portrait with clean, natural color" },
  { src: "/portfolio/recent-work/weddings/1000228933.JPG", alt: "Candid moment from a real wedding celebration" },
  { src: "/portfolio/recent-work/weddings/1000228935.JPG", alt: "Groom and groomsmen gathered in formal black attire" },
  { src: "/portfolio/recent-work/weddings/1000228936.JPG", alt: "Wedding party moment photographed by Brandon Media Group" },
  { src: "/portfolio/recent-work/weddings/1000228937.JPG", alt: "Guest portrait from an indoor wedding celebration" },
  { src: "/portfolio/recent-work/weddings/1000228938.JPG", alt: "Wedding celebration detail from a finished gallery" },
  { src: "/portfolio/recent-work/weddings/1000228939.JPG", alt: "Candid wedding reception moment" },
  { src: "/portfolio/recent-work/weddings/1000228940.JPG", alt: "Wedding guest moment during the reception" },
  { src: "/portfolio/recent-work/weddings/1000228941.JPG", alt: "Real wedding portrait photographed indoors" },
  { src: "/portfolio/recent-work/weddings/1000229193.JPG", alt: "Celebration moment from a Brandon Media Group wedding gallery" },
  { src: "/portfolio/recent-work/weddings/_DSC7106.jpg", alt: "Groom adjusting his embroidered wedding attire while getting ready" },
  { src: "/portfolio/recent-work/weddings/_DSC7179.jpg", alt: "Bride holding a white bouquet during a clean wedding portrait" },
  { src: "/portfolio/recent-work/weddings/_DSC7180.jpg", alt: "Portrait from a real wedding day" },
  { src: "/portfolio/recent-work/weddings/_DSC7184.jpg", alt: "Bride photographed during wedding-day preparations" },
  { src: "/portfolio/recent-work/weddings/_DSC7212.jpg", alt: "Wedding party member photographed outdoors" },
  { src: "/portfolio/recent-work/weddings/_DSC7228.jpg", alt: "Natural portrait from an outdoor wedding celebration" },
  { src: "/portfolio/recent-work/weddings/_DSC7231.jpg", alt: "Wedding party portrait in a green outdoor setting" },
  { src: "/portfolio/recent-work/weddings/_DSC7233.jpg", alt: "Two wedding party members smiling together outdoors" },
  { src: "/portfolio/recent-work/weddings/_DSC7239.jpg", alt: "Wedding portrait photographed with a natural outdoor background" },
  { src: "/portfolio/recent-work/weddings/_DSC7277-2.jpg", alt: "Bride smiling with her bouquet and wedding ring" },
  { src: "/portfolio/recent-work/weddings/_DSC7277-3.jpg", alt: "Bridal portrait from a real wedding gallery" },
  { src: "/portfolio/recent-work/weddings/_DSC7277.jpg", alt: "Bride photographed with her bouquet during the wedding day" },
  { src: "/portfolio/recent-work/weddings/_DSC7280.jpg", alt: "Wedding-day portrait with a softly blurred background" },
  { src: "/portfolio/recent-work/weddings/_DSC7381.jpg", alt: "Newly married couple sharing a kiss during outdoor portraits" },
  { src: "/portfolio/recent-work/weddings/_DSC7383.jpg", alt: "Wedding couple portrait in a natural outdoor setting" },
  { src: "/portfolio/recent-work/weddings/_DSC7384.jpg", alt: "Candid moment between a newly married couple" },
  { src: "/portfolio/recent-work/weddings/_DSC7385.jpg", alt: "Wedding couple photographed together outdoors" },
  { src: "/portfolio/recent-work/weddings/_DSC7386.jpg", alt: "Natural couple portrait from a wedding gallery" },
  { src: "/portfolio/recent-work/weddings/_DSC7388.jpg", alt: "Bride and groom portrait captured after the ceremony" },
  { src: "/portfolio/recent-work/weddings/_DSC7389.jpg", alt: "Newly married couple photographed during outdoor portraits" }
];

const eventImages: GalleryImage[] = [
  // Add more event images here
  // First 9 images are shown by default. Remaining images are revealed with View More.
  { src: "/portfolio/recent-work/events/1000213807.JPG", alt: "Guest portrait from a professionally photographed event" },
  { src: "/portfolio/recent-work/events/1000213808.JPG", alt: "Candid interaction between guests at an indoor event" },
  { src: "/portfolio/recent-work/events/1000213812.JPG", alt: "Attendees gathered during a formal celebration" },
  { src: "/portfolio/recent-work/events/1000213814.JPG", alt: "Event guest photographed in a polished indoor setting" },
  { src: "/portfolio/recent-work/events/1000213816.JPG", alt: "Group portrait from a Brandon Media Group event gallery" },
  { src: "/portfolio/recent-work/events/1000213818.JPG", alt: "Candid guest moment during an event" },
  { src: "/portfolio/recent-work/events/1000213822.JPG", alt: "Event detail captured with clean color" },
  { src: "/portfolio/recent-work/events/_DSC6700.jpg", alt: "Professional event coverage from a real gathering" },
  { src: "/portfolio/recent-work/events/_DSC6703.jpg", alt: "Guests interacting during a photographed event" },
  { src: "/portfolio/recent-work/events/_DSC6705.jpg", alt: "Formal event portrait from a finished gallery" },
  { src: "/portfolio/recent-work/events/_DSC6706.jpg", alt: "Candid audience reaction captured during an event" },
  { src: "/portfolio/recent-work/events/_DSC6708.jpg", alt: "Speaker and audience moment during an event" },
  { src: "/portfolio/recent-work/events/_DSC6709.jpg", alt: "Brand event moment photographed by Brandon Media Group" },
  { src: "/portfolio/recent-work/events/_DSC6710-2.jpg", alt: "Guest portrait with a softly blurred event background" },
  { src: "/portfolio/recent-work/events/_DSC6710.jpg", alt: "Celebration moment from an event gallery" },
  { src: "/portfolio/recent-work/events/_DSC6711.jpg", alt: "Group gathered during a professional event" },
  { src: "/portfolio/recent-work/events/_DSC6810.jpg", alt: "Event photograph with clean lighting and color" },
  { src: "/portfolio/recent-work/events/_DSC6811.jpg", alt: "Candid moment from a conference or gathering" },
  { src: "/portfolio/recent-work/events/_DSC6893.jpg", alt: "Professional event moment captured for a finished gallery" },
  { src: "/portfolio/recent-work/events/_DSC6925.jpg", alt: "Formal event detail photographed indoors" },
  { src: "/portfolio/recent-work/events/_DSC6933.jpg", alt: "Guest interaction captured during an event" },
  { src: "/portfolio/recent-work/events/_DSC6968.jpg", alt: "Networking moment from a real event" },
  { src: "/portfolio/recent-work/events/_DSC6971.jpg", alt: "Business event portrait with natural expression" },
  { src: "/portfolio/recent-work/events/_DSC6972.jpg", alt: "Candid event photograph from Brandon Media Group" },
  { src: "/portfolio/recent-work/events/_DSC7011.jpg", alt: "Story-driven moment from an indoor event" },
  { src: "/portfolio/recent-work/events/_DSC7012.jpg", alt: "Formal celebration photographed with clean color" },
  { src: "/portfolio/recent-work/events/_DSC7038.jpg", alt: "Audience and speaker coverage from a professional gathering" },
  { src: "/portfolio/recent-work/events/_DSC7056.jpg", alt: "Guest portrait during a professional event" },
  { src: "/portfolio/recent-work/events/_DSC7062.jpg", alt: "Candid event moment from a finished gallery" },
  { src: "/portfolio/recent-work/events/_DSC7068.jpg", alt: "Professional event photograph by Brandon Media Group" }
];

function getMosaicClass(index: number) {
  if (index === 0) {
    return "md:col-span-2 md:row-span-2";
  }

  if (index === 4 || index % 13 === 0) {
    return "lg:row-span-2";
  }

  if (index === 8 || index % 11 === 0) {
    return "md:col-span-2";
  }

  return "";
}

function MosaicGallery({
  eyebrow,
  title,
  buttonLabel,
  images,
  expanded,
  onToggle
}: {
  eyebrow: string;
  title: string;
  buttonLabel: string;
  images: GalleryImage[];
  expanded: boolean;
  onToggle: () => void;
}) {
  const visibleImages = useMemo(
    () => (expanded ? images : images.slice(0, previewCount)),
    [expanded, images]
  );

  return (
    <section aria-labelledby={`${eyebrow.toLowerCase()}-gallery`}>
      <div className="mb-6 border-b border-gold/35 pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          {eyebrow}
        </p>
        <h3
          id={`${eyebrow.toLowerCase()}-gallery`}
          className="mt-3 font-serif text-3xl text-white md:text-4xl"
        >
          {title}
        </h3>
      </div>

      <div className="grid auto-rows-[17rem] gap-4 sm:grid-cols-2 md:auto-rows-[18rem] lg:grid-cols-4 lg:auto-rows-[16rem]">
        {visibleImages.map((image, index) => (
          <article
            key={image.src}
            className={`group relative overflow-hidden border border-white/10 bg-white/[0.025] ${getMosaicClass(index)}`}
          >
            <Image
              fill
              quality={80}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover opacity-[0.94] transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-45" />
          </article>
        ))}
      </div>

      {images.length > previewCount ? (
        <div className="mt-7">
          <button
            type="button"
            onClick={onToggle}
            className="border border-gold/55 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition hover:border-gold hover:bg-gold hover:text-ink"
          >
            {expanded ? `Show Less ${buttonLabel} Photos` : `View More ${buttonLabel} Photos`}
          </button>
        </div>
      ) : null}
    </section>
  );
}

export function RecentWorkGallery() {
  const [weddingsExpanded, setWeddingsExpanded] = useState(false);
  const [eventsExpanded, setEventsExpanded] = useState(false);

  return (
    <section className="border-y border-white/10 bg-ink py-20 text-ivory md:py-28">
      <div className="section-shell">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
            Portfolio
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">
            Recent Wedding & Event Work
          </h2>
          <p className="mt-5 text-lg leading-8 text-ivory/68">
            A curated look at real celebrations, details, and moments captured
            with a clean, story-driven approach.
          </p>
        </div>

        <div className="grid gap-16 md:gap-20">
          <MosaicGallery
            eyebrow="Weddings"
            title="Wedding Gallery"
            buttonLabel="Wedding"
            images={weddingImages}
            expanded={weddingsExpanded}
            onToggle={() => setWeddingsExpanded((current) => !current)}
          />
          <MosaicGallery
            eyebrow="Events"
            title="Event Gallery"
            buttonLabel="Event"
            images={eventImages}
            expanded={eventsExpanded}
            onToggle={() => setEventsExpanded((current) => !current)}
          />
        </div>

        <div className="mt-12">
          <a className="btn-primary" href="#contact">Request Full Gallery Preview</a>
        </div>
      </div>
    </section>
  );
}
