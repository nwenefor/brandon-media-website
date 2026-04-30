const navItems = [
  ["Home", "/"],
  ["Weddings", "/#weddings"],
  ["Corporate Events", "/corporate-events"],
  ["Real Estate", "/real-estate-media"],
  ["Business Promos", "/business-promo-videos"],
  ["About", "/about"],
  ["Portfolio", "/#portfolio"],
  ["Contact", "/#contact"]
];

export function SiteNav() {
  return (
    <nav className="section-shell absolute left-0 right-0 top-0 z-20 flex min-h-20 items-center justify-between gap-6 py-5">
      <a
        href="/"
        className="min-w-0 text-xs font-semibold uppercase tracking-[0.22em] text-ivory sm:text-sm"
        aria-label="Brandon Media Group LLC home"
      >
        <span className="block truncate">Brandon Media Group LLC</span>
      </a>
      <div className="hidden items-center gap-5 text-[0.68rem] uppercase tracking-[0.16em] text-ivory/72 lg:flex">
        {navItems.map(([label, href]) => (
          <a key={href} href={href} className="transition hover:text-white">
            {label}
          </a>
        ))}
      </div>
      <a
        href="/#contact"
        className="hidden border border-ivory/28 px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ivory transition hover:border-gold hover:text-gold md:inline-flex"
      >
        Inquire
      </a>
    </nav>
  );
}
