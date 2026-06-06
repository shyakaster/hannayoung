import type { Metadata } from "next";
import { Instrument_Serif, Archivo } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { FloatingBook } from "./components/FloatingBook";

const display = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hanna Elizabeth Young | London Vocalist — Weddings & Events",
  description:
    "London-based vocalist for weddings, private events and venues. Jazz, soul, folk, blues and classical crossover. Trained in New York. Available worldwide — book via WhatsApp.",
  openGraph: {
    title: "Hanna Elizabeth Young | London Vocalist",
    description:
      "Elegant, soulful live vocals for weddings, private events and venues. Available worldwide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <FloatingBook />
      </body>
    </html>
  );
}
