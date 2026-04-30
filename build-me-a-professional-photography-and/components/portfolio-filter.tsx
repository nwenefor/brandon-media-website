"use client";

import { useEffect, useMemo, useState } from "react";

const categories = ["Weddings", "Corporate Events", "Real Estate", "Business Promos"];

const items = [
  {
    category: "Weddings",
    label: "Ceremony",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=88"
  },
  {
    category: "Weddings",
    label: "Vows",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=88"
  },
  {
    category: "Weddings",
    label: "Couple Portraits",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=88"
  },
  {
    category: "Corporate Events",
    label: "Speaker Coverage",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=88"
  },
  {
    category: "Corporate Events",
    label: "Gala Highlights",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=88"
  },
  {
    category: "Real Estate",
    label: "Listing Photography",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=88"
  },
  {
    category: "Real Estate",
    label: "Property Walkthrough",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=88"
  },
  {
    category: "Business Promos",
    label: "Brand Story",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=88"
  },
  {
    category: "Business Promos",
    label: "Social Content",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=88"
  }
];

export function PortfolioFilter() {
  const [active, setActive] = useState("Weddings");

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("portfolio");
    if (requested && categories.includes(requested)) {
      setActive(requested);
    }
  }, []);

  const filtered = useMemo(
    () => items.filter((item) => item.category === active),
    [active]
  );

  return (
    <section id="portfolio" className="bg-ivory py-20 text-ink md:py-28">
      <div className="section-shell">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Portfolio</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">Selected work by service</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`border px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] transition ${
                  active === category
                    ? "border-gold bg-gold text-ink"
                    : "border-ink/18 text-ink/64 hover:border-gold hover:text-ink"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid auto-rows-[300px] gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, index) => (
            <article
              key={item.label}
              className={`group relative overflow-hidden bg-ink ${
                index === 0 ? "lg:row-span-2" : ""
              }`}
            >
              {/* TODO: Replace placeholder with real Brandon Media Group work. */}
              <img
                src={item.image}
                alt={`${item.label} media example`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/76 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
