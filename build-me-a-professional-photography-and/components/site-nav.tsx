const serviceLinks = [
  ["Photo + Video", "/wedding-photo-video"],
  ["Photography", "/wedding-photography"],
  ["Videography", "/wedding-videography"],
  ["Engagement", "/engagement-photography"]
] as const;

const locationLinks = [
  ["Alexandria", "/alexandria-wedding-photographer-videographer"],
  ["Northern Virginia", "/northern-virginia-wedding-photographer-videographer"]
] as const;

const secondaryLinks = [
  ["Portfolio", "/#portfolio"],
  ["About", "/about"]
] as const;

export function SiteNav() {
  return (
    <nav className="section-shell absolute left-0 right-0 top-0 z-20 flex min-h-20 items-center justify-between gap-4 py-5" aria-label="Main navigation">
      <a
        href="/"
        className="flex min-w-0 shrink-0 items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ivory"
        aria-label="Brandon Media Group home"
      >
        <svg viewBox="294 105 52 32" className="h-5 w-8 shrink-0" aria-hidden="true" role="img">
          <image href="/brand/bmg_minimal_mark.svg" width="680" height="820" />
        </svg>
        <span className="hidden truncate sm:block lg:hidden xl:block">Brandon Media Group</span>
      </a>

      <div className="hidden items-center justify-center gap-4 text-center text-[0.6rem] uppercase leading-tight tracking-[0.15em] text-ivory/76 lg:flex xl:gap-5 xl:text-[0.66rem]">
        {serviceLinks.map(([label, href]) => (
          <a key={href} href={href} className="transition hover:text-white">{label}</a>
        ))}
        <details className="group relative">
          <summary className="cursor-pointer list-none transition hover:text-white marker:hidden">Locations</summary>
          <div className="absolute left-1/2 top-7 grid w-52 -translate-x-1/2 gap-1 border border-white/12 bg-ink/95 p-2 text-left shadow-xl backdrop-blur">
            {locationLinks.map(([label, href]) => (
              <a key={href} href={href} className="px-3 py-3 transition hover:bg-white/[0.06] hover:text-white">{label}</a>
            ))}
          </div>
        </details>
        {secondaryLinks.map(([label, href]) => (
          <a key={href} href={href} className="transition hover:text-white">{label}</a>
        ))}
      </div>

      <div className="ml-auto flex items-center gap-2 lg:ml-0">
        <a
          href="/#contact"
          className="hidden shrink-0 border border-ivory/28 px-3 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-ivory transition hover:border-gold hover:text-gold sm:inline-flex"
        >
          Inquire
        </a>
        <details className="group relative lg:hidden">
          <summary className="cursor-pointer list-none border border-ivory/28 px-3 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-ivory marker:hidden">
            Menu
          </summary>
          <div className="absolute right-0 top-14 grid w-[min(19rem,calc(100vw-2rem))] gap-1 border border-white/12 bg-ink/98 p-3 text-xs uppercase tracking-[0.16em] text-ivory shadow-2xl backdrop-blur">
            {serviceLinks.map(([label, href]) => (
              <a key={href} href={href} className="border-b border-white/8 px-3 py-3 transition hover:text-gold">{label}</a>
            ))}
            {locationLinks.map(([label, href]) => (
              <a key={href} href={href} className="border-b border-white/8 px-3 py-3 transition hover:text-gold">{label}</a>
            ))}
            {secondaryLinks.map(([label, href]) => (
              <a key={href} href={href} className="border-b border-white/8 px-3 py-3 transition hover:text-gold">{label}</a>
            ))}
            <a href="/#contact" className="mt-2 bg-ivory px-3 py-4 text-center font-semibold text-ink">Check Availability</a>
          </div>
        </details>
      </div>
    </nav>
  );
}
