"use client";

import Link from "next/link";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: "Spotify",
    href: "https://spotify.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "News", href: "#news" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#1c1917] text-white relative">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-[#8b7355] via-[#a6917b] to-[#8b7355]" />
      
      <div className="section-padding py-20 md:py-24">
        {/* Main footer content - minimal grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Logo and tagline */}
          <div className="lg:col-span-5">
            <Link 
              href="#home" 
              className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-normal tracking-wide block mb-6"
            >
              Hanna Young
            </Link>
            <p className="font-[family-name:var(--font-cormorant)] text-lg text-white/60 leading-relaxed max-w-sm mb-8">
              Classical Saxophonist bringing elegance and emotion to weddings, events, and concerts across London and the UK.
            </p>
            
            {/* Social links - minimal */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation - compact */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.3em] uppercase text-[#8b7355] mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-cormorant)] text-lg text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-3">
            <h3 className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.3em] uppercase text-[#8b7355] mb-6">
              Contact
            </h3>
            <div className="space-y-4 font-[family-name:var(--font-cormorant)] text-lg text-white/60">
              <p>
                <a href="mailto:hello@hannayoungmusic.com" className="hover:text-white transition-colors">
                  hello@hannayoungmusic.com
                </a>
              </p>
              <p>London, UK</p>
              <p className="text-sm">Available for events across the UK and Europe</p>
            </div>
          </div>
        </div>

        {/* Bottom bar - minimal */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-[family-name:var(--font-cormorant)] text-sm text-white/40">
            © 2026 Hanna Elizabeth Young. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="font-[family-name:var(--font-cormorant)] text-sm text-white/40 hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <span className="text-white/20">·</span>
            <Link
              href="#"
              className="font-[family-name:var(--font-cormorant)] text-sm text-white/40 hover:text-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Large decorative text */}
      <div className="section-padding pb-8 overflow-hidden">
        <p className="font-[family-name:var(--font-playfair)] text-[8vw] md:text-[6vw] lg:text-[4vw] font-normal text-white/[0.03] leading-none tracking-tight select-none">
          Hanna Young Music
        </p>
      </div>
    </footer>
  );
}
