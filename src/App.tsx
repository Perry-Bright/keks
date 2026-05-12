import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Founder } from "./components/Founder";
import { MenuSection } from "./components/MenuSection";
import { Gallery } from "./components/Gallery";
import { Community } from "./components/Community";
import { Locations } from "./components/Locations";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-stone-50 text-stone-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <MenuSection />
      <Gallery />
      <Community />
      <Founder />
      <Locations />
      <Footer />
    </div>
  );
}
