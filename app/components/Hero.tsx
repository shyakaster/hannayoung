import Image from "next/image";
import { whatsapp } from "../lib/site";
import { ArrowRight, WhatsAppIcon } from "./icons";

const stats = [
  { value: "15", label: "Years performing" },
  { value: "500+", label: "Live performances" },
  { value: "50+", label: "Events & weddings" },
];

export function Hero() {
  return (
    <section id="home" className="relative pt-[72px] overflow-hidden">
      <div className="container-wide grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center min-h-[calc(100vh-72px)] py-16 lg:py-0">
        {/* ---- Text column ---- */}
        <div className="relative z-10">
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-[var(--red)]" />
            London Vocalist
          </p>

          <h1 className="display mt-6 text-[clamp(3.4rem,9vw,8.5rem)]">
            Hanna
            <br />
            Elizabeth
            <br />
            <em className="text-[var(--red)]">Young</em>
          </h1>

          <p className="lead max-w-md mt-7 text-[var(--muted)]">
            Elegant, soulful live vocals across jazz, folk, blues and classical
            crossover — for weddings, private events and venues.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-9">
            <a
              href={whatsapp("Hi Hanna, I'd love to check your availability for an event.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-red"
            >
              <WhatsAppIcon /> Book via WhatsApp
            </a>
            <a href="#packages" className="btn btn-ghost">
              View packages <ArrowRight />
            </a>
          </div>

          {/* Stats */}
          <dl className="grid grid-cols-3 gap-6 mt-14 max-w-lg border-t border-[var(--line)] pt-7">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-[family-name:var(--font-instrument)] text-4xl md:text-5xl leading-none">
                  {s.value}
                </dt>
                <dd className="mt-2 text-[0.7rem] uppercase tracking-[0.14em] text-[var(--muted)]">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ---- Image column ---- */}
        <div className="relative">
          {/* Offset accent block */}
          <div className="absolute -top-4 -right-4 lg:-right-8 w-2/3 h-3/4 bg-[var(--red)] z-0 hidden sm:block" />
          <div className="absolute -bottom-5 -left-5 w-24 h-24 border-2 border-[var(--blue)] z-0 hidden sm:block" />

          <div className="img-frame relative z-10 aspect-[3/4] w-full max-w-[460px] mx-auto bg-[var(--ink)]">
            {/* Save the black-dress portrait as /public/hanna-1.jpg */}
            <Image
              src="/hanna-1.jpg"
              alt="Hanna Elizabeth Young, vocalist"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 460px"
              className="object-cover object-top"
            />
          </div>

          <p className="relative z-10 text-right mt-4 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--muted)]">
            Birdland Jazz Club · 54 Below · Trained in New York
          </p>
        </div>
      </div>
    </section>
  );
}
