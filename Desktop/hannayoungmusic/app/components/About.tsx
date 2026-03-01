"use client";

import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=1000&fit=crop"
              alt="Hanna Young - Classical Saxophonist"
              fill
              className="object-cover image-hover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium">
              About
            </h2>
            <div className="space-y-6 font-[family-name:var(--font-cormorant)] text-xl leading-relaxed text-neutral-700">
              <p>
                Hanna Elizabeth Young is a distinguished classical saxophonist based in London, 
                known for her elegant performances and versatile repertoire. With a career 
                spanning prestigious venues and intimate gatherings alike, she brings a unique 
                blend of technical mastery and emotional depth to every performance.
              </p>
              <p>
                Specializing in classical and contemporary saxophone music, Hanna has performed 
                at renowned venues across the UK and Europe. Her performances have graced 
                weddings, corporate events, and concert halls, captivating audiences with her 
                expressive playing style.
              </p>
              <p>
                Whether performing solo repertoire or collaborating with other musicians, 
                Hanna delivers memorable musical experiences tailored to each occasion.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-block px-8 py-4 border-2 border-neutral-900 text-neutral-900 font-[family-name:var(--font-cormorant)] text-lg font-medium hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
