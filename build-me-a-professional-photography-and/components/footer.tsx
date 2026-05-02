export function Footer() {
  return (
    <footer className="section-shell py-10">
      <div className="flex flex-col justify-between gap-5 border-t border-white/10 pt-8 text-sm text-ivory/58 md:flex-row md:items-center">
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
          <p className="mt-2">Wedding Photography & Cinematic Films</p>
        </div>
        <div className="text-left md:text-right">
          <p>Serving the DMV Area</p>
          <p className="mt-2">Fully Insured · Professional Equipment · Reliable Service</p>
        </div>
      </div>
    </footer>
  );
}
