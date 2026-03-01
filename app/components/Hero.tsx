"use client";

import { useState, useEffect, useCallback } from "react";
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Ken Burns effect */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div 
            className={`absolute inset-0 transition-transform duration-[8000ms] ease-out ${
              index === currentIndex ? "scale-105" : "scale-100"
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
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
      ))}

      {/* Decorative elements */}
      <div className="absolute top-20 left-12 w-px h-32 bg-gradient-to-b from-white/40 to-transparent hidden lg:block" />
      <div className="absolute bottom-32 right-12 w-px h-32 bg-gradient-to-t from-white/40 to-transparent hidden lg:block" />
      
      {/* Corner accent */}
      <div className="absolute top-32 left-12 w-16 h-px bg-gradient-to-r from-[#a6917b] to-transparent hidden lg:block" />
      <div className="absolute bottom-48 right-12 w-16 h-px bg-gradient-to-l from-[#a6917b] to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        {/* Top decorative line */}
        <div className={`mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-16 h-px bg-[#a6917b] mx-auto mb-2" />
          <p className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.4em] uppercase text-white/80">
            Classical Saxophonist
          </p>
        </div>

        {/* Main Title */}
        <h1 
          className={`font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal tracking-tight mb-4 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="block">Hanna</span>
          <span className="block font-light italic text-[#e8e4dc]">Young</span>
        </h1>

        {/* Subtitle */}
        <p 
          className={`font-[family-name:var(--font-cormorant)] text-xl md:text-2xl font-light tracking-[0.2em] text-white/90 mb-16 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Weddings · Events · Concerts
        </p>

        {/* Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 sm:gap-6 transition-all duration-1000 delay-900 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#events"
            className="group relative px-10 py-4 border border-white/60 text-white font-[family-name:var(--font-cormorant)] text-base font-medium tracking-widest uppercase overflow-hidden transition-all duration-500 hover:border-white"
          >
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 group-hover:text-[#1c1917] transition-colors duration-500">
              View Events
            </span>
          </a>
          <a
            href="#contact"
            className="group relative px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-[family-name:var(--font-cormorant)] text-base font-medium tracking-widest uppercase border border-transparent overflow-hidden transition-all duration-500 hover:bg-white/20"
          >
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 group-hover:text-[#1c1917] transition-colors duration-500">
              Book Now
            </span>
          </a>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`relative h-1 transition-all duration-500 ${
              index === currentIndex ? "w-12 bg-white" : "w-1 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex && (
              <span className="absolute inset-0 bg-white animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center scroll-indicator">
        <span className="font-[family-name:var(--font-cormorant)] text-xs tracking-widest uppercase text-white/60 mb-4">
          Scroll
        </span>
      </div>
    </section>
  );
}
