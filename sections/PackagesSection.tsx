import { SectionHeader } from "@/components/SectionHeader";
import { PackageCard } from "@/components/PackageCard";
import { Reveal } from "@/components/Reveal";
import { packages } from "@/data/site";

export function PackagesSection() {
  return (
    <Reveal>
      <section
        id="packages"
        className="scroll-mt-24 bg-white px-5 py-16 md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Paket Internet"
            title="Pilih Paket Sesuai Kebutuhan"
            description="PerumNet menyediakan berbagai pilihan paket internet fiber optic yang cepat, stabil, dan terjangkau untuk rumah maupun bisnis."
          />

          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {packages.map((item, index) => (
              <PackageCard
                key={item.name}
                name={item.name}
                speed={item.speed}
                price={item.price}
                features={item.features}
                popular={item.popular}
                note={item.note}
                index={index}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="mb-4 text-[#556679]">
              Tidak menemukan paket yang sesuai? Kami siap membantu memilih
              paket terbaik sesuai kebutuhan Anda.
            </p>

            <a
              href="#contact"
              className="font-semibold text-[#00a79d] underline transition hover:opacity-80"
            >
              Diskusi Paket Custom →
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
