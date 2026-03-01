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
  },
  {
    duration: "2 hours",
    details: "2 x 45 minutes",
    price: "£300",
  },
  {
    duration: "3 hours",
    details: "3 x 40 minutes",
    price: "£400",
  },
  {
    duration: "4 hours",
    details: "3 x 60 minutes",
    price: "£500",
  },
];

export function Events() {
  return (
    <section id="events" className="py-24 md:py-32 bg-neutral-50">
      <div className="section-padding">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium mb-4">
              Events & Booking
            </h2>
            <p className="font-[family-name:var(--font-cormorant)] text-xl text-neutral-600 max-w-2xl">
              Available for weddings, corporate events, and private performances across London and the UK.
            </p>
          </div>
          <Link
            href="#contact"
            className="text-neutral-900 font-[family-name:var(--font-cormorant)] text-lg font-medium hover:text-neutral-600 transition-colors flex items-center gap-2"
          >
            View All Events
            <span>→</span>
          </Link>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-medium mb-8">
            Upcoming Events
          </h3>
          <div className="space-y-4">
            {events.map((event) => (
              <Link
                key={event.id}
                href={event.link}
                className="group block bg-white border border-neutral-200 p-6 md:p-8 hover:border-neutral-400 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-[family-name:var(--font-cormorant)] text-lg text-neutral-500 mb-2">
                      {event.date}
                    </p>
                    <h4 className="font-[family-name:var(--font-playfair)] text-2xl font-medium group-hover:text-neutral-600 transition-colors">
                      {event.title}
                    </h4>
                    <p className="font-[family-name:var(--font-cormorant)] text-lg text-neutral-600 mt-1">
                      {event.venue}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-4 py-2 text-sm font-medium ${
                      event.available 
                        ? "bg-green-100 text-green-800" 
                        : "bg-neutral-100 text-neutral-500"
                    }`}>
                      {event.available ? "Available" : "Booked"}
                    </span>
                    <span className="text-neutral-400 group-hover:text-neutral-600 transition-colors">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pricing Packages */}
        <div>
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-medium mb-8">
            Performance Packages
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-200 p-8 hover:border-neutral-400 hover:shadow-lg transition-all duration-300 text-center"
              >
                <h4 className="font-[family-name:var(--font-playfair)] text-2xl font-medium mb-2">
                  {pkg.duration}
                </h4>
                <p className="font-[family-name:var(--font-cormorant)] text-neutral-500 mb-6">
                  {pkg.details}
                </p>
                <p className="font-[family-name:var(--font-playfair)] text-4xl font-medium text-neutral-900">
                  {pkg.price}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-neutral-100 rounded-lg">
            <p className="font-[family-name:var(--font-cormorant)] text-neutral-700">
              <strong>London Zones 1-4</strong> included in price. Travel fee: 40p per mile from ME25. 
              Bookings 200+ miles from ME16 incur a £200 overnight/travel time fee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
