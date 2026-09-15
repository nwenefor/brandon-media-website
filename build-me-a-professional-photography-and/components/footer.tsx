import { business } from "@/lib/site";
import { TrackedPrivacyLink } from "@/components/tracked-privacy-link";

const serviceLinks = [
  ["Wedding Photo + Video", "/wedding-photo-video"],
  ["Wedding Photography", "/wedding-photography"],
  ["Wedding Videography", "/wedding-videography"],
  ["Engagement Photography", "/engagement-photography"]
] as const;

const locationLinks = [
  ["Alexandria Weddings", "/alexandria-wedding-photographer-videographer"],
  ["Northern Virginia Weddings", "/northern-virginia-wedding-photographer-videographer"]
] as const;

export function Footer() {

  return (
    <footer className="section-shell py-10">
      <div className="grid gap-10 border-t border-white/10 pt-10 text-sm text-ivory/58 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <svg viewBox="294 105 52 32" className="h-6 w-10 shrink-0" aria-hidden="true" role="img">
              <image href="/brand/bmg_minimal_mark.svg" width="680" height="820" />
            </svg>
            <p className="font-semibold uppercase tracking-[0.2em] text-white">{business.displayName}</p>
          </div>
          <p className="mt-3 max-w-md leading-6">Wedding photography and cinematic films for couples across Virginia, Northern Virginia, Washington, DC, and the DMV.</p>
          <div className="mt-4 grid gap-1">
            <a className="transition hover:text-white" href={`mailto:${business.email}`}>{business.email}</a>
            <a className="transition hover:text-white" href={`tel:${business.phoneInternational}`}>{business.phoneDisplay}</a>
            <a className="transition hover:text-white" href={business.instagram}>Instagram</a>
          </div>
        </div>
        <nav aria-label="Wedding services" className="grid content-start gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Wedding Services</p>
          {serviceLinks.map(([label, href]) => <a key={href} href={href} className="transition hover:text-white">{label}</a>)}
        </nav>
        <nav aria-label="Locations and company links" className="grid content-start gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Locations</p>
          {locationLinks.map(([label, href]) => <a key={href} href={href} className="transition hover:text-white">{label}</a>)}
          <a href="/about" className="transition hover:text-white">About</a>
          <a href="/#portfolio" className="transition hover:text-white">Portfolio</a>
          <a href="/#contact" className="transition hover:text-white">Contact</a>
          <TrackedPrivacyLink location="footer" className="transition hover:text-white" />
        </nav>
      </div>
      <p className="mt-10 border-t border-white/8 pt-5 text-xs text-ivory/40">© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
    </footer>
  );
}
