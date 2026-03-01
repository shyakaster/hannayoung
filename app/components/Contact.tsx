"use client";

import { useState } from "react";
import Image from "next/image";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    date: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      console.log("Form submitted:", formData);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <section id="contact" className="py-32 md:py-40 bg-[#faf9f7]">
        <div className="section-padding max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-[#8b7355]/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-[#8b7355]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-normal mb-6">
            Thank You
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#78716c] mb-8">
            Your inquiry has been received. Hanna will be in touch within 48 hours to discuss your event.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="font-[family-name:var(--font-cormorant)] text-lg text-[#8b7355] hover:text-[#1c1917] transition-colors link-underline"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative">
      {/* Split layout container */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left side - Image and contact info */}
        <div className="relative bg-[#1c1917] text-white hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=1200&h=1600&fit=crop"
            alt="Contact Hanna Young"
            fill
            className="object-cover opacity-60"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-[#1c1917]/50 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-end p-16">
            <div className="mb-8">
              <div className="w-16 h-px bg-[#8b7355] mb-6" />
              <h2 className="font-[family-name:var(--font-playfair)] text-5xl font-normal mb-4">
                Let&apos;s Create<br />
                <span className="italic font-light text-[#e8e4dc]">Something Beautiful</span>
              </h2>
              <p className="font-[family-name:var(--font-cormorant)] text-xl text-white/70 leading-relaxed max-w-md">
                Whether you&apos;re planning an intimate ceremony or a grand celebration, 
                I&apos;d love to be part of your special day.
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-cormorant)] text-xs tracking-widest uppercase text-white/50">Email</p>
                  <p className="font-[family-name:var(--font-cormorant)] text-lg">hello@hannayoungmusic.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-cormorant)] text-xs tracking-widest uppercase text-white/50">Location</p>
                  <p className="font-[family-name:var(--font-cormorant)] text-lg">London, UK</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-cormorant)] text-xs tracking-widest uppercase text-white/50">Response Time</p>
                  <p className="font-[family-name:var(--font-cormorant)] text-lg">Within 48 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="bg-[#faf9f7] py-16 lg:py-24 px-6 lg:px-16 overflow-y-auto">
          <div className="max-w-xl mx-auto lg:mx-0">
            {/* Mobile header */}
            <div className="lg:hidden mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="decorative-line" />
                <span className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.4em] uppercase text-[#8b7355]">
                  Contact
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-normal mb-4">
                Get in <span className="italic font-light text-[#8b7355]">Touch</span>
              </h2>
              <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#78716c]">
                Fill out the form below and I&apos;ll get back to you within 48 hours.
              </p>
            </div>

            {/* Desktop mini header */}
            <div className="hidden lg:block mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="decorative-line" />
                <span className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.4em] uppercase text-[#8b7355]">
                  Enquiry Form
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="group">
                  <label htmlFor="name" className="block font-[family-name:var(--font-cormorant)] text-sm tracking-widest uppercase text-[#78716c] mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#d6d3d1] font-[family-name:var(--font-cormorant)] text-xl text-[#1c1917] placeholder:text-[#a8a29e] focus:outline-none focus:border-[#8b7355] transition-colors"
                    placeholder="John & Sarah"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block font-[family-name:var(--font-cormorant)] text-sm tracking-widest uppercase text-[#78716c] mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#d6d3d1] font-[family-name:var(--font-cormorant)] text-xl text-[#1c1917] placeholder:text-[#a8a29e] focus:outline-none focus:border-[#8b7355] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="group">
                  <label htmlFor="eventType" className="block font-[family-name:var(--font-cormorant)] text-sm tracking-widest uppercase text-[#78716c] mb-3">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#d6d3d1] font-[family-name:var(--font-cormorant)] text-xl text-[#1c1917] focus:outline-none focus:border-[#8b7355] transition-colors cursor-pointer appearance-none"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="private">Private Party</option>
                    <option value="concert">Concert</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="group">
                  <label htmlFor="date" className="block font-[family-name:var(--font-cormorant)] text-sm tracking-widest uppercase text-[#78716c] mb-3">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#d6d3d1] font-[family-name:var(--font-cormorant)] text-xl text-[#1c1917] focus:outline-none focus:border-[#8b7355] transition-colors"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className="block font-[family-name:var(--font-cormorant)] text-sm tracking-widest uppercase text-[#78716c] mb-3">
                  Tell Me About Your Event
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#d6d3d1] font-[family-name:var(--font-cormorant)] text-xl text-[#1c1917] placeholder:text-[#a8a29e] focus:outline-none focus:border-[#8b7355] transition-colors resize-none"
                  placeholder="Share details about your vision, venue, and any special requests..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full sm:w-auto px-12 py-5 bg-[#1c1917] text-white font-[family-name:var(--font-cormorant)] text-lg font-medium tracking-widest uppercase overflow-hidden transition-all duration-500 hover:bg-[#8b7355] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
