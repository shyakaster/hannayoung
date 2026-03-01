"use client";

import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=1000&fit=crop",
    alt: "Performance at venue",
  },
  {
    src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop",
    alt: "Saxophone close-up",
  },
  {
    src: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&h=800&fit=crop",
    alt: "Classical performance",
  },
  {
    src: "https://images.unsplash.com/photo-1465847899078-b413929f7120?w=800&h=1000&fit=crop",
    alt: "Wedding performance",
  },
  {
    src: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=800&h=600&fit=crop",
    alt: "Studio recording",
  },
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop",
    alt: "Portrait",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-neutral-900 text-white">
      <div className="section-padding">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium mb-16 text-center">
          Gallery
        </h2>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group ${
                index % 3 === 0 ? "aspect-[3/4]" : index % 3 === 1 ? "aspect-[4/3]" : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover image-hover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
