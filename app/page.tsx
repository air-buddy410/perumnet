import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { RoomsSection } from "@/sections/RoomsSection";
import { GallerySection } from "@/sections/GallerySection";
import { ContactSection } from "@/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
