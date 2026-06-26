import Image from "next/image";
import { Reveal } from "./Reveal";

export function Gallery() {
  return (
    <section id="gallery" className="section pt-0">
      <div className="container-wide">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="index-num">(04)</span>
            <span className="eyebrow">Gallery</span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-10 items-start">
          {/* Tall portrait */}
          <Reveal>
            <div className="img-frame relative aspect-[4/5] bg-[var(--ink)]">
              <Image
                src="/hanna-2.jpg"
                alt="Hanna Elizabeth Young — portrait"
                fill
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-cover object-top"
              />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
              Portrait
            </p>
          </Reveal>

          {/* Landscape, offset down for editorial rhythm */}
          <Reveal delay={120} className="md:mt-20">
            <div className="img-frame relative aspect-[5/4] bg-[var(--ink)]">
              <Image
                src="/hanna-1.jpg"
                alt="Hanna Elizabeth Young — on location"
                fill
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-cover object-center"
              />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
              On location
            </p>
          </Reveal>
        </div>

        {/* Raindance Film Festival feature */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Red Carpet</span>
              <h3 className="display mt-3 text-3xl md:text-5xl leading-[0.95]">
                Raindance Film Festival 2026
              </h3>
              <p className="lead mt-4 text-[var(--muted)]">
                With BBC-accredited composer Imran Ahmad, celebrating{" "}
                <em className="not-italic text-[var(--ink)]">Angel of the North</em>{" "}
                — directed by Sean Cronin.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 items-start">
            <Reveal>
              <div className="img-frame relative aspect-[3/4] bg-[var(--ink)]">
                <Image
                  src="/raindance-1.jpg"
                  alt="Hanna Elizabeth Young with composer Imran Ahmad on the Raindance Film Festival red carpet"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover object-top"
                />
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:mt-16">
              <div className="img-frame relative aspect-[3/4] bg-[var(--ink)]">
                <Image
                  src="/raindance-2.jpg"
                  alt="Hanna Elizabeth Young on the Raindance Film Festival red carpet"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover object-top"
                />
              </div>
            </Reveal>

            <Reveal delay={240} className="sm:col-span-2 lg:col-span-1">
              <div className="img-frame relative aspect-[3/4] bg-[var(--ink)]">
                <Image
                  src="/raindance-3.jpg"
                  alt="Hanna Elizabeth Young with composer Imran Ahmad at the Raindance Film Festival"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 90vw, 30vw"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
