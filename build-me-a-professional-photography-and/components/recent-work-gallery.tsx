"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryImage = {
  src: string;
  alt: string;
};

const weddingImages: GalleryImage[] = [
  // Add more wedding images here
  // These source files are large; optimize images for web before final deployment.
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
  // These source files are large; optimize images for web before final deployment.
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

function GalleryCarousel({
  eyebrow,
  title,
  images
}: {
  eyebrow: string;
  title: string;
  images: GalleryImage[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollLeft() {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    scroller.scrollBy({
      left: -scroller.clientWidth * 0.8,
      behavior: "smooth"
    });
  }

  function scrollRight() {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    scroller.scrollBy({
      left: scroller.clientWidth * 0.8,
      behavior: "smooth"
    });
  }

  return (
    <section aria-labelledby={`${eyebrow.toLowerCase()}-gallery`}>
      <div className="mb-6 flex items-end justify-between gap-5 border-b border-gold/35 pb-4">
        <div>
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
      </div>

      <div className="relative">
        <button
          type="button"
          aria-label={`Scroll ${title} left`}
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-ivory/20 bg-ink/70 text-ivory backdrop-blur transition hover:border-gold hover:text-gold md:inline-flex"
        >
          <ChevronLeft aria-hidden="true" size={18} strokeWidth={1.6} />
        </button>
        <button
          type="button"
          aria-label={`Scroll ${title} right`}
          onClick={scrollRight}
          className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-ivory/20 bg-ink/70 text-ivory backdrop-blur transition hover:border-gold hover:text-gold md:inline-flex"
        >
          <ChevronRight aria-hidden="true" size={18} strokeWidth={1.6} />
        </button>

        <div
          ref={scrollerRef}
          className="recent-work-scroll -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 scroll-smooth md:-mx-8 md:gap-5 md:px-8"
        >
          {images.map((image, index) => (
            <article
              key={image.src}
              className="group relative h-[26rem] w-[78vw] shrink-0 snap-center overflow-hidden border border-white/10 bg-white/[0.025] sm:w-[28rem] md:h-[31rem] lg:w-[31rem]"
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
      </div>
    </section>
  );
}

export function RecentWorkGallery() {
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
            A closer look at real moments, celebrations, and event coverage
            captured with a clean, story-driven approach.
          </p>
        </div>

        <div className="grid gap-16 md:gap-20">
          <GalleryCarousel eyebrow="Weddings" title="Wedding Gallery" images={weddingImages} />
          <GalleryCarousel eyebrow="Events" title="Event Gallery" images={eventImages} />
        </div>
      </div>
    </section>
  );
}
