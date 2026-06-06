import { whatsapp, mailto, PHONE_DISPLAY, EMAIL } from "../lib/site";

const links = [
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Praise", href: "#praise" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="on-ink border-t border-[var(--line-light)]">
      <div className="container-wide py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div>
            <a href="#home" className="font-[family-name:var(--font-instrument)] text-4xl">
              Hanna Elizabeth Young
            </a>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[var(--muted-light)]">
              London Vocalist · Jazz · Soul · Classical Crossover
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-8">
            <nav className="flex flex-col gap-2">
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--red)] mb-1">
                Explore
              </span>
              {links.map((l) => (
                <a key={l.href} href={l.href} className="link-underline text-sm">
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--red)] mb-1">
                Get in touch
              </span>
              <a
                href={whatsapp("Hi Hanna!")}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm"
              >
                {PHONE_DISPLAY}
              </a>
              <a href={mailto()} className="link-underline text-sm break-all">
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="hairline mt-14 mb-6" />
        <div className="flex flex-col sm:flex-row justify-between gap-3 text-xs text-[var(--muted-light)]">
          <span>© {new Date().getFullYear()} Hanna Elizabeth Young. All rights reserved.</span>
          <span>Available worldwide · Bespoke packages on request</span>
        </div>
      </div>
    </footer>
  );
}
