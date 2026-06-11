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

          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {packages.map((item, index) => (
                <div
                  key={item.name}
                  className={index >= 3 ? "lg:col-span-1" : ""}
                >
                  <PackageCard
                    name={item.name}
                    speed={item.speed}
                    price={item.price}
                    features={item.features}
                    popular={item.popular}
                    note={item.note}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-4xl rounded-3xl bg-[#00a79d]/10 p-8 text-center md:p-10">
            <h3 className="mb-3 text-2xl font-bold text-slate-900">
              Belum Menemukan Paket yang Sesuai?
            </h3>

            <p className="mx-auto mb-6 max-w-2xl leading-7 text-[#556679]">
              Tim PerumNet siap membantu memilih paket internet terbaik sesuai
              kebutuhan rumah, bisnis, maupun area pemasangan Anda.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#00a79d] px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-[#008f86]"
            >
              Diskusi Paket Custom →
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
