export function Footer() {
  const links = [
    ["Weddings", "/#weddings"],
    ["Portfolio", "/#portfolio"],
    ["Corporate Events", "/corporate-events"],
    ["Real Estate", "/real-estate-media"],
    ["Contact", "/#contact"]
  ];

  return (
    <footer className="section-shell py-10">
      <div className="flex flex-col justify-between gap-5 border-t border-white/10 pt-8 text-sm text-ivory/58 md:flex-row md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <svg
              viewBox="294 105 52 32"
              className="h-6 w-10 shrink-0"
              aria-hidden="true"
              role="img"
            >
              <image href="/brand/bmg_minimal_mark.svg" width="680" height="820" />
            </svg>
            <p className="font-semibold uppercase tracking-[0.2em] text-white">Brandon Media Group LLC</p>
          </div>
          <p className="mt-2">Wedding Photography, Cinematic Films, Event Coverage & Real Estate Media</p>
          <nav
            aria-label="Footer service links"
            className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[0.68rem] uppercase tracking-[0.16em]"
          >
            {links.map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="max-w-xl text-left md:text-right">
          <p>
            Serving Richmond, Fredericksburg, Northern Virginia, Washington DC,
            Arlington, Alexandria, Stafford, and the DMV area.
          </p>
          <p className="mt-2">Fully Insured · Professional Equipment · Reliable Service</p>
        </div>
      </div>
    </footer>
  );
}
