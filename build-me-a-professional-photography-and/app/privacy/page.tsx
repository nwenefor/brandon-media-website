import type { Metadata } from "next";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { business } from "@/lib/site";

const title = "Privacy Policy | Brandon Media Group";
const description =
  "Learn how Brandon Media Group LLC collects, uses, shares, and protects information submitted through this website.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ink text-ivory">
      <header className="border-b border-white/10">
        <div className="section-shell flex min-h-20 items-center justify-between gap-4 py-4">
          <a href="/" className="flex items-center gap-3" aria-label="Brandon Media Group home">
            <Image src={business.logo} alt="" width={44} height={44} className="h-8 w-8 object-contain" />
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white">
              Brandon Media Group
            </span>
          </a>
          <a href="/" className="text-xs font-semibold uppercase tracking-[0.16em] text-ivory/70 transition hover:text-white">
            Return Home
          </a>
        </div>
      </header>

      <article className="section-shell py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Brandon Media Group LLC</p>
          <h1 className="mt-4 font-serif text-5xl leading-none text-white sm:text-6xl">Privacy Policy</h1>
          <p className="mt-5 text-sm text-ivory/48">Last updated September 15, 2026</p>
          <p className="mt-8 text-lg leading-8 text-ivory/72">
            This policy explains how Brandon Media Group LLC handles information collected through
            brandonmediagroup.com and related inquiry forms. It applies to information submitted through
            this website and to website measurement technologies used when configured.
          </p>
        </div>

        <div className="mt-14 grid max-w-3xl gap-12 text-[0.98rem] leading-7 text-ivory/68">
          <PolicySection title="Information we collect">
            <p>
              When you submit an inquiry, we may collect your name, email address, phone number, wedding
              or event date, venue or location, services of interest, approximate coverage needs, budget
              range, and any details you include in an optional message.
            </p>
            <p>
              The website may also receive limited technical information needed to operate and protect the
              service, such as request data used for rate limiting, abuse prevention, and basic website diagnostics.
            </p>
          </PolicySection>

          <PolicySection title="How information is used">
            <p>Information may be used to:</p>
            <ul className="grid list-disc gap-2 pl-5 marker:text-gold">
              <li>respond to inquiries and confirm availability;</li>
              <li>prepare quotes and discuss suitable service options;</li>
              <li>schedule consultations and communicate about requested services;</li>
              <li>provide contracted photography or videography services;</li>
              <li>prevent spam, fraud, or misuse of the website; and</li>
              <li>understand and improve website performance and visitor experience.</li>
            </ul>
          </PolicySection>

          <PolicySection title="Email delivery and service providers">
            <p>
              Website inquiries are delivered through Zoho Mail when SMTP delivery is configured. Brandon
              Media Group may also use service providers that are reasonably necessary to host the website,
              deliver email, schedule consultations, provide galleries, process contracted work, or measure
              website performance.
            </p>
            <p>
              Information is shared with these providers only as reasonably necessary for them to perform
              those functions. Brandon Media Group does not sell personal information.
            </p>
          </PolicySection>

          <PolicySection title="Analytics, advertising, and cookies">
            <p>
              When configured, the website may use Google Tag Manager, Google Analytics, and Google Ads to
              understand website usage and measure advertising results. These services may use cookies,
              browser storage, pixels, or similar technologies. Conversion events are designed not to include
              inquiry names, email addresses, phone numbers, messages, or other form contents.
            </p>
            <p>
              You can use browser controls to limit or remove cookies. Restricting cookies may affect how
              some website features or measurement tools work.
            </p>
          </PolicySection>

          <PolicySection title="Data security and retention">
            <p>
              Brandon Media Group uses reasonable administrative and technical practices appropriate to the
              website and services. No internet transmission or storage method can be guaranteed completely secure.
            </p>
            <p>
              Information is retained only as reasonably needed for legitimate business operations, requested
              or contracted services, accounting and tax obligations, dispute resolution, and applicable legal needs.
            </p>
          </PolicySection>

          <PolicySection title="Your choices">
            <p>
              Submitting an inquiry authorizes Brandon Media Group to respond about that request. It does not
              enroll you in unrelated promotional email or SMS marketing. You may ask Brandon Media Group to
              stop non-contractual communications, and you may control cookies through your browser settings.
            </p>
          </PolicySection>

          <PolicySection title="Children’s privacy">
            <p>
              This website is intended for people seeking professional media services and is not directed to
              children. Brandon Media Group does not knowingly request personal information from children through
              its inquiry forms.
            </p>
          </PolicySection>

          <PolicySection title="Third-party links">
            <p>
              The website may link to third-party services, including Pixieset galleries and scheduling or social
              platforms. Those services operate under their own privacy practices, and this policy does not control
              how a third party handles information after you leave this website.
            </p>
          </PolicySection>

          <PolicySection title="Policy updates">
            <p>
              This policy may be updated as the website, services, or operational practices change. The revised
              date at the top of this page will identify the current version.
            </p>
          </PolicySection>

          <PolicySection title="Contact">
            <p>
              Questions about this policy or Brandon Media Group’s handling of website inquiries may be sent to{" "}
              <a className="text-white underline decoration-gold/60 underline-offset-4 hover:text-gold" href={`mailto:${business.email}`}>
                {business.email}
              </a>.
            </p>
          </PolicySection>
        </div>
      </article>

      <footer className="border-t border-white/10 py-8">
        <div className="section-shell flex flex-col gap-3 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <a href="/" className="text-ivory/70 transition hover:text-white">Home</a>
        </div>
      </footer>
    </main>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={`privacy-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
      <h2
        id={`privacy-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
        className="font-serif text-3xl text-white"
      >
        {title}
      </h2>
      <div className="mt-4 grid gap-4">{children}</div>
    </section>
  );
}
