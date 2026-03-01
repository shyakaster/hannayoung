"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=1200&fit=crop",
    alt: "Performance at The Shard",
    category: "Weddings",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop",
    alt: "Saxophone close-up",
    category: "Portrait",
    size: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&h=800&fit=crop",
    alt: "Classical performance",
    category: "Concert",
    size: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1465847899078-b413929f7120?w=800&h=1000&fit=crop",
    alt: "Elegant wedding ceremony",
    category: "Weddings",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=800&h=600&fit=crop",
    alt: "Studio recording session",
    category: "Recording",
    size: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop",
    alt: "Portrait session",
    category: "Portrait",
    size: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=1200&fit=crop",
    alt: "Evening performance",
    category: "Concert",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
    alt: "Recording studio",
    category: "Recording",
    size: "wide",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-32 md:py-40 bg-[#1c1917] text-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="section-padding relative z-10">
        {/* Section header - minimal */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#8b7355]" />
            <span className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.4em] uppercase text-[#8b7355]">
              Portfolio
            </span>
            <div className="w-12 h-px bg-[#8b7355]" />
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-normal">
            Gallery
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-white/60 mt-6 max-w-xl mx-auto">
            A collection of moments from performances, recordings, and special occasions.
          </p>
        </div>

        {/* Masonry grid with varied heights */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`break-inside-avoid relative group cursor-pointer overflow-hidden ${
                image.size === 'tall' ? 'aspect-[3/4]' : 
                image.size === 'wide' ? 'aspect-[16/9]' : 
                'aspect-square'
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="font-[family-name:var(--font-cormorant)] text-xs tracking-widest uppercase text-[#8b7355] block mb-2">
                    {image.category}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-normal">
                    {image.alt}
                  </h3>
                </div>
              </div>

              {/* Corner accent on hover */}
              <div className="absolute top-4 right-4 w-8 h-8 border border-white/0 group-hover:border-white/40 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-16 text-center">
          <button className="group relative px-10 py-4 border border-white/30 text-white font-[family-name:var(--font-cormorant)] text-sm tracking-widest uppercase overflow-hidden transition-all duration-500 hover:border-white/60">
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 group-hover:text-[#1c1917] transition-colors duration-500">
              View Full Gallery
            </span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[85vh] w-full aspect-auto">
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
            
            {/* Close button */}
            <button
              className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image info */}
            <div className="absolute -bottom-16 left-0 text-white">
              <span className="font-[family-name:var(--font-cormorant)] text-xs tracking-widest uppercase text-[#8b7355] block mb-1">
                {galleryImages[selectedImage].category}
              </span>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-normal">
                {galleryImages[selectedImage].alt}
              </h3>
            </div>

            {/* Navigation arrows */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
              }}
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((selectedImage + 1) % galleryImages.length);
              }}
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
