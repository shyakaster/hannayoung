import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "We had Hanna perform at QUEENS 15 in Peckham and were honestly blown away. An incredible voice, amazing stage presence, and the ability to completely captivate the room from start to finish. The crowd loved every minute. Professional, reliable, and a true standout performer — we'd book again in a heartbeat.",
    author: "Venue Manager",
    detail: "QUEENS 15, Peckham",
  },
  {
    quote:
      "We had Hanna sing at our wedding and we were absolutely blown away. From the ceremony to the drinks reception, every song was beautiful and so perfectly suited to the moment. So many of our guests commented on how incredible the singing was — it really made the day feel extra special. We couldn't have asked for better.",
    author: "Helen Z.",
    detail: "Wedding",
  },
];

export function Reviews() {
  return (
    <section id="praise" className="on-ink section">
      <div className="container-wide">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="index-num !text-[var(--muted-light)]">(03)</span>
            <span className="eyebrow">Praise &amp; Awards</span>
          </div>
        </Reveal>

        {/* Feature quote */}
        <Reveal className="mt-12 max-w-5xl">
          <blockquote className="font-[family-name:var(--font-instrument)] text-[clamp(2rem,5vw,4rem)] leading-[1.05]">
            <span className="text-[var(--red)]">“</span>
            Hanna Elizabeth Young is a new type of singer — bluesy and torchy —
            and lovely to listen to.
            <span className="text-[var(--red)]">”</span>
          </blockquote>
          <p className="mt-6 text-sm uppercase tracking-[0.16em] text-[var(--muted-light)]">
            Voce di Mece Magazine — New York City, USA
          </p>
        </Reveal>

        {/* Award strip */}
        <Reveal className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 border-y border-[var(--line-light)] py-7">
            <span className="text-[var(--red)] text-3xl leading-none">★</span>
            <p className="text-lg text-[var(--paper)]/90 max-w-3xl">
              Winner — <span className="font-medium">Best Duet Performance</span>{" "}
              at LET&apos;S Broadway NYC, with recognised work as a producer —
              affirming her reputation as a captivating, versatile live
              performer.
            </p>
          </div>
        </Reveal>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 120}>
              <figure className="h-full flex flex-col border border-[var(--line-light)] p-8 md:p-10">
                <div className="text-[var(--red)] mb-5" aria-hidden>
                  ★★★★★
                </div>
                <blockquote className="text-[var(--paper)]/85 leading-relaxed flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 pt-5 border-t border-[var(--line-light)]">
                  <span className="font-[family-name:var(--font-instrument)] text-2xl">
                    {t.author}
                  </span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-[var(--muted-light)] mt-1">
                    {t.detail}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
