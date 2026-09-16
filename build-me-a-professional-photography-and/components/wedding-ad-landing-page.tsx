"use client";

import Image from "next/image";
import { useEffect } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Clock3,
  Film,
  Headphones,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star
} from "lucide-react";
import { PixiesetGalleryLink } from "@/components/pixieset-gallery-link";
import { TrackedPrivacyLink } from "@/components/tracked-privacy-link";
import { WeddingLeadForm } from "@/components/wedding-lead-form";
import { trackWeddingEvent } from "@/lib/analytics";
import { business } from "@/lib/site";

const collections = [
  {
    name: "Essential",
    label: "Focused coverage",
    price: "From $1,500",
    popular: false,
    rows: [
      ["Coverage", "Focused around the moments you prioritize"],
      ["Coverage team", "Confirmed with your photo, video, or both selection"],
      ["Highlight film", "Cinematic highlight included"],
      ["Ceremony", "Vows and key moments captured; full edit available"],
      ["Speeches / toasts", "Professional audio when within coverage"],
      ["Social teaser", "Optional 48-hour vertical teaser"]
    ]
  },
  {
    name: "Signature",
    label: "Most popular",
    price: "Custom quote",
    popular: true,
    rows: [
      ["Coverage", "Well-paced coverage of the moments that carry the day"],
      ["Coverage team", "Confirmed with your photo, video, or both selection"],
      ["Highlight film", "Story-driven wedding film included"],
      ["Ceremony", "Full ceremony coverage with professional audio"],
      ["Speeches / toasts", "Audio captured; finished edit confirmed in proposal"],
      ["Social teaser", "Optional 48-hour vertical teaser"]
    ]
  },
  {
    name: "Premium",
    label: "Complete storytelling",
    price: "Custom quote",
    popular: false,
    rows: [
      ["Coverage", "Complete-day storytelling from beginning to end"],
      ["Coverage team", "Confirmed with your photo, video, or both selection"],
      ["Highlight film", "Cinematic wedding film included"],
      ["Ceremony", "Vows captured; full ceremony edit available"],
      ["Speeches / toasts", "Captured with clean professional audio"],
      ["Social teaser", "Optional 48-hour vertical teaser"]
    ]
  }
] as const;

const portfolio = [
  {
    src: "/wedding-landing/hero.jpg",
    alt: "Newly married couple sharing a kiss during outdoor wedding portraits",
    label: "Couple portraits",
    className: "sm:col-span-2 sm:row-span-2"
  },
  {
    src: "/wedding-landing/getting-ready.jpg",
    alt: "Groom adjusting his wedding attire while getting ready",
    label: "Getting ready",
    className: ""
  },
  {
    src: "/wedding-landing/bride.jpg",
    alt: "Bride holding a white bouquet during a natural wedding portrait",
    label: "Bridal portrait",
    className: ""
  },
  {
    src: "/wedding-landing/wedding-party.jpg",
    alt: "Groomsmen gathered in coordinated formal wedding attire",
    label: "Wedding party",
    className: ""
  },
  {
    src: "/wedding-landing/details.jpg",
    alt: "Bride smiling with her bouquet and wedding ring",
    label: "Details",
    className: ""
  }
] as const;

const process = [
  ["01", "Check Your Date", "Send your date, location, coverage needs, and approximate budget."],
  ["02", "Choose Your Collection", "Review clear options built around the moments you want covered."],
  ["03", "Contract + 30% Retainer", "Sign the service agreement and pay a 30% non-refundable retainer to reserve the date."],
  ["04", "Planning Support", "Share your timeline, priorities, addresses, and key people before the wedding."],
  ["05", "Wedding Day Coverage", "A calm, documentary approach keeps real moments at the center."],
  ["06", "Film Delivery", "Wedding films are currently delivered within 6–8 weeks."]
] as const;

const reviews = [
  {
    name: "Lancie Lokis",
    text: "Brandon is amazing!!! He is kind and easy to work with. He did an excellent job, and I recommend him to anyone looking for a photographer or videographer. Great work 🙌"
  },
  {
    name: "Ndi Lizette",
    text: "Pictures were top notch. I will book him again and again."
  },
  {
    name: "Clifford M.",
    text: "I loved how Brandon guided us during the shoot. It made everything feel comfortable, and the results were amazing."
  },
  {
    name: "Ladouce Prisca",
    text: "Very satisfied. The pictures are so nice and well done."
  },
  {
    name: "Laeticia Mpessa Kingue",
    text: "The photos are beautifully captured, with great attention to detail and lighting that truly brings each moment to life."
  }
] as const;

const faqs = [
  ["How much does wedding videography cost?", "Wedding collections begin at $1,500. Exact pricing depends on your date, location, coverage length, and whether you need videography, photography, or both."],
  ["How much is the retainer?", "A 30% non-refundable retainer and signed service agreement reserve your wedding date."],
  ["When is the final payment due?", "The remaining balance is due 14 days before the wedding."],
  ["Do you travel?", "Yes. Share your venue or city in the inquiry so travel requirements can be confirmed in your proposal."],
  ["Do you serve Washington DC, Northern Virginia, and Fredericksburg?", "Yes. Brandon Media Group serves couples across Virginia, Washington DC, Maryland, Northern Virginia, Fredericksburg, Stafford, Alexandria, Arlington, Richmond, and the wider DMV."],
  ["How long until we receive our film?", "The current wedding-film delivery window is 6–8 weeks."],
  ["Do you offer social-media teasers?", "Yes. An optional vertical social teaser can be delivered within 48 hours of the wedding."],
  ["Do you provide raw footage?", "A raw-footage archive is available as an enhancement. Ask for storage, delivery, and retention details in your proposal."],
  ["Can we add extra hours?", "Yes. Additional coverage time is available and should be confirmed before the wedding whenever possible."],
  ["Are you insured?", "Yes. Brandon Media Group is a fully insured business."]
] as const;

type WeddingAdLandingPageProps = {
  pagePath?: string;
};

export function WeddingAdLandingPage({ pagePath = "/wedding-videography" }: WeddingAdLandingPageProps) {
  useEffect(() => {
    trackWeddingEvent("wedding_landing_view", { page_path: pagePath });
  }, [pagePath]);

  return (
    <main className="overflow-x-hidden bg-ink pb-20 text-ivory lg:pb-0">
      <section className="relative min-h-[760px] overflow-hidden sm:min-h-[800px]" aria-labelledby="wedding-hero-title">
        <Image
          src="/wedding-landing/hero.jpg"
          alt="Newly married couple sharing a kiss during outdoor wedding portraits"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-[52%_42%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />

        <header className="section-shell relative z-10 flex min-h-20 items-center justify-between gap-4 py-4">
          <a href="/" className="flex items-center gap-3" aria-label="Brandon Media Group home">
            <Image src={business.logo} alt="" width={44} height={44} className="h-8 w-8 object-contain" />
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

        <div className="section-shell relative z-10 flex min-h-[680px] items-end pb-12 pt-20 sm:items-center sm:pb-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Wedding films + natural photography · Virginia / DC / Maryland
            </p>
            <h1 id="wedding-hero-title" className="mt-5 max-w-3xl font-serif text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.045em] text-white">
              Relive Your Wedding. Not Just Watch It.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-xl sm:leading-8">
              Cinematic wedding films and natural photography for couples across Virginia,
              Washington DC, and Maryland.
            </p>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Wedding collections from $1,500
            </p>
            <div className="mt-7 grid gap-3 sm:flex">
              <CheckDateLink placement="hero" className="btn-primary min-h-14 sm:min-w-56" />
              <a
                href="#featured-film"
                className="btn-secondary min-h-14 sm:min-w-56"
                onClick={() => trackWeddingEvent("watch_film_click", { placement: "hero" })}
              >
                Watch a Wedding Film
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium uppercase tracking-[0.13em] text-white/72">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" aria-hidden="true" />Fully insured</span>
              <span className="inline-flex items-center gap-2"><Headphones className="h-4 w-4 text-gold" aria-hidden="true" />Professional audio</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" aria-hidden="true" />Virginia · DC · Maryland</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-charcoal py-16 sm:py-20" aria-labelledby="fast-delivery-title">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Made to feel immediate</p>
            <h2 id="fast-delivery-title" className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
              Your Wedding Film Shouldn’t Take Months to Feel Real
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-ivory/68">
              The full film receives the time and attention it deserves. If you want something meaningful
              to share right away, add an edited vertical teaser delivered within 48 hours.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {[
              [Film, "Cinematic coverage", "Movement, pacing, and natural sound shaped into a cohesive story."],
              [Sparkles, "Optional 48-hour teaser", "A vertical social edit you can share while the full film is in progress."],
              [Headphones, "Professional audio", "Vows, speeches, and toasts recorded clearly when included in coverage."],
              [Clock3, "Reliable delivery", "The current full-film delivery window is 6–8 weeks."]
            ].map(([Icon, title, copy]) => (
              <article key={String(title)} className="bg-ink p-6 sm:p-7">
                <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-white">{String(title)}</h3>
                <p className="mt-2 text-sm leading-6 text-ivory/60">{String(copy)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-film" className="scroll-mt-4 py-20 sm:py-28" aria-labelledby="featured-film-title">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Featured wedding film</p>
            <h2 id="featured-film-title" className="mt-4 font-serif text-4xl text-white sm:text-5xl">See the story, not a highlight reel of promises.</h2>
            <p className="mt-5 leading-7 text-ivory/65">
              Full wedding-film previews are currently shared privately. Request a current film link and
              tell us which parts of your own day matter most.
            </p>
          </div>
          <div className="mt-10 grid overflow-hidden border border-white/10 bg-charcoal lg:grid-cols-[1.4fr_0.6fr]">
            <div className="relative aspect-video min-h-[250px]">
              <Image
                src="/wedding-landing/film-poster.jpg"
                alt="Wedding couple together during an outdoor portrait session"
                fill
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid h-20 w-20 place-items-center rounded-full border border-white/60 bg-black/35 backdrop-blur-sm" aria-hidden="true">
                  <Film className="h-7 w-7 text-white" />
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Private full-film preview</p>
              <h3 className="mt-4 font-serif text-3xl text-white">A complete wedding story</h3>
              <p className="mt-4 text-sm leading-6 text-ivory/62">Real pacing, clean audio, and the quiet moments between the milestones.</p>
              <CheckDateLink placement="featured_film" label="Request the Film Link" className="btn-primary mt-7 w-full" />
            </div>
          </div>
          {/* CONTENT TODO: Replace the private-preview panel with an approved, lightweight hosted wedding film and poster image. */}
        </div>
      </section>

      <section className="border-y border-white/10 bg-charcoal py-20 sm:py-28" aria-labelledby="reviews-title">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Verified Google reviews</p>
            <h2 id="reviews-title" className="mt-4 font-serif text-4xl text-white sm:text-5xl">Kind Words From Our Clients</h2>
            <p className="mt-5 max-w-2xl leading-7 text-ivory/65">
              Couples and families choose Brandon Media Group for a comfortable experience, thoughtful
              direction, and photographs and films that bring their most meaningful moments back to life.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review, index) => (
              <figure
                key={review.name}
                className={`flex min-h-64 flex-col border border-white/10 bg-ink p-6 sm:p-7 ${index === reviews.length - 1 ? "md:col-span-2 xl:col-span-1" : ""}`}
              >
                <div className="flex gap-1 text-gold" role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, star) => (
                    <Star key={star} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-6 flex-1 font-serif text-xl leading-8 text-white">
                  “{review.text}”
                </blockquote>
                <figcaption className="mt-7 border-t border-white/10 pt-5">
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-gold">Google Review</p>
                </figcaption>
              </figure>
            ))}
          </div>
          {/* No Google profile link is rendered until a confirmed business-profile URL is configured in the project. */}
        </div>
      </section>

      <section id="collections" className="border-y border-white/10 bg-bone py-20 text-ink sm:py-28" aria-labelledby="collections-title">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#80632e]">Wedding collections</p>
            <h2 id="collections-title" className="mt-4 font-serif text-4xl sm:text-5xl">Three clear starting points. One wedding day.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-black/62">
              Choose the level of storytelling that fits your day. Exact hours, team size, film length,
              and selected enhancements are confirmed in writing—never assumed from a generic package.
            </p>
          </div>
          <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
            {collections.map((collection) => (
              <article
                key={collection.name}
                className={`relative flex flex-col border p-6 sm:p-8 ${collection.popular ? "border-[#9c7939] bg-white shadow-2xl lg:-translate-y-3" : "border-black/12 bg-[#faf7f0]"}`}
              >
                {collection.popular ? (
                  <span className="absolute right-5 top-0 -translate-y-1/2 bg-ink px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.17em] text-white">
                    Most Popular
                  </span>
                ) : null}
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#80632e]">{collection.label}</p>
                <h3 className="mt-3 font-serif text-4xl">{collection.name}</h3>
                <p className="mt-3 font-semibold">{collection.price}</p>
                <dl className="mt-7 grid flex-1 gap-0 border-t border-black/10">
                  {collection.rows.map(([term, detail]) => (
                    <div key={term} className="border-b border-black/10 py-4">
                      <dt className="text-xs font-bold uppercase tracking-[0.12em] text-black/48">{term}</dt>
                      <dd className="mt-1 text-sm leading-6 text-black/72">{detail}</dd>
                    </div>
                  ))}
                </dl>
                <CheckDateLink placement={`collection_${collection.name.toLowerCase()}`} className="btn-dark mt-7 min-h-[3.25rem] w-full" />
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-black/55">
            Drone coverage is not listed because availability depends on location, airspace, weather, and the selected coverage plan.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="why-title">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Why Brandon Media Group</p>
            <h2 id="why-title" className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">Calm coverage. Clean craft. No forced moments.</h2>
          </div>
          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {[
              ["Documentary storytelling", "Real reactions and meaningful details stay at the center of the finished story."],
              ["Clean professional audio", "The words you want to remember are treated as part of the film, not an afterthought."],
              ["Cinematic visuals", "Intentional composition, movement, and color without turning the wedding into a production set."],
              ["Calm wedding-day approach", "Preparation and timeline support reduce avoidable friction on the day."],
              ["Professional equipment", "A production-ready approach supported by professional cameras and audio tools."],
              ["Insured regional coverage", "Fully insured service across Virginia, Washington DC, Maryland, and the DMV."]
            ].map(([title, copy]) => (
              <article key={title} className="border-t border-white/12 pt-5">
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ivory/58">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="scroll-mt-4 border-y border-white/10 bg-charcoal py-20 sm:py-28" aria-labelledby="portfolio-title">
        <div className="section-shell">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Selected wedding work</p>
              <h2 id="portfolio-title" className="mt-4 font-serif text-4xl text-white sm:text-5xl">Moments with movement, emotion, and context.</h2>
            </div>
            <div className="grid gap-3 sm:flex">
              <PixiesetGalleryLink location="portfolio_section" className="btn-primary w-full sm:w-auto">
                Explore the Gallery <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </PixiesetGalleryLink>
              <CheckDateLink placement="portfolio" className="btn-secondary w-full sm:w-auto" />
            </div>
          </div>
          <div className="mt-10 grid auto-rows-[240px] gap-3 sm:grid-cols-2 sm:auto-rows-[270px] lg:grid-cols-4">
            {portfolio.map((image) => (
              <figure key={image.src} className={`group relative overflow-hidden bg-black ${image.className ?? ""}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={image.className ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
                  className="object-cover transition duration-500 group-hover:scale-[1.025]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-4 pt-12 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                  {image.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="process-title">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">The process</p>
            <h2 id="process-title" className="mt-4 font-serif text-4xl text-white sm:text-5xl">From inquiry to finished film.</h2>
          </div>
          <ol className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {process.map(([number, title, copy]) => (
              <li key={number} className="bg-ink p-7 sm:p-8">
                <span className="font-serif text-2xl text-gold">{number}</span>
                <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ivory/58">{copy}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm font-medium text-ivory/70">Remaining balance due 14 days before the wedding.</p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-charcoal py-20 sm:py-28" aria-labelledby="faq-title">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Wedding videography FAQ</p>
            <h2 id="faq-title" className="mt-4 font-serif text-4xl text-white sm:text-5xl">Helpful answers before you inquire.</h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 font-semibold text-white marker:hidden">
                  {question}
                  <span className="text-xl text-gold transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-3xl pb-2 pr-8 text-sm leading-7 text-ivory/62">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="availability" className="scroll-mt-4 py-20 sm:py-28" aria-labelledby="availability-title">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="lg:sticky lg:top-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Availability</p>
            <h2 id="availability-title" className="mt-4 font-serif text-5xl leading-none text-white sm:text-6xl">Check Your Wedding Date</h2>
            <p className="mt-6 max-w-lg leading-7 text-ivory/66">
              Tell us a few details and we’ll confirm availability and send the best options for your day.
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

      <footer className="border-t border-white/10 py-10">
        <div className="section-shell flex flex-col gap-5 text-sm text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {business.name}. Wedding photography and films.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            <a className="transition hover:text-white" href="/wedding-photography">Photography</a>
            <a className="transition hover:text-white" href="/wedding-photo-video">Photo + Video</a>
            <a className="transition hover:text-white" href="/northern-virginia-wedding-photographer-videographer">Northern Virginia</a>
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

type CheckDateLinkProps = {
  placement: string;
  className: string;
  label?: string;
};

function CheckDateLink({ placement, className, label = "Check Your Date" }: CheckDateLinkProps) {
  return (
    <a
      href="#availability"
      className={className}
      onClick={() => trackWeddingEvent("check_date_click", { placement })}
    >
      {label}
      {label === "Check Your Date" ? <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" /> : <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />}
    </a>
  );
}
