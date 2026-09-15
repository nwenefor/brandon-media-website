import Image from "next/image";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { Field, ServiceInquiryForm } from "@/components/service-inquiry-form";
import { SiteNav } from "@/components/site-nav";
import { business, siteUrl } from "@/lib/site";

type Feature = {
  title: string;
  copy: string;
};

type GalleryItem = {
  src: string;
  alt: string;
  label: string;
};

type Faq = {
  question: string;
  answer: string;
};

type RelatedLink = {
  label: string;
  href: string;
  copy: string;
};

type WeddingLandingPageProps = {
  path: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  heroImage: string;
  heroAlt: string;
  introEyebrow: string;
  introTitle: string;
  introParagraphs: string[];
  showcaseTitle: string;
  showcaseCopy: string;
  gallery: GalleryItem[];
  detailsEyebrow: string;
  detailsTitle: string;
  detailsCopy: string;
  details: Feature[];
  momentsTitle: string;
  momentsCopy: string;
  moments: string[];
  planningEyebrow: string;
  planningTitle: string;
  planningParagraphs: string[];
  planningPoints: string[];
  investmentTitle: string;
  investmentCopy: string;
  timingCopy?: string;
  faqs: Faq[];
  relatedTitle: string;
  relatedLinks: RelatedLink[];
  ctaTitle: string;
  ctaCopy: string;
  projectType: string;
  serviceName: string;
  serviceDescription: string;
  areaServed: string[];
  primaryCta?: string;
  secondaryCta?: string;
  secondaryHref?: string;
};

const weddingInquiryFields = [
  { type: "text", name: "name", label: "Full Name", placeholder: "Full name", required: true },
  { type: "email", name: "email", label: "Email", placeholder: "you@example.com", required: true },
  { type: "tel", name: "phone", label: "Phone Number", placeholder: business.phoneDisplay, required: true },
  { type: "date", name: "weddingDate", label: "Wedding Date", required: true },
  { type: "text", name: "location", label: "Wedding Location", placeholder: "Venue or city", required: true },
  {
    type: "select",
    name: "coverageNeeded",
    label: "Coverage Needed",
    options: ["Photo + Video", "Photography Only", "Video Only", "Engagement Session", "Not Sure Yet"],
    required: true
  },
  {
    type: "textarea",
    name: "message",
    label: "Tell Us About Your Wedding",
    placeholder: "Share the plans you have so far and the moments that matter most to you.",
    required: true
  }
] as const satisfies readonly Field[];

export function WeddingLandingPage({
  path,
  eyebrow,
  headline,
  subheadline,
  heroImage,
  heroAlt,
  introEyebrow,
  introTitle,
  introParagraphs,
  showcaseTitle,
  showcaseCopy,
  gallery,
  detailsEyebrow,
  detailsTitle,
  detailsCopy,
  details,
  momentsTitle,
  momentsCopy,
  moments,
  planningEyebrow,
  planningTitle,
  planningParagraphs,
  planningPoints,
  investmentTitle,
  investmentCopy,
  timingCopy,
  faqs,
  relatedTitle,
  relatedLinks,
  ctaTitle,
  ctaCopy,
  projectType,
  serviceName,
  serviceDescription,
  areaServed,
  primaryCta = "Check Availability",
  secondaryCta = "View Wedding Work",
  secondaryHref = "#portfolio"
}: WeddingLandingPageProps) {
  const pageUrl = `${siteUrl}${path}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: serviceName,
      description: serviceDescription,
      url: pageUrl,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: areaServed.map((name) => ({ "@type": "Place", name }))
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: serviceName, item: pageUrl }
      ]
    }
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-ivory">
      <JsonLd data={schema} />

      <section className="relative flex min-h-[88vh] items-end overflow-hidden">
        <Image
          fill
          priority
          quality={86}
          sizes="100vw"
          src={heroImage}
          alt={heroAlt}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/64 to-ink/18" />
        <SiteNav />
        <div className="section-shell relative z-10 w-full pb-14 pt-36 md:pb-20">
          <div className="max-w-5xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-gold">{eyebrow}</p>
            <h1 className="max-w-5xl font-serif text-5xl font-normal leading-[0.98] text-white sm:text-7xl lg:text-8xl">
              {headline}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-ivory/82 md:text-xl">{subheadline}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="btn-primary" href="#inquiry">{primaryCta}</a>
              <a className="btn-secondary" href={secondaryHref}>{secondaryCta}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-20 md:grid-cols-[0.85fr_1.15fr] md:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">{introEyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">{introTitle}</h2>
        </div>
        <div className="grid gap-5 text-lg leading-8 text-ivory/70">
          {introParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section id="portfolio" className="border-y border-white/10 bg-ivory py-20 text-ink md:py-28">
        <div className="section-shell">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Recent Wedding Work</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">{showcaseTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-ink/68">{showcaseCopy}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item) => (
              <figure
                key={item.src}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-ink/10">
                  <Image
                    fill
                    quality={82}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    src={item.src}
                    alt={item.alt}
                    className="object-cover transition duration-700 group-hover:scale-[1.025]"
                  />
                </div>
                <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink/62">{item.label}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a className="btn-dark" href="/#portfolio">Explore More Wedding Work</a>
            <a className="btn-dark-outline" href="#inquiry">Request a Full Gallery</a>
          </div>
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">{detailsEyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">{detailsTitle}</h2>
          <p className="mt-5 text-lg leading-8 text-ivory/68">{detailsCopy}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {details.map((detail) => (
            <article key={detail.title} className="border border-white/12 bg-white/[0.025] p-6 md:p-7">
              <h3 className="font-serif text-3xl text-white">{detail.title}</h3>
              <p className="mt-4 leading-7 text-ivory/66">{detail.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20 md:py-28">
        <div className="section-shell grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">What We Document</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">{momentsTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-ivory/68">{momentsCopy}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {moments.map((moment) => (
              <li key={moment} className="border-t border-gold/35 pt-4 text-ivory/76">{moment}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell grid gap-12 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">{planningEyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">{planningTitle}</h2>
          <div className="mt-6 grid gap-5 text-lg leading-8 text-ivory/70">
            {planningParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className="border border-white/12 bg-white/[0.025] p-6 md:p-8">
          <h3 className="font-serif text-3xl text-white">Plan for the moments, not a shot-count.</h3>
          <ul className="mt-7 grid gap-4">
            {planningPoints.map((point) => <li key={point} className="border-t border-white/10 pt-4 text-ivory/70">{point}</li>)}
          </ul>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ivory py-16 text-ink md:py-20">
        <div className="section-shell grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">{investmentTitle}</h2>
          <div>
            <p className="text-lg leading-8 text-ink/70">{investmentCopy}</p>
            {timingCopy ? <p className="mt-4 border-l border-gold pl-5 leading-7 text-ink/68">{timingCopy}</p> : null}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Questions Couples Ask</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">Frequently asked questions</h2>
        </div>
        <div className="mt-10 grid gap-3 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border border-white/12 bg-white/[0.025] p-5 open:border-gold/50">
              <summary className="cursor-pointer list-none pr-8 font-serif text-2xl text-white marker:hidden">{faq.question}</summary>
              <p className="mt-4 leading-7 text-ivory/68">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20 md:py-28">
        <div className="section-shell">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Keep Exploring</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">{relatedTitle}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map((link) => (
              <a key={link.href} href={link.href} className="group border border-white/12 bg-ink/42 p-6 transition hover:border-gold">
                <h3 className="font-serif text-3xl text-white">{link.label}</h3>
                <p className="mt-4 leading-7 text-ivory/64">{link.copy}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">View Page</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Availability</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">{ctaTitle}</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-ivory/70">{ctaCopy}</p>
            <div className="mt-7 grid gap-2 text-sm text-ivory/60">
              <a className="transition hover:text-white" href={`mailto:${business.email}`}>{business.email}</a>
              <a className="transition hover:text-white" href={`tel:${business.phoneInternational}`}>{business.phoneDisplay}</a>
            </div>
          </div>
          <div className="border border-white/12 bg-white/[0.025] p-5 md:p-8">
            <ServiceInquiryForm projectType={projectType} fields={weddingInquiryFields} submitLabel={primaryCta} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
