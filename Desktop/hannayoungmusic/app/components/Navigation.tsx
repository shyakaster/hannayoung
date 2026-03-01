"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "News", href: "#news" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="section-padding">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-16" : "h-20"
        }`}>
          {/* Logo */}
          <Link 
            href="#home" 
            className={`font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-normal tracking-wide transition-all duration-300 ${
              isScrolled ? "text-[#1c1917]" : "text-white"
            } hover:opacity-70`}
          >
            Hanna Young
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`font-[family-name:var(--font-cormorant)] text-base font-medium tracking-widest uppercase transition-all duration-300 link-underline ${
                  isScrolled ? "text-[#1c1917]" : "text-white"
                } hover:opacity-70`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded transition-colors ${
              isScrolled ? "hover:bg-[#e8e4dc]" : "hover:bg-white/10"
            }`}
            aria-label="Toggle navigation"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`block h-px transition-all duration-300 ${
                isScrolled ? "bg-[#1c1917]" : "bg-white"
              } ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-px transition-all duration-300 ${
                isScrolled ? "bg-[#1c1917]" : "bg-white"
              } ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px transition-all duration-300 ${
                isScrolled ? "bg-[#1c1917]" : "bg-white"
              } ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-[#e8e4dc]">
            <div className="section-padding py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[#1c1917] hover:text-[#8b7355] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
