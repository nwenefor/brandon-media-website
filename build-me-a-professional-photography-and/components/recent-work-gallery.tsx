"use client";

import { useMemo, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

const previewCount = 9;

const weddingImages: GalleryImage[] = [
  // Add more wedding images here
  // First 9 images are shown by default. Remaining images are revealed with View More.
  // Images should be compressed for production to improve performance
  { src: "/portfolio/recent-work/weddings/1000228928.JPG", alt: "Wedding portfolio image 1" },
  { src: "/portfolio/recent-work/weddings/1000228930.JPG", alt: "Wedding portfolio image 2" },
  { src: "/portfolio/recent-work/weddings/1000228931%202.JPG", alt: "Wedding portfolio image 3" },
  { src: "/portfolio/recent-work/weddings/1000228932.JPG", alt: "Wedding portfolio image 4" },
  { src: "/portfolio/recent-work/weddings/1000228933.JPG", alt: "Wedding portfolio image 5" },
  { src: "/portfolio/recent-work/weddings/1000228935.JPG", alt: "Wedding portfolio image 6" },
  { src: "/portfolio/recent-work/weddings/1000228936.JPG", alt: "Wedding portfolio image 7" },
  { src: "/portfolio/recent-work/weddings/1000228937.JPG", alt: "Wedding portfolio image 8" },
  { src: "/portfolio/recent-work/weddings/1000228938.JPG", alt: "Wedding portfolio image 9" },
  { src: "/portfolio/recent-work/weddings/1000228939.JPG", alt: "Wedding portfolio image 10" },
  { src: "/portfolio/recent-work/weddings/1000228940.JPG", alt: "Wedding portfolio image 11" },
  { src: "/portfolio/recent-work/weddings/1000228941.JPG", alt: "Wedding portfolio image 12" },
  { src: "/portfolio/recent-work/weddings/1000229193.JPG", alt: "Wedding portfolio image 13" },
  { src: "/portfolio/recent-work/weddings/_DSC7106.jpg", alt: "Wedding portfolio image 14" },
  { src: "/portfolio/recent-work/weddings/_DSC7179.jpg", alt: "Wedding portfolio image 15" },
  { src: "/portfolio/recent-work/weddings/_DSC7180.jpg", alt: "Wedding portfolio image 16" },
  { src: "/portfolio/recent-work/weddings/_DSC7184.jpg", alt: "Wedding portfolio image 17" },
  { src: "/portfolio/recent-work/weddings/_DSC7212.jpg", alt: "Wedding portfolio image 18" },
  { src: "/portfolio/recent-work/weddings/_DSC7228.jpg", alt: "Wedding portfolio image 19" },
  { src: "/portfolio/recent-work/weddings/_DSC7231.jpg", alt: "Wedding portfolio image 20" },
  { src: "/portfolio/recent-work/weddings/_DSC7233.jpg", alt: "Wedding portfolio image 21" },
  { src: "/portfolio/recent-work/weddings/_DSC7239.jpg", alt: "Wedding portfolio image 22" },
  { src: "/portfolio/recent-work/weddings/_DSC7277-2.jpg", alt: "Wedding portfolio image 23" },
  { src: "/portfolio/recent-work/weddings/_DSC7277-3.jpg", alt: "Wedding portfolio image 24" },
  { src: "/portfolio/recent-work/weddings/_DSC7277.jpg", alt: "Wedding portfolio image 25" },
  { src: "/portfolio/recent-work/weddings/_DSC7280.jpg", alt: "Wedding portfolio image 26" },
  { src: "/portfolio/recent-work/weddings/_DSC7381.jpg", alt: "Wedding portfolio image 27" },
  { src: "/portfolio/recent-work/weddings/_DSC7383.jpg", alt: "Wedding portfolio image 28" },
  { src: "/portfolio/recent-work/weddings/_DSC7384.jpg", alt: "Wedding portfolio image 29" },
  { src: "/portfolio/recent-work/weddings/_DSC7385.jpg", alt: "Wedding portfolio image 30" },
  { src: "/portfolio/recent-work/weddings/_DSC7386.jpg", alt: "Wedding portfolio image 31" },
  { src: "/portfolio/recent-work/weddings/_DSC7388.jpg", alt: "Wedding portfolio image 32" },
  { src: "/portfolio/recent-work/weddings/_DSC7389.jpg", alt: "Wedding portfolio image 33" }
];

const eventImages: GalleryImage[] = [
  // Add more event images here
  // First 9 images are shown by default. Remaining images are revealed with View More.
  // Images should be compressed for production to improve performance
  { src: "/portfolio/recent-work/events/1000213807.JPG", alt: "Event portfolio image 1" },
  { src: "/portfolio/recent-work/events/1000213808.JPG", alt: "Event portfolio image 2" },
  { src: "/portfolio/recent-work/events/1000213812.JPG", alt: "Event portfolio image 3" },
  { src: "/portfolio/recent-work/events/1000213814.JPG", alt: "Event portfolio image 4" },
  { src: "/portfolio/recent-work/events/1000213816.JPG", alt: "Event portfolio image 5" },
  { src: "/portfolio/recent-work/events/1000213818.JPG", alt: "Event portfolio image 6" },
  { src: "/portfolio/recent-work/events/1000213822.JPG", alt: "Event portfolio image 7" },
  { src: "/portfolio/recent-work/events/_DSC6700.jpg", alt: "Event portfolio image 8" },
  { src: "/portfolio/recent-work/events/_DSC6703.jpg", alt: "Event portfolio image 9" },
  { src: "/portfolio/recent-work/events/_DSC6705.jpg", alt: "Event portfolio image 10" },
  { src: "/portfolio/recent-work/events/_DSC6706.jpg", alt: "Event portfolio image 11" },
  { src: "/portfolio/recent-work/events/_DSC6708.jpg", alt: "Event portfolio image 12" },
  { src: "/portfolio/recent-work/events/_DSC6709.jpg", alt: "Event portfolio image 13" },
  { src: "/portfolio/recent-work/events/_DSC6710-2.jpg", alt: "Event portfolio image 14" },
  { src: "/portfolio/recent-work/events/_DSC6710.jpg", alt: "Event portfolio image 15" },
  { src: "/portfolio/recent-work/events/_DSC6711.jpg", alt: "Event portfolio image 16" },
  { src: "/portfolio/recent-work/events/_DSC6810.jpg", alt: "Event portfolio image 17" },
  { src: "/portfolio/recent-work/events/_DSC6811.jpg", alt: "Event portfolio image 18" },
  { src: "/portfolio/recent-work/events/_DSC6893.jpg", alt: "Event portfolio image 19" },
  { src: "/portfolio/recent-work/events/_DSC6925.jpg", alt: "Event portfolio image 20" },
  { src: "/portfolio/recent-work/events/_DSC6933.jpg", alt: "Event portfolio image 21" },
  { src: "/portfolio/recent-work/events/_DSC6968.jpg", alt: "Event portfolio image 22" },
  { src: "/portfolio/recent-work/events/_DSC6971.jpg", alt: "Event portfolio image 23" },
  { src: "/portfolio/recent-work/events/_DSC6972.jpg", alt: "Event portfolio image 24" },
  { src: "/portfolio/recent-work/events/_DSC7011.jpg", alt: "Event portfolio image 25" },
  { src: "/portfolio/recent-work/events/_DSC7012.jpg", alt: "Event portfolio image 26" },
  { src: "/portfolio/recent-work/events/_DSC7038.jpg", alt: "Event portfolio image 27" },
  { src: "/portfolio/recent-work/events/_DSC7056.jpg", alt: "Event portfolio image 28" },
  { src: "/portfolio/recent-work/events/_DSC7062.jpg", alt: "Event portfolio image 29" },
  { src: "/portfolio/recent-work/events/_DSC7068.jpg", alt: "Event portfolio image 30" }
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
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover opacity-[0.94] transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100"
              loading={index < 2 ? "eager" : "lazy"}
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
