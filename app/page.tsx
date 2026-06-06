import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Marquee } from "./components/Marquee";
import { Packages } from "./components/Packages";
import { Reviews } from "./components/Reviews";
import { News } from "./components/News";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Marquee />
      <Packages />
      <Reviews />
      <News />
      <Gallery />
      <Contact />
    </main>
  );
}
