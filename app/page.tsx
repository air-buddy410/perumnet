import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { PackagesSection } from "@/sections/PackagesSection";
import { ContactSection } from "@/sections/ContactSection";
import { PartnersSection } from "@/sections/PartnerSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PartnersSection />
        <PackagesSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
