import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "About Our Richmond & DMV Photo Video Studio",
  description:
    "A calm, professional photo and video studio serving weddings, corporate events, real estate, and local businesses across Richmond, Fredericksburg, Northern Virginia, Washington DC, Arlington, Alexandria, Stafford, and the DMV area."
};

const differentiators = [
  {
    title: "Calm Direction",
    copy: "We guide when needed and step back when the moment should unfold naturally."
  },
  {
    title: "Clean Visual Style",
    copy: "Our work is natural, polished, and timeless without heavy filters or overproduction."
  },
  {
    title: "Professional Workflow",
    copy: "From planning to delivery, every project is handled with clear communication, reliable timelines, and organized final files."
  }
];

const services = [
  ["Wedding Photography & Films", "/#weddings"],
  ["Corporate Event Coverage", "/corporate-events"],
  ["Real Estate Media", "/real-estate-media"],
  ["Business Promo Videos", "/business-promo-videos"]
];

const trustItems = [
  "Fully insured",
  "Professional equipment",
  "Timeline planning",
  "Clear communication",
  "Private online delivery galleries",
  "Richmond and DMV area coverage"
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-ivory">
      <section className="relative flex min-h-[84vh] items-end overflow-hidden">
        {/* TODO: Replace with a real Brandon Media Group founder or behind-the-scenes image, compressed and exported as WebP/AVIF for stronger performance. */}
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=2200&q=90"
          alt="Brandon Media Group professional photo and video production for Richmond VA and the DMV area"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/66 to-ink/24" />
        <SiteNav />
        <div className="section-shell relative z-10 w-full pb-14 pt-32 md:pb-20">
          <div className="max-w-5xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-gold">
              Brandon Media Group LLC · Richmond VA & DMV Area
            </p>
            <h1 className="font-serif text-5xl font-normal leading-[0.98] tracking-normal text-white sm:text-7xl">
              A calm, professional eye behind the moments that matter.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-ivory/82 md:text-xl">
              Brandon Media Group LLC creates clean, natural, story-driven
              photography and films for couples, events, properties, and
              businesses across Richmond, Fredericksburg, Stafford, Northern
              Virginia, Arlington, Alexandria, Washington DC, and the DMV area.
            </p>
            <div className="mt-9">
              <a className="btn-primary" href="/#contact">Check Availability</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-12 py-20 md:grid-cols-[0.85fr_1.15fr] md:items-center md:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Brand Story</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">
            Built on clarity, emotion, and reliable service.
          </h2>
        </div>
        <p className="text-lg leading-8 text-ivory/70">
          Brandon Media Group was created to give clients more than beautiful
          visuals. The goal is to provide a smooth, professional experience from
          first conversation to final delivery. Whether documenting a wedding day,
          covering a corporate event, filming a property, or creating content for
          a local business in Richmond, Fredericksburg, Northern Virginia,
          Washington DC, Arlington, Alexandria, Stafford, or the broader DMV area,
          the focus remains the same: clean imagery, thoughtful storytelling,
          and dependable service.
        </p>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20 md:py-28">
        <div className="section-shell">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
              What Makes Us Different
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">
              A steady process creates stronger work.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {differentiators.map((item) => (
              <article key={item.title} className="border border-white/12 bg-ink/42 p-7">
                <h3 className="font-serif text-3xl text-white">{item.title}</h3>
                <p className="mt-5 leading-7 text-ivory/66">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Services Overview</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">
            One studio. Multiple ways to tell your story.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {services.map(([title, href]) => (
            <a
              key={title}
              href={href}
              className="group border border-white/12 bg-white/[0.025] p-6 transition hover:border-gold"
            >
              <h3 className="font-serif text-2xl leading-tight text-white">{title}</h3>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                View Service
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-ivory py-20 text-ink md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Trust</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
              Professional from inquiry to delivery.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {trustItems.map((item) => (
              <p key={item} className="border-t border-ink/14 pt-4 text-ink/72">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 text-center md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Start the conversation</p>
        <h2 className="mx-auto mt-4 max-w-4xl font-serif text-4xl leading-tight text-white md:text-6xl">
          Ready to create something intentional?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ivory/70">
          Share your date, location, and the type of coverage you need. If the
          date is available, we will follow up with the best next steps for your
          wedding, event, property, or brand project in Richmond, Northern
          Virginia, Washington DC, or the DMV area.
        </p>
        <div className="mt-9">
          <a className="btn-primary" href="/#contact">Start an Inquiry</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
