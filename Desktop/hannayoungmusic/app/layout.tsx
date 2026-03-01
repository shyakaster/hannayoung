import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Hanna Young | Classical Saxophonist",
  description: "Hanna Elizabeth Young - Professional classical saxophonist based in London, available for weddings, events, and performances.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${cormorant.variable} antialiased bg-white text-neutral-900`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
