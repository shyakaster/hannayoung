import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Events } from "./components/Events";
import { News } from "./components/News";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Events />
      <News />
      <Gallery />
      <Contact />
    </main>
  );
}
