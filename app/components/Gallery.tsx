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
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 mx-auto max-w-md">
              <div className="img-frame relative aspect-[3/4] bg-[var(--ink)]">
                <Image
                  src="/raindance-2.jpg"
                  alt="Hanna Elizabeth Young on the Raindance Film Festival red carpet"
                  fill
                  sizes="(max-width: 640px) 90vw, 28rem"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
