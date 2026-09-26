"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Instagram, Phone, Star } from "lucide-react";
import { PixiesetGalleryLink } from "@/components/pixieset-gallery-link";
import { TrackedPrivacyLink } from "@/components/tracked-privacy-link";
import { WeddingLeadForm } from "@/components/wedding-lead-form";
import { trackWeddingEvent } from "@/lib/analytics";
import { business } from "@/lib/site";

const selectedImages = [
  {
    src: "/wedding-landing/editorial/couple-outdoor-portrait.jpg",
    alt: "Newly married couple standing together during an outdoor wedding portrait",
    sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
  },
  {
    src: "/wedding-landing/editorial/bride-reception-portrait.jpg",
    alt: "Bride seated in front of white floral wedding decor",
    sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
  },
  {
    src: "/wedding-landing/editorial/wedding-celebration.jpg",
    alt: "Wedding party gathered with the couple for a formal portrait",
    sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
  },
  {
    src: "/wedding-landing/editorial/bridal-veil-portrait.jpg",
    alt: "Bride smiling over her shoulder with her veil and bouquet",
    sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
  }
] as const;

const secondaryReviews = [
  {
    name: "Lancie Lokis",
    text: "Brandon is amazing!!! He is kind and easy to work with. He did an excellent job, and I recommend him to anyone looking for a photographer or videographer. Great work 🙌"
  },
  {
    name: "Laeticia Mpessa Kingue",
    text: "The photos are beautifully captured, with great attention to detail and lighting that truly brings each moment to life."
  }
] as const;

const servicePaths = [
  ["Photography", "Natural, timeless wedding photography."],
  ["Videography", "Cinematic wedding films built around your story."],
  ["Photo + Video", "One coordinated team capturing both."]
] as const;

const faqs = [
  [
    "Do you provide both photography and videography?",
    "Yes. Brandon Media Group offers photography, videography, and coordinated photo-and-video coverage, subject to date availability."
  ],
  [
    "What areas do you serve?",
    "Brandon Media Group serves weddings across Virginia, Washington DC, Maryland, and the wider DMV."
  ],
  [
    "How do we reserve our wedding date?",
    "A signed service agreement and 30% non-refundable retainer reserve your date after availability and coverage are confirmed."
  ],
  [
    "When will we receive our wedding photos or film?",
    "The current delivery windows are 4–6 weeks for wedding photographs and 10–14 business days for wedding films."
  ]
] as const;

type WeddingAdLandingPageProps = {
  pagePath?: string;
};

export function WeddingAdLandingPage({ pagePath = "/wedding-videography" }: WeddingAdLandingPageProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);
  const filmPlayTracked = useRef(false);

  useEffect(() => {
    trackWeddingEvent("wedding_landing_view", { page_path: pagePath });

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, [pagePath]);

  return (
    <main className="overflow-x-hidden bg-ink pb-20 text-ivory lg:pb-0">
      <section
        className="relative flex min-h-[100svh] flex-col overflow-hidden bg-black"
        aria-labelledby="wedding-hero-title"
      >
        <Image
          src="/wedding-landing/hero.jpg"
          alt="Newly married couple sharing a kiss during outdoor wedding portraits"
          fill
          priority
          quality={84}
          sizes="100vw"
          className="object-cover object-[52%_42%]"
        />
        {!prefersReducedMotion ? (
          <video
            className="absolute inset-0 h-full w-full object-cover object-[50%_38%] md:object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/wedding-landing/hero.jpg"
            width={1920}
            height={1080}
            aria-hidden="true"
            tabIndex={-1}
          >
            <source
              src="/wedding-landing/hero-film-mobile.mp4"
              media="(max-width: 767px)"
              type="video/mp4"
            />
            <source src="/wedding-landing/hero-film-desktop.mp4" type="video/mp4" />
          </video>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />

        <header className="section-shell relative z-10 flex min-h-20 w-full items-center justify-between gap-4 py-4">
          <a href="/" className="flex items-center gap-3" aria-label="Brandon Media Group home">
            <Image src={business.logo} alt="" width={44} height={44} className="h-9 w-9 object-contain" />
            <span className="hidden text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white sm:block">
              Brandon Media Group
            </span>
          </a>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={`tel:${business.phoneInternational}`}
              className="inline-flex min-h-11 items-center gap-2 px-2 text-xs font-semibold text-white transition hover:text-gold"
              onClick={() => trackWeddingEvent("phone_click", { placement: "landing_header" })}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">{business.phoneDisplay}</span>
              <span className="sr-only sm:hidden">Call Brandon Media Group</span>
            </a>
            <CheckDateLink placement="landing_header" className="btn-primary min-h-11 px-3 sm:px-5" />
          </div>
        </header>

        <div className="section-shell relative z-10 flex w-full flex-1 items-end pb-12 pt-20 sm:pb-16 md:items-center">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Wedding Photography + Cinematic Videography
            </p>
            <h1
              id="wedding-hero-title"
              className="mt-5 max-w-3xl font-serif text-[clamp(3.1rem,8vw,6.5rem)] leading-[0.9] tracking-[-0.045em] text-white"
            >
              Natural photography. Cinematic films.
            </h1>
            <p className="mt-5 text-sm font-medium uppercase tracking-[0.16em] text-white/78 sm:text-base">
              Virginia <span aria-hidden="true">•</span> Washington DC <span aria-hidden="true">•</span> Maryland
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Collections from $1,500
            </p>
            <div className="mt-7 grid gap-3 sm:flex">
              <CheckDateLink placement="hero" className="btn-primary min-h-14 sm:min-w-56" />
              <a
                href="#portfolio"
                className="btn-secondary min-h-14 sm:min-w-56"
                onClick={() => trackWeddingEvent("gallery_click", { placement: "hero_view_work" })}
              >
                View Our Work <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="scroll-mt-4 py-20 sm:py-28" aria-labelledby="portfolio-title">
        <div className="section-shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Selected wedding work</p>
              <h2 id="portfolio-title" className="mt-4 font-serif text-4xl leading-none text-white sm:text-6xl">
                Real weddings. Real moments.
              </h2>
            </div>
            <PixiesetGalleryLink location="portfolio_section" className="btn-secondary w-full sm:w-auto">
              View More of Our Work <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </PixiesetGalleryLink>
          </div>

          <div className="mt-10 grid gap-3 lg:grid-cols-12">
            <div className="overflow-hidden bg-black lg:col-span-7 lg:row-span-2">
              <video
                className="aspect-video h-full min-h-[260px] w-full object-cover sm:min-h-[420px]"
                controls
                playsInline
                preload="none"
                poster="/wedding-landing/film-poster.jpg"
                aria-label="Featured Brandon Media Group wedding highlight film"
                onPlay={() => {
                  if (filmPlayTracked.current) return;
                  filmPlayTracked.current = true;
                  trackWeddingEvent("watch_film_click", {
                    placement: "selected_work_film",
                    page_path: pagePath
                  });
                }}
              >
                <source src="/wedding-landing/highlight-film.mp4" type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-5">
              {selectedImages.slice(0, 2).map((image) => (
                <WeddingImage key={image.src} image={image} />
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-5">
              {selectedImages.slice(2).map((image) => (
                <WeddingImage key={image.src} image={image} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-charcoal py-20 sm:py-24" aria-labelledby="reviews-title">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Real Google reviews</p>
            <h2 id="reviews-title" className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
              Couples trust Brandon Media Group.
            </h2>
          </div>

          <figure className="mt-10 border-l-2 border-gold bg-white/[0.035] p-6 sm:p-9 lg:grid lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
            <figcaption>
              <StarRating />
              <p className="mt-5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold">Google Review</p>
              <p className="mt-5 font-serif text-3xl text-white">Jerry Panega</p>
              <p className="mt-1 text-sm text-ivory/55">Wedding client · “Great price”</p>
            </figcaption>
            <div className="mt-7 lg:mt-0">
              <blockquote className="font-serif text-2xl leading-9 text-white sm:text-3xl sm:leading-[1.35]">
                “If I could give Brandon Media Group 10 stars, I absolutely would! Their team recently captured our wedding, and I am 100% satisfied with the experience.”
              </blockquote>
              <details className="group mt-6 border-t border-white/10 pt-5">
                <summary className="inline-flex min-h-11 cursor-pointer list-none items-center text-xs font-semibold uppercase tracking-[0.17em] text-gold marker:hidden">
                  Read full review <span className="ml-2 text-lg transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <div className="grid max-w-3xl gap-4 pb-2 pt-3 text-sm leading-7 text-ivory/70">
                  <p>
                    They went far beyond what we agreed in our contract, arriving more than two hours early and staying more than two hours beyond the scheduled finish. That level of commitment and generosity with their time meant so much to us.
                  </p>
                  <p>
                    The entire team was calm, polite, friendly and completely professional. They were a pleasure to work with, and their dedication showed how much they cared about our special day.
                  </p>
                  <p>
                    I wholeheartedly recommend Brandon Media Group to anyone looking for a team that brings professionalism, kindness and care to their work.
                  </p>
                  <p>
                    Thank you, Brandon, for exceeding our expectations and helping us preserve such an important moment in our lives!
                  </p>
                </div>
              </details>
            </div>
          </figure>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {secondaryReviews.map((review) => (
              <figure key={review.name} className="border border-white/10 bg-ink p-6 sm:p-7">
                <StarRating compact />
                <blockquote className="mt-5 font-serif text-xl leading-8 text-white">“{review.text}”</blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-ivory/72">— {review.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-20 text-ink sm:py-24" aria-labelledby="services-title">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#80632e]">Wedding collections</p>
            <h2 id="services-title" className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              One team. Your complete wedding story.
            </h2>
          </div>
          <div className="mt-10 grid border-y border-black/12 md:grid-cols-3 md:divide-x md:divide-black/12">
            {servicePaths.map(([title, copy]) => (
              <article key={title} className="border-b border-black/12 px-5 py-8 last:border-b-0 md:border-b-0 md:px-8">
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#80632e]">{title}</h3>
                <p className="mt-4 font-serif text-2xl leading-8">{copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="font-serif text-3xl">Wedding Collections From $1,500</p>
            <CheckDateLink placement="services" className="btn-dark mt-6 min-h-14 w-full sm:w-auto sm:min-w-56" />
          </div>
        </div>
      </section>

      <section id="availability" className="scroll-mt-4 py-20 sm:py-28" aria-labelledby="availability-title">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Availability</p>
            <h2 id="availability-title" className="mt-4 font-serif text-5xl leading-none text-white sm:text-6xl">
              Is your date available?
            </h2>
            <p className="mt-6 max-w-lg leading-7 text-ivory/68">
              Tell us a little about your wedding and we&apos;ll get back to you with availability and next steps.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-ivory/62">
              <a
                href={`tel:${business.phoneInternational}`}
                className="inline-flex min-h-11 items-center gap-3 transition hover:text-white"
                onClick={() => trackWeddingEvent("phone_click", { placement: "availability" })}
              >
                <Phone className="h-4 w-4 text-gold" aria-hidden="true" /> {business.phoneDisplay}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="inline-flex min-h-11 items-center gap-3 break-all transition hover:text-white"
                onClick={() => trackWeddingEvent("email_click", { placement: "availability" })}
              >
                <ArrowRight className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" /> {business.email}
              </a>
            </div>
          </div>
          <div className="border border-white/10 bg-charcoal p-5 sm:p-8 lg:p-10">
            <WeddingLeadForm />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-charcoal py-16 sm:py-20" aria-labelledby="faq-title">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Good to know</p>
            <h2 id="faq-title" className="mt-4 font-serif text-4xl text-white sm:text-5xl">Before you inquire.</h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 font-semibold text-white marker:hidden">
                  {question}
                  <span className="text-xl text-gold transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-3xl pb-2 pr-8 text-sm leading-7 text-ivory/64">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-10">
        <div className="section-shell flex flex-col gap-6 text-sm text-ivory/55 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-xl text-white">{business.displayName}</p>
            <p className="mt-2">Wedding photography + films · Virginia / DC / Maryland</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <a className="transition hover:text-white" href={`tel:${business.phoneInternational}`}>{business.phoneDisplay}</a>
            <a className="transition hover:text-white" href={`mailto:${business.email}`}>{business.email}</a>
            <a
              className="inline-flex items-center gap-2 transition hover:text-white"
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" /> Instagram
            </a>
            <TrackedPrivacyLink location="footer" className="transition hover:text-white" />
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-ink/95 p-3 backdrop-blur lg:hidden">
        <CheckDateLink placement="mobile_sticky" className="btn-primary min-h-[3.25rem] w-full" />
      </div>
    </main>
  );
}

type SelectedImage = (typeof selectedImages)[number];

function WeddingImage({ image }: { image: SelectedImage }) {
  return (
    <figure className="relative min-h-[250px] overflow-hidden bg-black sm:min-h-[300px]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={image.sizes}
        className="object-cover transition duration-700 ease-out hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
      />
    </figure>
  );
}

function StarRating({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex gap-1 text-gold ${compact ? "" : "text-lg"}`} role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} className={`${compact ? "h-4 w-4" : "h-5 w-5"} fill-current`} aria-hidden="true" />
      ))}
    </div>
  );
}

type CheckDateLinkProps = {
  placement: string;
  className: string;
};

function CheckDateLink({ placement, className }: CheckDateLinkProps) {
  return (
    <a
      href="#availability"
      className={className}
      onClick={() => trackWeddingEvent("check_date_click", { placement })}
    >
      Check Your Date <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
    </a>
  );
}
