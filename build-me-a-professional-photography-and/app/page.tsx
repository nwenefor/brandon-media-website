import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { PortfolioFilter } from "@/components/portfolio-filter";
import { RecentWorkGallery } from "@/components/recent-work-gallery";
import { SiteNav } from "@/components/site-nav";

const gold = "text-gold";

export const metadata: Metadata = {
  title: "Wedding Photography, Videography & Event Media in Richmond and the DMV",
  description:
    "Brandon Media Group provides premium wedding photography, wedding videography, corporate event coverage, and real estate media in Richmond, Fredericksburg, Northern Virginia, Washington DC, Arlington, Alexandria, Stafford, and the DMV area."
};

const serviceAreas = [
  "Richmond VA",
  "Fredericksburg VA",
  "Northern Virginia",
  "Washington DC",
  "Arlington VA",
  "Alexandria VA",
  "Stafford VA",
  "the DMV area"
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://brandonmediagroupllc.com/#localbusiness",
  name: "Brandon Media Group LLC",
  image: "https://brandonmediagroupllc.com/brand/bmg_minimal_mark.svg",
  url: "https://brandonmediagroupllc.com/",
  telephone: "+1-540-214-7725",
  email: "brandonmediagroupllc@gmail.com",
  priceRange: "$$",
  areaServed: serviceAreas.map((area) => ({
    "@type": "Place",
    name: area
  })),
  description:
    "Premium wedding photography, wedding videography, corporate event coverage, and real estate media for Richmond, Fredericksburg, Northern Virginia, Washington DC, Arlington, Alexandria, Stafford, and the DMV area.",
  sameAs: ["https://www.instagram.com/brandonmediagroup/"]
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://brandonmediagroupllc.com/#professionalservice",
  name: "Brandon Media Group LLC",
  url: "https://brandonmediagroupllc.com/",
  telephone: "+1-540-214-7725",
  email: "brandonmediagroupllc@gmail.com",
  areaServed: serviceAreas.map((area) => ({
    "@type": "Place",
    name: area
  })),
  serviceType: [
    "Wedding Photography",
    "Wedding Videography",
    "Corporate Event Coverage",
    "Real Estate Media"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Photography and Video Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wedding Photography and Videography"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Event Photo and Video Coverage"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Real Estate Photography and Video"
        }
      }
    ]
  }
};

const whyItems = [
  {
    title: "Real Moments",
    copy: "A calm, documentary approach that captures natural emotion without forcing the day."
  },
  {
    title: "Clear Audio",
    copy: "Vows, speeches, and meaningful words captured with clean professional audio."
  },
  {
    title: "Timeless Delivery",
    copy: "Clean color, thoughtful editing, and private online galleries designed for easy viewing and sharing."
  }
];

const collections = [
  {
    title: "Premium",
    subtitle: "Complete Wedding Storytelling",
    description:
      "Designed for couples who want their entire wedding captured without compromise — with nothing rushed, missed, or simplified.",
    bullets: [
      "Complete coverage of your wedding day from beginning to end",
      "Photo and film working as one unified experience",
      "A complete gallery that reflects the full arc of your day",
      "A cinematic wedding film designed to feel natural, immersive, and true to your day",
      "Vows, speeches, and toasts captured with clean, clear audio",
      "Guided timeline planning",
      "Priority editing",
      "Private online gallery delivery"
    ],
    forLine: "For couples who want total peace of mind and a complete record of their wedding day."
  },
  {
    badge: "Most Chosen",
    title: "Signature",
    subtitle: "Most Chosen Collection",
    description:
      "Complete coverage of the moments that matter most. Most couples choose this after comparing options — it delivers everything that matters without unnecessary upgrades.",
    bullets: [
      "Well-paced coverage focused on the moments that carry the most weight",
      "Photo and film working together to tell a connected story",
      "A full gallery that captures what your day actually felt like",
      "A wedding film built for emotion and clarity",
      "Full ceremony coverage with professional audio",
      "Timeline support",
      "Private online gallery delivery"
    ],
    forLine: "For couples who want to capture their day properly without overextending their budget.",
    featured: true
  },
  {
    title: "Essential",
    subtitle: "Focused Wedding Coverage",
    description:
      "Ideal for smaller weddings or couples who want their most important moments captured cleanly and without unnecessary extras.",
    bullets: [
      "Focused coverage of your most meaningful moments",
      "Clean, natural coverage focused on authenticity",
      "A curated gallery that captures the heart of your day",
      "A cinematic highlight film with the emotion of your wedding",
      "Audio capture for vows and key moments",
      "Simple timeline guidance",
      "Private online gallery delivery"
    ],
    forLine: "Coverage is intentionally limited, so some parts of the day may not be included."
  }
];

const simpleOffers = [
  ["Photography", "Photography Only Coverage"],
  ["Cinematic Video", "Film Only Coverage"]
];

const addOns = [
  "Additional Hour of Coverage",
  "Full Documentary Edit",
  "Social Media Highlight Clips",
  "Same-Day Teaser Video",
  "Raw Footage Archive"
];

const processSteps = [
  "Reach out to confirm your date",
  "Select your collection",
  "Review and sign your service agreement",
  "Pay a 25% retainer to secure your date",
  "Final balance due on or before the wedding day"
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-ivory">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSchema, professionalServiceSchema])
        }}
      />
      <Hero />
      <Intro />
      <OtherServices />
      <Approach />
      <Collections />
      <PortfolioFilter />
      <RecentWorkGallery />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section id="weddings" className="relative flex min-h-screen items-end overflow-hidden">
      {/* TODO: Replace this placeholder with compressed Brandon Media Group wedding work and provide WebP/AVIF versions for faster local SEO performance. */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=2200&q=90"
        alt="Luxury wedding photography and videography for Richmond VA and DMV area couples"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/58 to-ink/20" />
      <SiteNav />
      <div className="section-shell relative z-10 w-full pb-14 pt-28 md:pb-20">
        <div className="max-w-4xl">
          <p className={`mb-5 text-xs font-semibold uppercase tracking-[0.26em] ${gold}`}>
            Wedding Photography & Cinematic Films · Richmond VA to Washington DC
          </p>
          <h1 className="font-serif text-5xl font-normal leading-[0.98] tracking-normal text-white sm:text-7xl lg:text-8xl">
            Wedding Photography & Films That Let You Relive Your Day
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ivory/82 md:text-xl">
            Clean, natural, story-driven coverage for couples who want their
            wedding captured properly across Richmond, Fredericksburg, Northern
            Virginia, Washington DC, and the DMV area.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href="#contact">Check Availability</a>
            <a className="btn-secondary" href="#collections">View Collections</a>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-6 text-ivory/68">
            Most couples invest between $1,500 – $2,600 depending on coverage needs.
          </p>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="section-shell py-20 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className={`text-xs font-semibold uppercase tracking-[0.26em] ${gold}`}>A refined record of the day</p>
        <p className="mt-7 font-serif text-3xl leading-tight text-white md:text-5xl">
          Your wedding day is one of the most important stories you will ever live.
        </p>
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-ivory/70">
          At Brandon Media Group, we capture weddings through a refined blend of
          photography and cinematic storytelling. Our approach is personal,
          intentional, and focused on preserving the moments that matter most for
          clients in Richmond, Fredericksburg, Stafford, Arlington, Alexandria,
          Washington DC, Northern Virginia, and throughout the DMV area.
        </p>
      </div>
    </section>
  );
}

function OtherServices() {
  const services = [
    {
      title: "Corporate Events",
      copy: "Polished photo and video coverage for conferences, galas, activations, and company milestones across Richmond, Northern Virginia, and Washington DC.",
      href: "/corporate-events"
    },
    {
      title: "Real Estate Media",
      copy: "Clean listing visuals, walkthrough videos, and social tours for properties in Richmond, Fredericksburg, Stafford, Arlington, Alexandria, and the DMV area.",
      href: "/real-estate-media"
    },
    {
      title: "Business Promo Videos",
      copy: "Story-driven video content that helps local businesses explain, build trust, and promote clearly.",
      href: "/business-promo-videos"
    }
  ];

  return (
    <section className="section-shell pb-20 md:pb-28">
      <div className="border-t border-white/10 pt-12">
        <div className="mb-8 max-w-2xl">
          <p className={`text-xs font-semibold uppercase tracking-[0.26em] ${gold}`}>More Ways We Help</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-white md:text-5xl">
            Additional media services, kept separate and focused.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group border border-white/12 bg-white/[0.025] p-6 transition hover:border-gold"
            >
              <h3 className="font-serif text-2xl text-white">{service.title}</h3>
              <p className="mt-4 leading-7 text-ivory/64">{service.copy}</p>
              <p className={`mt-6 text-xs font-semibold uppercase tracking-[0.2em] ${gold}`}>
                View Service
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <div>
            <p className={`text-xs font-semibold uppercase tracking-[0.26em] ${gold}`}>Why this approach works</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">
              Calm coverage. Honest emotion. Nothing forced.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {whyItems.map((item) => (
              <article key={item.title} className="border-t border-gold/45 pt-5">
                <h3 className="font-serif text-2xl text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-ivory/68">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Collections() {
  return (
    <section id="collections" className="section-shell py-20 md:py-28">
      <div className="mb-12 max-w-3xl">
        <p className={`text-xs font-semibold uppercase tracking-[0.26em] ${gold}`}>Wedding Collections</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">Wedding Collections</h2>
        <p className="mt-5 text-lg leading-8 text-ivory/70">
          Every collection is designed around coverage, clarity, and peace of mind.
        </p>
        <p className="mt-5 border-l border-gold pl-5 leading-7 text-ivory/76">
          Full pricing and availability are shared after we confirm your date,
          location, and coverage needs.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {collections.map((collection) => (
          <article
            key={collection.title}
            className={`flex flex-col rounded-sm border p-6 md:p-7 ${
              collection.featured
                ? "border-gold bg-white/[0.055]"
                : "border-white/12 bg-white/[0.025]"
            }`}
          >
            <div className="min-h-8">
              {collection.badge ? (
                <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${gold}`}>{collection.badge}</p>
              ) : null}
            </div>
            <h3 className="mt-3 font-serif text-4xl text-white">{collection.title}</h3>
            <p className={`mt-3 text-sm font-semibold uppercase tracking-[0.18em] ${gold}`}>
              — {collection.subtitle}
            </p>
            <p className="mt-5 leading-7 text-ivory/66">{collection.description}</p>
            <ul className="mt-7 grid gap-3 text-sm leading-6 text-ivory/72">
              {collection.bullets.map((bullet) => (
                <li key={bullet} className="border-t border-white/8 pt-3">{bullet}</li>
              ))}
            </ul>
            <p className="mt-auto pt-7 text-sm italic leading-6 text-ivory/64">{collection.forLine}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {simpleOffers.map(([title, subtitle]) => (
          <div key={title} className="flex items-center justify-between gap-5 border border-white/12 bg-white/[0.025] p-5">
            <h3 className="font-serif text-2xl text-white">{title}</h3>
            <p className={`text-right text-sm font-semibold uppercase tracking-[0.16em] ${gold}`}>
              — {subtitle}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <h3 className="font-serif text-3xl text-white">Personalize Your Coverage</h3>
          <p className="mt-4 leading-7 text-ivory/66">
            Enhancements can be added based on your timeline, delivery needs,
            and the moments you want preserved.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {addOns.map((name) => (
            <div key={name} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3">
              <p className="text-ivory/76">{name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <a className="btn-primary" href="#contact">Request Full Pricing Guide</a>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-shell grid gap-12 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-28">
      <div>
        {/* TODO: Replace this placeholder with compressed Brandon Media Group wedding work and convert final delivery images to WebP/AVIF where possible. */}
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=88"
          alt="Natural wedding photography for couples in Northern Virginia and Washington DC"
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
      <div>
        <p className={`text-xs font-semibold uppercase tracking-[0.26em] ${gold}`}>Client Experience</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">
          A clear process from first conversation to final delivery.
        </h2>
        <p className="mt-6 text-lg leading-8 text-ivory/70">
          Brandon Media Group is a wedding photography and film studio serving
          couples across Richmond, Fredericksburg, Stafford, Northern Virginia,
          Arlington, Alexandria, Washington DC, and the DMV area. The work is
          clean, natural, and story-driven, with a focus on real emotion,
          professional audio, and a calm experience from first conversation to
          final delivery.
        </p>
        <ol className="mt-8 grid gap-4">
          {processSteps.map((step, index) => (
            <li key={step} className="grid grid-cols-[2rem_1fr] gap-4 border-t border-white/10 pt-4">
              <span className={`${gold} font-serif text-xl`}>{index + 1}</span>
              <span className="text-ivory/76">{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-8 border-l border-gold pl-5 text-sm uppercase tracking-[0.16em] text-ivory/66">
          Photos delivered within 4–6 weeks · Films delivered within 6–8 weeks
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 bg-white/[0.03] py-20 md:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className={`text-xs font-semibold uppercase tracking-[0.26em] ${gold}`}>Availability</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">Check Availability</h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-ivory/70">
            Share your wedding date, location, and the type of coverage you are considering.
            We regularly support inquiries from Richmond, Fredericksburg, Stafford,
            Northern Virginia, Arlington, Alexandria, Washington DC, and the DMV area.
          </p>
          <p className="mt-6 max-w-lg border-l border-gold pl-5 leading-7 text-ivory/76">
            We take a limited number of weddings each month to maintain quality.
            Dates are confirmed on a first-come basis.
          </p>
          <div className="mt-9 grid gap-3 text-sm uppercase tracking-[0.14em] text-ivory/68">
            <a className="transition hover:text-white" href="mailto:brandonmediagroupllc@gmail.com">
              brandonmediagroupllc@gmail.com
            </a>
            <a className="transition hover:text-white" href="tel:5402147725">540-214-7725</a>
            <p>@brandonmediagroup</p>
            <p>Serving Richmond · Fredericksburg · Northern Virginia · Washington DC · Arlington · Alexandria · Stafford · DMV area</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 text-[0.68rem]">
              <a className="transition hover:text-white" href="#weddings">Weddings</a>
              <a className="transition hover:text-white" href="#portfolio">Portfolio</a>
              <a className="transition hover:text-white" href="/corporate-events">Corporate Events</a>
              <a className="transition hover:text-white" href="/real-estate-media">Real Estate</a>
              <a className="transition hover:text-white" href="#contact">Contact</a>
            </div>
          </div>
        </div>
        <div className="border border-white/12 bg-ink p-5 md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
