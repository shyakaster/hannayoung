import { Reveal } from "./Reveal";
import { mailto } from "../lib/site";
import { ArrowRight } from "./icons";

export function News() {
  return (
    <section id="news" className="section">
      <div className="container-wide">
        <Reveal>
          <div className="relative overflow-hidden bg-[var(--red)] text-[var(--paper)] grain px-8 py-14 md:px-16 md:py-20">
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div>
                <p className="eyebrow !text-[var(--paper)]/80">Latest News</p>
                <h2 className="display text-[clamp(2.5rem,7vw,6rem)] mt-4">
                  Debut album,
                  <br />
                  <em>coming soon.</em>
                </h2>
              </div>
              <a
                href={mailto("Notify me about Hanna's album release")}
                className="btn btn-ghost !border-[var(--paper)] !text-[var(--paper)] shrink-0 hover:!bg-[var(--paper)] hover:!text-[var(--red)]"
              >
                Be the first to know <ArrowRight />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
