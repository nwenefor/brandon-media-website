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
  // Images should be compressed and exported as WebP/AVIF where possible to improve Core Web Vitals and local SEO.
  { src: "/portfolio/recent-work/weddings/1000228928.JPG", alt: "Richmond VA wedding photography with natural documentary coverage by Brandon Media Group" },
  { src: "/portfolio/recent-work/weddings/1000228930.JPG", alt: "Fredericksburg VA wedding videography detail captured in a clean cinematic style" },
  { src: "/portfolio/recent-work/weddings/1000228931%202.JPG", alt: "Northern Virginia wedding photography portfolio with refined couple coverage" },
  { src: "/portfolio/recent-work/weddings/1000228932.JPG", alt: "Washington DC wedding film and photography coverage with timeless color" },
  { src: "/portfolio/recent-work/weddings/1000228933.JPG", alt: "Arlington VA wedding photography focused on candid emotional moments" },
  { src: "/portfolio/recent-work/weddings/1000228935.JPG", alt: "Alexandria VA wedding videography and photo coverage by Brandon Media Group" },
  { src: "/portfolio/recent-work/weddings/1000228936.JPG", alt: "Stafford VA wedding photography portfolio with clean natural storytelling" },
  { src: "/portfolio/recent-work/weddings/1000228937.JPG", alt: "DMV area wedding photography and cinematic film coverage for modern couples" },
  { src: "/portfolio/recent-work/weddings/1000228938.JPG", alt: "Richmond and Northern Virginia wedding portraits with polished editorial detail" },
  { src: "/portfolio/recent-work/weddings/1000228939.JPG", alt: "Fredericksburg wedding ceremony photo and video coverage with professional audio" },
  { src: "/portfolio/recent-work/weddings/1000228940.JPG", alt: "Washington DC wedding reception photography with warm documentary coverage" },
  { src: "/portfolio/recent-work/weddings/1000228941.JPG", alt: "Arlington and Alexandria wedding photo gallery by Brandon Media Group" },
  { src: "/portfolio/recent-work/weddings/1000229193.JPG", alt: "Stafford and DMV area wedding videography with cinematic highlight film style" },
  { src: "/portfolio/recent-work/weddings/_DSC7106.jpg", alt: "Richmond VA wedding details photographed with a clean luxury finish" },
  { src: "/portfolio/recent-work/weddings/_DSC7179.jpg", alt: "Fredericksburg VA wedding party photography with natural direction" },
  { src: "/portfolio/recent-work/weddings/_DSC7180.jpg", alt: "Northern Virginia wedding photography capturing real candid emotion" },
  { src: "/portfolio/recent-work/weddings/_DSC7184.jpg", alt: "Washington DC wedding videography and photography portfolio moment" },
  { src: "/portfolio/recent-work/weddings/_DSC7212.jpg", alt: "Arlington VA wedding couple portrait with timeless Brandon Media Group editing" },
  { src: "/portfolio/recent-work/weddings/_DSC7228.jpg", alt: "Alexandria VA wedding reception photo coverage with refined natural color" },
  { src: "/portfolio/recent-work/weddings/_DSC7231.jpg", alt: "Stafford VA wedding photography for ceremony and reception storytelling" },
  { src: "/portfolio/recent-work/weddings/_DSC7233.jpg", alt: "DMV area wedding film coverage with emotional story-driven visuals" },
  { src: "/portfolio/recent-work/weddings/_DSC7239.jpg", alt: "Richmond wedding photography portfolio with elegant celebration coverage" },
  { src: "/portfolio/recent-work/weddings/_DSC7277-2.jpg", alt: "Fredericksburg wedding videography still with polished cinematic framing" },
  { src: "/portfolio/recent-work/weddings/_DSC7277-3.jpg", alt: "Northern Virginia wedding photographer capturing classic couple portraits" },
  { src: "/portfolio/recent-work/weddings/_DSC7277.jpg", alt: "Washington DC wedding photography with clean documentary composition" },
  { src: "/portfolio/recent-work/weddings/_DSC7280.jpg", alt: "Arlington VA wedding media coverage for portraits details and celebration" },
  { src: "/portfolio/recent-work/weddings/_DSC7381.jpg", alt: "Alexandria VA wedding photography and cinematic film by Brandon Media Group" },
  { src: "/portfolio/recent-work/weddings/_DSC7383.jpg", alt: "Stafford VA wedding photo gallery with natural candid storytelling" },
  { src: "/portfolio/recent-work/weddings/_DSC7384.jpg", alt: "DMV area wedding photography with refined emotional coverage" },
  { src: "/portfolio/recent-work/weddings/_DSC7385.jpg", alt: "Richmond and Washington DC wedding film coverage with timeless visual style" },
  { src: "/portfolio/recent-work/weddings/_DSC7386.jpg", alt: "Fredericksburg and Northern Virginia wedding photography with natural editorial coverage" },
  { src: "/portfolio/recent-work/weddings/_DSC7388.jpg", alt: "Arlington Alexandria wedding photographer capturing elegant reception moments" },
  { src: "/portfolio/recent-work/weddings/_DSC7389.jpg", alt: "Stafford and DMV area wedding videography portfolio by Brandon Media Group" }
];

const eventImages: GalleryImage[] = [
  // Add more event images here
  // First 9 images are shown by default. Remaining images are revealed with View More.
  // Images should be compressed and exported as WebP/AVIF where possible to improve Core Web Vitals and local SEO.
  { src: "/portfolio/recent-work/events/1000213807.JPG", alt: "Richmond VA corporate event photography with polished guest coverage" },
  { src: "/portfolio/recent-work/events/1000213808.JPG", alt: "Fredericksburg VA corporate event video and photo coverage by Brandon Media Group" },
  { src: "/portfolio/recent-work/events/1000213812.JPG", alt: "Northern Virginia conference photography with professional speaker coverage" },
  { src: "/portfolio/recent-work/events/1000213814.JPG", alt: "Washington DC corporate event videography for brand and company gatherings" },
  { src: "/portfolio/recent-work/events/1000213816.JPG", alt: "Arlington VA corporate gala photography with refined event documentation" },
  { src: "/portfolio/recent-work/events/1000213818.JPG", alt: "Alexandria VA business event coverage with clean professional editing" },
  { src: "/portfolio/recent-work/events/1000213822.JPG", alt: "Stafford VA event photography and recap video coverage for organizations" },
  { src: "/portfolio/recent-work/events/_DSC6700.jpg", alt: "DMV area corporate event coverage for conferences galas and activations" },
  { src: "/portfolio/recent-work/events/_DSC6703.jpg", alt: "Richmond corporate event photographer capturing networking and guest moments" },
  { src: "/portfolio/recent-work/events/_DSC6705.jpg", alt: "Fredericksburg event videography and photography for professional gatherings" },
  { src: "/portfolio/recent-work/events/_DSC6706.jpg", alt: "Northern Virginia event photo coverage with candid audience reactions" },
  { src: "/portfolio/recent-work/events/_DSC6708.jpg", alt: "Washington DC corporate event photography for speakers and panels" },
  { src: "/portfolio/recent-work/events/_DSC6709.jpg", alt: "Arlington VA brand activation photography and event media coverage" },
  { src: "/portfolio/recent-work/events/_DSC6710-2.jpg", alt: "Alexandria VA corporate event recap video and polished photo gallery" },
  { src: "/portfolio/recent-work/events/_DSC6710.jpg", alt: "Stafford VA corporate celebration photography by Brandon Media Group" },
  { src: "/portfolio/recent-work/events/_DSC6711.jpg", alt: "DMV area event videography for company milestones and nonprofit events" },
  { src: "/portfolio/recent-work/events/_DSC6810.jpg", alt: "Richmond event photography with clean lighting and professional coverage" },
  { src: "/portfolio/recent-work/events/_DSC6811.jpg", alt: "Fredericksburg VA conference photography and event highlight coverage" },
  { src: "/portfolio/recent-work/events/_DSC6893.jpg", alt: "Northern Virginia corporate media coverage for marketing and internal communications" },
  { src: "/portfolio/recent-work/events/_DSC6925.jpg", alt: "Washington DC gala photographer capturing polished event details" },
  { src: "/portfolio/recent-work/events/_DSC6933.jpg", alt: "Arlington VA corporate event video still for recap and social media content" },
  { src: "/portfolio/recent-work/events/_DSC6968.jpg", alt: "Alexandria VA event photographer covering networking and audience moments" },
  { src: "/portfolio/recent-work/events/_DSC6971.jpg", alt: "Stafford VA business event photography with reliable professional delivery" },
  { src: "/portfolio/recent-work/events/_DSC6972.jpg", alt: "DMV area corporate event photo gallery by Brandon Media Group" },
  { src: "/portfolio/recent-work/events/_DSC7011.jpg", alt: "Richmond VA event videography with clean storytelling for local organizations" },
  { src: "/portfolio/recent-work/events/_DSC7012.jpg", alt: "Fredericksburg corporate gala photography with elegant event coverage" },
  { src: "/portfolio/recent-work/events/_DSC7038.jpg", alt: "Northern Virginia event coverage for conferences panels and networking" },
  { src: "/portfolio/recent-work/events/_DSC7056.jpg", alt: "Washington DC corporate event photographer for professional brand moments" },
  { src: "/portfolio/recent-work/events/_DSC7062.jpg", alt: "Arlington and Alexandria event photography and recap video services" },
  { src: "/portfolio/recent-work/events/_DSC7068.jpg", alt: "Stafford and DMV area event media portfolio by Brandon Media Group" }
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
