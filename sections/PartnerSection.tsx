import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";

const partners = [
  "Partner 1",
  "Partner 2",
  "Partner 3",
  "Partner 4",
  "Partner 5",
  "Partner 6",
];

export function PartnersSection() {
  const repeatedPartners = [...partners, ...partners];

  return (
    <Reveal>
      <section className="bg-white px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Our Partner"
            title="Partner yang Bekerja Sama dengan PerumNet"
            description="Kami bekerja sama dengan berbagai partner untuk menghadirkan layanan internet yang lebih stabil dan terpercaya."
          />

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

            <div className="flex w-max animate-partner-scroll gap-6">
              {repeatedPartners.map((partner, index) => (
                <div
                  key={`${partner}-${index}`}
                  className="flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl border border-[#00a79d]/10 bg-slate-50 px-6 shadow-sm"
                >
                  <span className="text-lg font-bold text-[#556679]">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
