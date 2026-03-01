"use client";

import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    date: "February 20, 2026",
    category: "Weddings",
    title: "Spring Wedding Season Launch",
    excerpt: "Hanna announces her spring wedding season availability, featuring an expanded repertoire perfect for outdoor ceremonies and elegant receptions...",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    link: "#",
    featured: true,
  },
  {
    id: 2,
    date: "January 15, 2026",
    category: "Recording",
    title: "New Recording Released",
    excerpt: "Hanna's latest recording featuring contemporary saxophone works is now available on all major streaming platforms...",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
    link: "#",
    featured: false,
  },
  {
    id: 3,
    date: "December 10, 2025",
    category: "Performance",
    title: "Holiday Performances at The Shard",
    excerpt: "Hanna performed a series of festive concerts at The Shard's private dining venues...",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
    link: "#",
    featured: false,
  },
];

export function News() {
  const featuredPost = newsItems.find(item => item.featured);
  const otherPosts = newsItems.filter(item => !item.featured);

  return (
    <section id="news" className="py-32 md:py-40 bg-[#faf9f7] relative">
      {/* Background gradient */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#f5f0e8] to-transparent opacity-50" />
      
      <div className="section-padding relative z-10">
        {/* Section header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="decorative-line" />
            <span className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.4em] uppercase text-[#8b7355]">
              Latest News
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-normal mb-4">
                Journal & <span className="italic font-light text-[#8b7355]">Updates</span>
              </h2>
              <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#78716c] max-w-xl">
                Stories from performances, new releases, and behind-the-scenes moments.
              </p>
            </div>
            <Link
              href="#"
              className="group inline-flex items-center gap-3 font-[family-name:var(--font-cormorant)] text-lg font-medium text-[#1c1917] hover:text-[#8b7355] transition-colors"
            >
              <span className="link-underline">View All Articles</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Magazine-style asymmetric grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Featured post - large */}
          {featuredPost && (
            <article className="lg:col-span-7 group">
              <Link href={featuredPost.link} className="block">
                <div className="relative aspect-[16/10] overflow-hidden mb-8">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover image-hover-zoom"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="font-[family-name:var(--font-cormorant)] tracking-widest uppercase text-[#8b7355]">
                      {featuredPost.category}
                    </span>
                    <span className="w-8 h-px bg-[#d6d3d1]" />
                    <span className="font-[family-name:var(--font-cormorant)] text-[#78716c]">
                      {featuredPost.date}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-normal group-hover:text-[#8b7355] transition-colors leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#78716c] leading-relaxed max-w-xl">
                    {featuredPost.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 font-[family-name:var(--font-cormorant)] text-sm tracking-widest uppercase text-[#1c1917] group-hover:text-[#8b7355] transition-colors pt-2">
                    Read Article
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </article>
          )}

          {/* Side posts - smaller */}
          <div className="lg:col-span-5 space-y-8 lg:space-y-12 lg:pt-24">
            {otherPosts.map((item) => (
              <article key={item.id} className="group">
                <Link href={item.link} className="block">
                  <div className="grid sm:grid-cols-5 gap-6 items-start">
                    {/* Image */}
                    <div className="sm:col-span-2 relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover image-hover"
                        sizes="(max-width: 640px) 100vw, 20vw"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="sm:col-span-3 space-y-3">
                      <div className="flex items-center gap-3 text-xs">
                        <span className="font-[family-name:var(--font-cormorant)] tracking-widest uppercase text-[#8b7355]">
                          {item.category}
                        </span>
                        <span className="text-[#d6d3d1]">·</span>
                        <span className="font-[family-name:var(--font-cormorant)] text-[#78716c]">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-normal group-hover:text-[#8b7355] transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="font-[family-name:var(--font-cormorant)] text-base text-[#78716c] leading-relaxed line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 flex items-center justify-center gap-4">
          <div className="w-24 h-px bg-[#e8e4dc]" />
          <div className="w-2 h-2 rounded-full bg-[#8b7355]" />
          <div className="w-24 h-px bg-[#e8e4dc]" />
        </div>
      </div>
    </section>
  );
}
