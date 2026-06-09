import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { PackagesSection } from "@/sections/PackagesSection";
import { ContactSection } from "@/sections/ContactSection";
import { PartnersSection } from "@/sections/PartnerSection";
import { FaqSection } from "@/sections/FaqSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="">
        <HeroSection />
        <PackagesSection />
        <PartnersSection />
        <ServicesSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
