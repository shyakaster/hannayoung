"use client";

import { useEffect, useState } from "react";
import { whatsapp } from "../lib/site";
import { WhatsAppIcon } from "./icons";

/** Persistent WhatsApp booking button — appears after the hero. */
export function FloatingBook() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsapp("Hi Hanna, I'd love to enquire about booking you.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book via WhatsApp"
      className={`fixed bottom-5 right-5 z-40 btn btn-red !rounded-none shadow-xl transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <WhatsAppIcon /> <span className="hidden sm:inline">Book now</span>
    </a>
  );
}
