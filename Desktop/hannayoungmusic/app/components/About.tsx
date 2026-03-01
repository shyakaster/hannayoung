"use client";

import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-32 md:py-40 bg-[#faf9f7] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#f5f0e8] to-transparent opacity-50" />
      <div className="absolute bottom-20 left-12 w-px h-40 bg-gradient-to-b from-[#8b7355]/30 to-transparent hidden lg:block" />
      
      <div className="section-padding relative z-10">
        {/* Section header with decorative line */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="decorative-line" />
            <span className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.4em] uppercase text-[#8b7355]">
              About
            </span>
          </div>
        </div>

        {/* Asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left: Image with overlapping elements */}
          <div className="lg:col-span-5 lg:col-start-1 relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=1000&fit=crop"
                  alt="Hanna Young - Classical Saxophonist"
                  fill
                  className="object-cover image-hover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              
              {/* Overlapping text block */}
              <div className="absolute -bottom-8 -right-8 lg:-right-16 bg-white p-8 shadow-xl max-w-xs">
                <p className="font-[family-name:var(--font-cormorant)] text-lg italic text-[#78716c] leading-relaxed">
                  &ldquo;Every performance is an opportunity to create something truly magical.&rdquo;
                </p>
                <div className="mt-4 w-8 h-px bg-[#8b7355]" />
              </div>

              {/* Accent square */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-[#8b7355]/30 hidden lg:block" />
            </div>
          </div>

          {/* Right: Content with generous spacing */}
          <div className="lg:col-span-6 lg:col-start-7 pt-16 lg:pt-24">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight">
              Hanna<br />
              <span className="italic font-light text-[#8b7355]">Elizabeth</span> Young
            </h2>

            <div className="space-y-6 font-[family-name:var(--font-cormorant)] text-lg md:text-xl leading-[1.8] text-[#44403c]">
              <p className="first-letter:text-5xl first-letter:font-[family-name:var(--font-playfair)] first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#1c1917]">
                A distinguished classical saxophonist based in London, 
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
              <p className="text-[#78716c]">
                Whether performing solo repertoire or collaborating with other musicians, 
                Hanna delivers memorable musical experiences tailored to each occasion.
              </p>
            </div>

            {/* Signature-style link */}
            <div className="mt-12 pt-8 border-t border-[#e8e4dc]">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-4 font-[family-name:var(--font-cormorant)] text-lg font-medium text-[#1c1917] hover:text-[#8b7355] transition-colors duration-300"
              >
                <span className="link-underline">Begin Your Journey</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Stats or highlights */}
            <div className="mt-16 grid grid-cols-3 gap-8 pt-8 border-t border-[#e8e4dc]">
              <div>
                <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-normal text-[#8b7355]">10+</p>
                <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-widest uppercase text-[#78716c] mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-normal text-[#8b7355]">500+</p>
                <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-widest uppercase text-[#78716c] mt-1">Performances</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-normal text-[#8b7355]">50+</p>
                <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-widest uppercase text-[#78716c] mt-1">Venues</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
