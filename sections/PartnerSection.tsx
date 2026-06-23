import Image from "next/image";

import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";

const partners = [
  {
    name: "ICON+",
    logo: "/images/partners/IconPlus.jpeg",
  },
  {
    name: "Akata Konstruksi",
    logo: "/images/partners/Akata 2.png",
  },
  {
    name: "Arbit",
    logo: "/images/partners/Arbit 2.png",
  },
  {
    name: "Quenzo",
    logo: "/images/partners/Quenzo Logo.PNG",
  },
  {
    name: "Paborito Coffee",
    logo: "/images/partners/Paborito.jpeg",
  },
  {
    name: "AlusNet",
    logo: "/images/partners/Alusnet.jpeg",
  },
  {
    name: "FiberStar",
    logo: "/images/partners/Fiberstar.jpeg",
  },
  {
    name: "Rossa Garden",
    logo: "/images/partners/RossaGarden.jpeg",
  },
];

export function PartnersSection() {
  const repeatedPartners = [...partners, ...partners];

  return (
    <Reveal>
      <section className="overflow-hidden bg-[#eafaf8] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Dipercaya Berbagai Bisnis"
            title="Partner & Klien PerumNet"
            description="PerumNet telah membantu berbagai perusahaan, hotel, restoran, dan bisnis lokal dengan layanan internet yang cepat, stabil, dan terpercaya."
          />

          <div className="relative mt-6 overflow-hidden py-10">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#eafaf8] to-transparent md:w-32" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#eafaf8] to-transparent md:w-32" />

            <div className="flex w-max animate-partner-scroll items-center gap-12 md:gap-16">
              {repeatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="
                  flex
                  h-32
                  w-56
                  shrink-0
                  items-center
                  justify-center
                  rounded-3xl
                  bg-white
                  p-6
                  shadow-lg
                  shadow-slate-200/80
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  md:h-36
                  md:w-64
                "
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={220}
                    height={120}
                    className="
    max-h-20
    max-w-[180px]
    object-contain
    md:max-h-24
    md:max-w-[220px]
  "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
