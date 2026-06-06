"use client";

import { useState, useEffect } from "react";
import { whatsapp } from "../lib/site";
import { WhatsAppIcon } from "./icons";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Praise", href: "#praise" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        open
          ? "bg-transparent text-[var(--paper)]"
          : scrolled
          ? "bg-[var(--paper)]/90 backdrop-blur-md border-b border-[var(--line)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-[72px]">
        <a
          href="#home"
          className="flex items-baseline gap-2 group"
          onClick={() => setOpen(false)}
        >
          <span className="font-[family-name:var(--font-instrument)] text-2xl tracking-tight leading-none">
            Hanna Young
          </span>
          <span className="hidden sm:inline text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-[var(--muted)] pb-0.5">
            Vocalist
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-[0.78rem] font-medium uppercase tracking-[0.16em]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsapp("Hi Hanna, I'd love to enquire about booking you for an event.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ink !py-3 !px-5 text-[0.72rem]"
          >
            <WhatsAppIcon className="shrink-0" />
            Book now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden relative z-50 flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-current transition-transform duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span className={`block w-6 h-px bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span
            className={`block w-6 h-px bg-current transition-transform duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>
      </header>

      {/* Mobile overlay — sibling of <header> so the header's backdrop-blur
          can't contain this fixed element and collapse it into the bar */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-[var(--ink)] text-[var(--paper)] transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-center min-h-full container-wide gap-2 py-24 overflow-y-auto">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 py-3 border-b border-[var(--line-light)]"
            >
              <span className="text-[0.65rem] font-semibold text-[var(--red)] tracking-widest">
                0{i + 1}
              </span>
              <span className="font-[family-name:var(--font-instrument)] text-5xl">
                {item.label}
              </span>
            </a>
          ))}
          <a
            href={whatsapp("Hi Hanna, I'd love to enquire about booking you for an event.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn btn-red mt-8 self-start"
          >
            <WhatsAppIcon /> Book via WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
