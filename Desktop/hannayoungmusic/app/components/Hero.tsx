"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=2000&h=1600&fit=crop",
    alt: "Classical saxophone performance",
  },
  {
    src: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=2000&h=1600&fit=crop",
    alt: "Elegant music performance",
  },
  {
    src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=2000&h=1600&fit=crop",
    alt: "Musician performing",
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden pt-20">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white section-padding">
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide mb-6 animate-fade-in">
          Hanna Young
        </h1>
        <p className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-light tracking-widest mb-12 animate-fade-in">
          Classical Saxophonist
        </p>
        <div className="flex gap-6 animate-fade-in">
          <a
            href="#events"
            className="px-8 py-4 border-2 border-white text-white font-[family-name:var(--font-cormorant)] text-lg font-medium hover:bg-white hover:text-neutral-900 transition-all duration-300"
          >
            View Events
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-neutral-900 font-[family-name:var(--font-cormorant)] text-lg font-medium hover:bg-neutral-100 transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
