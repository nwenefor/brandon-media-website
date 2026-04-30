import { Footer } from "@/components/footer";
import { Field, ServiceInquiryForm } from "@/components/service-inquiry-form";
import { SiteNav } from "@/components/site-nav";

type ServicePageProps = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryCtaHref?: string;
  heroImage: string;
  heroAlt: string;
  positioning: string;
  captureTitle: string;
  captureItems: string[];
  bestFor: string[];
  deliverables: string[];
  ctaTitle: string;
  ctaCopy: string;
  projectType: string;
  formFields: readonly Field[];
};

export function ServicePage({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  secondaryCtaHref = "/#portfolio",
  heroImage,
  heroAlt,
  positioning,
  captureTitle,
  captureItems,
  bestFor,
  deliverables,
  ctaTitle,
  ctaCopy,
  projectType,
  formFields
}: ServicePageProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-ivory">
      <section className="relative flex min-h-[86vh] items-end overflow-hidden">
        {/* TODO: Replace placeholder with real Brandon Media Group service work. */}
        <img className="absolute inset-0 h-full w-full object-cover" src={heroImage} alt={heroAlt} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/62 to-ink/20" />
        <SiteNav />
        <div className="section-shell relative z-10 w-full pb-14 pt-32 md:pb-20">
          <div className="max-w-5xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-gold">{eyebrow}</p>
            <h1 className="font-serif text-5xl font-normal leading-[0.98] tracking-normal text-white sm:text-7xl">
              {headline}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-ivory/82 md:text-xl">{subheadline}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="btn-primary" href="#inquiry">{primaryCta}</a>
              <a className="btn-secondary" href={secondaryCtaHref}>{secondaryCta}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <p className="max-w-4xl font-serif text-3xl leading-tight text-white md:text-5xl">
          {positioning}
        </p>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20 md:py-28">
        <div className="section-shell">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">{captureTitle}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">Coverage with a clear purpose.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {captureItems.map((item) => (
              <article key={item} className="border border-white/12 bg-ink/42 p-6">
                <h3 className="font-serif text-2xl text-white">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-12 py-20 md:grid-cols-2 md:py-28">
        <ListBlock title="Best For" items={bestFor} />
        <ListBlock title="Deliverables" items={deliverables} />
      </section>

      <section id="inquiry" className="border-t border-white/10 bg-white/[0.03] py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Inquiry</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-6xl">{ctaTitle}</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-ivory/70">{ctaCopy}</p>
          </div>
          <div className="border border-white/12 bg-ink p-5 md:p-8">
            <ServiceInquiryForm
              projectType={projectType}
              fields={formFields}
              submitLabel={primaryCta}
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="font-serif text-4xl text-white md:text-5xl">{title}</h2>
      <div className="mt-8 grid gap-3">
        {items.map((item) => (
          <p key={item} className="border-t border-white/10 pt-4 text-ivory/74">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
