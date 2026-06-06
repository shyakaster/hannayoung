import { Reveal } from "./Reveal";
import { whatsapp } from "../lib/site";
import { ArrowRight, WhatsAppIcon } from "./icons";

const sets = [
  {
    title: "Two 45-minute sets",
    price: "£250",
    addon: "Add a guitarist or pianist — £350",
  },
  {
    title: "Three 45-minute sets",
    price: "£350",
    addon: "Add a guitarist or pianist — £550",
  },
];

const weddingPackages = [
  {
    name: "The Essentials",
    price: "£250",
    blurb: "Small, simple weddings",
    features: [
      "Arrival 30 minutes before performance",
      "1 live performance set (up to 45 minutes)",
      "Choice of songs from setlist",
      "Basic PA system included",
    ],
    featured: false,
  },
  {
    name: "The Ceremony Special",
    price: "£395",
    blurb: "Live music for your ceremony",
    features: [
      "Guest arrival music (15–20 mins)",
      "3 key ceremony songs (aisle, signing, exit)",
      "Background music between moments",
      "Short live set after ceremony (up to 30 mins)",
      "PA system included",
    ],
    featured: false,
  },
  {
    name: "The Full Day Experience",
    price: "£695",
    blurb: "Music throughout your wedding day",
    features: [
      "Ceremony music (full coverage)",
      "Drinks reception — 2 × 45-minute live sets",
      "Background playlist between sets",
      "First dance performed live (if required)",
      "Full PA & setup included",
    ],
    featured: true,
  },
];

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-1.5 shrink-0" aria-hidden>
      <path d="M2 7.5L5.5 11L12 3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Packages() {
  return (
    <section id="packages" className="section grain relative">
      <div className="container-wide">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="index-num">(02)</span>
            <span className="eyebrow">Investment Guide</span>
          </div>
          <h2 className="display text-[clamp(2.2rem,6vw,5rem)] mt-6 max-w-3xl">
            Live music, <em className="text-[var(--red)]">tailored</em> to your
            occasion.
          </h2>
        </Reveal>

        {/* ---- Performance sets ---- */}
        <Reveal className="mt-16">
          <p className="eyebrow text-[var(--ink)] mb-6">Performance Sets</p>
          <div className="grid md:grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)]">
            {sets.map((s) => (
              <div
                key={s.title}
                className="bg-[var(--paper)] p-8 md:p-10 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-[family-name:var(--font-instrument)] text-2xl md:text-3xl max-w-[14ch]">
                    {s.title}
                  </h3>
                  <span className="font-[family-name:var(--font-instrument)] text-4xl md:text-5xl text-[var(--red)] leading-none">
                    {s.price}
                  </span>
                </div>
                <p className="mt-4 text-[var(--muted)] text-sm">{s.addon}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ---- Wedding packages ---- */}
        <div className="mt-20">
          <Reveal>
            <p className="eyebrow text-[var(--ink)] mb-8">Wedding Packages</p>
          </Reveal>
          <div className="grid lg:grid-cols-3 gap-6">
            {weddingPackages.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div
                  className={`h-full flex flex-col p-8 lg:p-9 border transition-colors duration-300 ${
                    p.featured
                      ? "bg-[var(--ink)] text-[var(--paper)] border-[var(--ink)]"
                      : "bg-[var(--paper)] border-[var(--line)] hover:border-[var(--ink)]"
                  }`}
                >
                  {p.featured && (
                    <span className="self-start mb-4 text-[0.62rem] font-semibold uppercase tracking-[0.2em] bg-[var(--red)] text-[var(--paper)] px-2.5 py-1">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-[family-name:var(--font-instrument)] text-3xl">
                    {p.name}
                  </h3>
                  <p
                    className={`mt-1 text-sm ${
                      p.featured ? "text-[var(--muted-light)]" : "text-[var(--muted)]"
                    }`}
                  >
                    Perfect for: {p.blurb}
                  </p>
                  <p className="font-[family-name:var(--font-instrument)] text-6xl mt-6 text-[var(--red)] leading-none">
                    {p.price}
                  </p>

                  <ul className="mt-7 space-y-3 flex-1">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className={`flex gap-3 text-sm leading-snug ${
                          p.featured ? "text-[var(--paper)]" : "text-[var(--ink)]"
                        }`}
                      >
                        <span className="text-[var(--red)]">
                          <Check />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsapp(
                      `Hi Hanna, I'm interested in the "${p.name}" wedding package (${p.price}). Could you share availability?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn mt-8 w-full justify-center ${
                      p.featured ? "btn-red" : "btn-ghost"
                    }`}
                  >
                    <WhatsAppIcon /> Enquire
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ---- Fine print / bespoke ---- */}
        <Reveal className="mt-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-[var(--line)] pt-8">
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-[var(--muted)]">
              <span>Available worldwide</span>
              <span className="hidden md:inline text-[var(--line)]">/</span>
              <span>Travel beyond 5 miles — £0.45 per mile</span>
              <span className="hidden md:inline text-[var(--line)]">/</span>
              <span>Bespoke packages on request</span>
            </div>
            <a
              href={whatsapp("Hi Hanna, I'd like to discuss a bespoke package.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ink shrink-0"
            >
              Discuss a bespoke package <ArrowRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
