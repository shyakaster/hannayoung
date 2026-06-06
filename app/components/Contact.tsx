import { Reveal } from "./Reveal";
import { whatsapp, mailto, PHONE_DISPLAY, EMAIL } from "../lib/site";
import { ArrowRight, WhatsAppIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="on-ink section">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="flex items-baseline gap-4">
              <span className="index-num !text-[var(--muted-light)]">(05)</span>
              <span className="eyebrow">Booking</span>
            </div>
            <h2 className="display text-[clamp(2.6rem,7vw,6rem)] mt-6">
              Let&apos;s make it
              <br />
              <em className="text-[var(--red)]">unforgettable.</em>
            </h2>
            <p className="lead text-[var(--muted-light)] max-w-md mt-7">
              Tell me your date, venue and the moment you want to fill with live
              music. The quickest way to check availability is WhatsApp.
            </p>

            <a
              href={whatsapp("Hi Hanna, I'd like to check your availability. My event is on [date] at [venue].")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-red mt-9"
            >
              <WhatsAppIcon /> Message on WhatsApp
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="divide-y divide-[var(--line-light)] border-y border-[var(--line-light)]">
              <a
                href={whatsapp("Hi Hanna!")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-7 gap-4"
              >
                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-[var(--muted-light)]">
                    WhatsApp / Call
                  </span>
                  <span className="font-[family-name:var(--font-instrument)] text-3xl md:text-4xl">
                    {PHONE_DISPLAY}
                  </span>
                </span>
                <ArrowRight className="text-[var(--red)] transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={mailto("Booking enquiry")}
                className="group flex items-center justify-between py-7 gap-4"
              >
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-[0.18em] text-[var(--muted-light)]">
                    Email
                  </span>
                  <span className="font-[family-name:var(--font-instrument)] text-2xl md:text-3xl break-all">
                    {EMAIL}
                  </span>
                </span>
                <ArrowRight className="text-[var(--red)] shrink-0 transition-transform group-hover:translate-x-1" />
              </a>

              <div className="py-7">
                <span className="block text-xs uppercase tracking-[0.18em] text-[var(--muted-light)]">
                  Based in / Availability
                </span>
                <span className="font-[family-name:var(--font-instrument)] text-2xl md:text-3xl">
                  London — available worldwide
                </span>
              </div>
            </div>

            <p className="mt-6 text-sm text-[var(--muted-light)]">
              Secure online deposits &amp; card payments are coming soon. For now,
              bookings are confirmed via WhatsApp or email.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
