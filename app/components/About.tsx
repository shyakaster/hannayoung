import Image from "next/image";
import { Reveal } from "./Reveal";

const genres = ["Jazz", "Soul", "Folk", "Blues", "Classical Crossover"];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-wide">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="index-num">(01)</span>
            <span className="eyebrow">About</span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 mt-10 items-start">
          {/* Portrait */}
          <Reveal className="order-2 lg:order-1">
            <div className="img-frame relative aspect-[4/5] bg-[var(--ink)]">
              {/* Save the second photo (clean / un-watermarked) as /public/hanna-2.jpg */}
              <Image
                src="/hanna-2.jpg"
                alt="Hanna Elizabeth Young performing"
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {genres.map((g) => (
                <span
                  key={g}
                  className="text-[0.68rem] uppercase tracking-[0.14em] border border-[var(--line)] px-3 py-1.5"
                >
                  {g}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal className="order-1 lg:order-2" delay={120}>
            <h2 className="display text-[clamp(2rem,4.5vw,3.6rem)] max-w-2xl">
              A voice that turns a moment into a memory.
            </h2>
            <div className="mt-8 space-y-6 max-w-xl text-[var(--muted)] text-lg leading-relaxed">
              <p>
                Hanna is a London-based vocalist recognised for her elegant,
                soulful performances and versatile repertoire across jazz, folk,
                blues and classical crossover.
              </p>
              <p>
                With training in New York and experience performing at
                prestigious venues including{" "}
                <span className="text-[var(--ink)] font-medium">
                  Birdland Jazz Club
                </span>{" "}
                and{" "}
                <span className="text-[var(--ink)] font-medium">54 Below</span>,
                she combines technical artistry with a deeply expressive,
                intimate style.
              </p>
              <p>
                Her performances bring a refined and memorable atmosphere to
                weddings, private events and venues — with each set carefully
                tailored to suit the occasion.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
