"use client";

import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    date: "February 20, 2026",
    title: "Spring Wedding Season Launch",
    excerpt: "Hanna announces her spring wedding season availability, featuring an expanded repertoire perfect for outdoor ceremonies and elegant receptions...",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    id: 2,
    date: "January 15, 2026",
    title: "New Recording Released",
    excerpt: "Hanna's latest recording featuring contemporary saxophone works is now available on all major streaming platforms...",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    id: 3,
    date: "December 10, 2025",
    title: "Holiday Performances at The Shard",
    excerpt: "Hanna performed a series of festive concerts at The Shard's private dining venues, bringing classical saxophone to new audiences...",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
    link: "#",
  },
];

export function News() {
  return (
    <section id="news" className="py-24 md:py-32 bg-white">
      <div className="section-padding">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium">
            News
          </h2>
          <Link
            href="#"
            className="text-neutral-900 font-[family-name:var(--font-cormorant)] text-lg font-medium hover:text-neutral-600 transition-colors flex items-center gap-2"
          >
            View All News
            <span>→</span>
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="group cursor-pointer"
            >
              <Link href={item.link} className="block">
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover image-hover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="space-y-3">
                  <p className="font-[family-name:var(--font-cormorant)] text-neutral-500 text-lg">
                    {item.date}
                  </p>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium group-hover:text-neutral-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-cormorant)] text-lg text-neutral-600 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <span className="inline-block text-neutral-900 font-[family-name:var(--font-cormorant)] font-medium group-hover:translate-x-2 transition-transform">
                    Read More →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
