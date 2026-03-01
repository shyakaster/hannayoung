"use client";

import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! Hanna will get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-neutral-50">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium mb-4">
              Contact
            </h2>
            <p className="font-[family-name:var(--font-cormorant)] text-xl text-neutral-600">
              Get in touch to discuss your event and booking requirements
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block font-[family-name:var(--font-cormorant)] text-lg font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 font-[family-name:var(--font-cormorant)] text-lg focus:outline-none focus:border-neutral-900 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-[family-name:var(--font-cormorant)] text-lg font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 font-[family-name:var(--font-cormorant)] text-lg focus:outline-none focus:border-neutral-900 transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="eventType" className="block font-[family-name:var(--font-cormorant)] text-lg font-medium mb-2">
                  Event Type
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 font-[family-name:var(--font-cormorant)] text-lg focus:outline-none focus:border-neutral-900 transition-colors bg-white"
                >
                  <option value="">Select an option</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="private">Private Party</option>
                  <option value="concert">Concert</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block font-[family-name:var(--font-cormorant)] text-lg font-medium mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 font-[family-name:var(--font-cormorant)] text-lg focus:outline-none focus:border-neutral-900 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block font-[family-name:var(--font-cormorant)] text-lg font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="w-full px-4 py-3 border border-neutral-300 font-[family-name:var(--font-cormorant)] text-lg focus:outline-none focus:border-neutral-900 transition-colors resize-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-12 py-4 bg-neutral-900 text-white font-[family-name:var(--font-cormorant)] text-lg font-medium hover:bg-neutral-700 transition-colors"
              >
                Send Inquiry
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-16 pt-16 border-t border-neutral-200 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-medium mb-2">Email</h3>
              <p className="font-[family-name:var(--font-cormorant)] text-lg text-neutral-600">
                hello@hannayoungmusic.com
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-medium mb-2">Location</h3>
              <p className="font-[family-name:var(--font-cormorant)] text-lg text-neutral-600">
                London, UK
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-medium mb-2">Response Time</h3>
              <p className="font-[family-name:var(--font-cormorant)] text-lg text-neutral-600">
                Within 48 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
