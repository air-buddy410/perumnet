import { SectionHeader } from "@/components/SectionHeader";
import { PackageCard } from "@/components/PackageCard";
import { packages } from "@/data/site";

export function PackagesSection() {
  return (
    <section id="packages" className="bg-white px-4 py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Paket Internet"
          title="Pilih Paket Sesuai Kebutuhan"
          description="Maharani Internet menawarkan berbagai pilihan paket internet dengan harga kompetitif dan kualitas terjamin"
        />

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
          <p className="mb-4 text-slate-600">
            Tidak menemukan paket yang sesuai? Hubungi kami untuk paket custom!
          </p>

          <a
            href="#contact"
            className="font-semibold text-green-600 underline hover:text-green-700"
          >
            Diskusi Paket Custom →
          </a>
        </div>
      </div>
    </section>
  );
}
