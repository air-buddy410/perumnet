import {
  Building2,
  Camera,
  Headphones,
  Home,
  Network,
  Zap,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { services, siteConfig } from "@/data/site";

const serviceIcons = [Home, Building2, Zap, Network, Camera, Headphones];

export function ServicesSection() {
  return (
    <Reveal>
      <section
        id="services"
        className="scroll-mt-24 bg-slate-50 px-5 py-16 md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Layanan Kami"
            title="Solusi Internet dan Jaringan"
            description="PerumNet menyediakan berbagai layanan internet, jaringan, dan teknologi untuk kebutuhan rumah maupun bisnis."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={serviceIcons[index]}
              />
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-[#00a79d] p-8 text-center text-white md:p-12">
            <h3 className="mb-4 text-3xl font-bold">
              Butuh Pemasangan atau Survey Lokasi?
            </h3>

            <p className="mx-auto mb-6 max-w-2xl text-lg text-white/90">
              Hubungi tim PerumNet sekarang untuk konsultasi, survey lokasi,
              maupun pemasangan internet baru.
            </p>

            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 font-semibold text-[#00a79d] transition hover:bg-slate-100"
            >
              <Headphones className="h-5 w-5" />
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
