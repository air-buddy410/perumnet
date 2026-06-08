import { Building2, Camera, Headphones, Home, Wifi, Zap } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/site";

const serviceIcons = [Home, Building2, Wifi, Camera, Zap, Headphones];

export function ServicesSection() {
  return (
    <section id="services" className="bg-slate-50 px-4 py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Layanan Kami"
          title="Solusi Internet Lengkap"
          description="Maharani Internet menyediakan berbagai layanan internet dan jaringan untuk memenuhi kebutuhan personal maupun bisnis Anda"
          variant="orange"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={serviceIcons[index]}
              variant={index % 2 === 0 ? "green" : "orange"}
            />
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 p-8 text-center text-white md:p-12">
          <h3 className="mb-4 text-3xl font-bold">Butuh Konsultasi?</h3>

          <p className="mb-6 text-lg opacity-90">
            Tim Maharani Internet siap membantu menemukan solusi internet
            terbaik untuk kebutuhan Anda
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-green-600 transition hover:bg-slate-100"
          >
            <Headphones className="h-5 w-5" />
            Hubungi Kami Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
