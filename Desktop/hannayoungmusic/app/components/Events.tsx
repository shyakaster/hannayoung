"use client";

import Link from "next/link";

const events = [
  {
    id: 1,
    date: "March 15, 2026",
    title: "Spring Wedding Showcase",
    venue: "The Ritz London",
    link: "#contact",
    available: true,
  },
  {
    id: 2,
    date: "April 22, 2026",
    title: "Corporate Gala Dinner",
    venue: "Grosvenor House",
    link: "#contact",
    available: true,
  },
  {
    id: 3,
    date: "May 8, 2026",
    title: "Classical Evening Concert",
    venue: "St. Martin-in-the-Fields",
    link: "#contact",
    available: false,
  },
];

const pricingPackages = [
  {
    duration: "1 hour",
    details: "1 x 60 minutes",
    price: "£250",
    popular: false,
  },
  {
    duration: "2 hours",
    details: "2 x 45 minutes",
    price: "£300",
    popular: true,
  },
  {
    duration: "3 hours",
    details: "3 x 40 minutes",
    price: "£400",
    popular: false,
  },
  {
    duration: "4 hours",
    details: "3 x 60 minutes",
    price: "£500",
    popular: false,
  },
];

export function Events() {
  return (
    <section id="events" className="py-32 md:py-40 bg-white relative">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#faf9f7] to-transparent" />
      
      <div className="section-padding relative z-10">
        {/* Section header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="decorative-line" />
            <span className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.4em] uppercase text-[#8b7355]">
              Events & Booking
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
                Upcoming <span className="italic font-light text-[#8b7355]">Events</span>
              </h2>
              <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#78716c] leading-relaxed">
                Available for weddings, corporate events, and private performances across London and the UK.
              </p>
            </div>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 font-[family-name:var(--font-cormorant)] text-lg font-medium text-[#1c1917] hover:text-[#8b7355] transition-colors whitespace-nowrap"
            >
              <span className="link-underline">View All Events</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Timeline-style Events */}
        <div className="mb-32">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-[#e8e4dc] hidden lg:block" />
            
            <div className="space-y-0">
              {events.map((event, index) => (
                <Link
                  key={event.id}
                  href={event.link}
                  className="group block relative"
                >
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 py-12 ${
                    index !== events.length - 1 ? "border-b border-[#e8e4dc]" : ""
                  }`}>
                    {/* Date column */}
                    <div className={`lg:text-right ${index % 2 === 0 ? "lg:pr-16" : "lg:order-2 lg:pl-16 lg:text-left"}`}>
                      <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-widest uppercase text-[#8b7355] mb-2">
                        {event.date}
                      </p>
                      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                          event.available 
                            ? "border-[#8b7355] bg-[#faf9f7] group-hover:bg-[#8b7355]" 
                            : "border-[#d6d3d1] bg-[#f5f0e8]"
                        }`} />
                      </div>
                    </div>

                    {/* Content column */}
                    <div className={index % 2 === 0 ? "lg:pl-16" : "lg:order-1 lg:pr-16 lg:text-right"}>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-normal mb-2 group-hover:text-[#8b7355] transition-colors">
                            {event.title}
                          </h3>
                          <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#78716c]">
                            {event.venue}
                          </p>
                        </div>
                        <span className={`shrink-0 px-4 py-2 text-xs font-medium tracking-widest uppercase ${
                          event.available 
                            ? "bg-[#f5f0e8] text-[#8b7355]" 
                            : "bg-[#faf9f7] text-[#a8a29e]"
                        }`}>
                          {event.available ? "Available" : "Booked"}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-[#faf9f7] p-8 md:p-16 relative overflow-hidden">
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f5f0e8] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="decorative-line" />
                <span className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.4em] uppercase text-[#8b7355]">
                  Performance Packages
                </span>
                <div className="decorative-line" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-normal">
                Investment <span className="italic font-light text-[#8b7355]">Guide</span>
              </h3>
            </div>

            {/* Pricing Cards - Elegant horizontal layout */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
              {pricingPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`group relative p-8 transition-all duration-500 ${
                    pkg.popular 
                      ? "bg-white shadow-xl lg:-mt-4 lg:mb-4" 
                      : "bg-transparent hover:bg-white hover:shadow-lg"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-[#8b7355] text-white text-xs tracking-widest uppercase px-4 py-1">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-widest uppercase text-[#78716c] mb-2">
                      {pkg.duration}
                    </p>
                    <p className="font-[family-name:var(--font-cormorant)] text-sm text-[#a8a29e] mb-6">
                      {pkg.details}
                    </p>
                    <p className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-normal text-[#1c1917]">
                      {pkg.price}
                    </p>
                    
                    <div className="mt-6 pt-6 border-t border-[#e8e4dc]">
                      <Link
                        href="#contact"
                        className="inline-block font-[family-name:var(--font-cormorant)] text-sm tracking-widest uppercase text-[#8b7355] hover:text-[#1c1917] transition-colors"
                      >
                        Enquire →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional info */}
            <div className="mt-12 pt-8 border-t border-[#e8e4dc] text-center">
              <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#78716c] max-w-3xl mx-auto">
                <span className="text-[#1c1917] font-medium">London Zones 1-4</span> included in price. 
                Travel fee: 40p per mile from ME25. Bookings 200+ miles from ME16 incur a £200 overnight/travel time fee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
