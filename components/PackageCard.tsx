import { Check, Crown, Globe, Star, Zap } from "lucide-react";
import { siteConfig } from "@/data/site";

type PackageCardProps = {
  name: string;
  speed: string;
  price: string;
  features: string[];
  popular?: boolean;
  note?: string;
  index: number;
};

const icons = [Zap, Star, Crown, Globe, Globe];

export function PackageCard({
  name,
  speed,
  price,
  features,
  popular,
  note,
  index,
}: PackageCardProps) {
  const Icon = icons[index] || Zap;

  const whatsappText = encodeURIComponent(
    `Halo PerumNet, saya tertarik dengan paket ${name} ${speed} seharga ${price}/bulan.`
  );

  return (
    <div
      className={`relative flex flex-col rounded-3xl bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        popular
          ? "border-2 border-[#00a79d] shadow-2xl"
          : "border border-[#00a79d]/10 shadow-sm"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 w-full -translate-x-1/2 text-center">
          <span className="whitespace-nowrap rounded-full bg-[#00a79d] px-6 py-2 text-sm font-semibold text-white shadow-lg">
            ⭐ Paling Populer
          </span>
        </div>
      )}

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00a79d]">
        <Icon className="h-7 w-7 text-white" />
      </div>

      <h3 className="mb-2 text-xl font-bold text-slate-900">{name}</h3>

      <div className="mb-1">
        <span className="text-sm text-[#556679]">Up To </span>
        <span className="text-3xl font-bold text-slate-900">{speed}</span>
      </div>

      <p className="mb-4 text-sm text-[#556679]">Kecepatan Internet</p>

      <div className="mb-6">
        <span className="text-2xl font-bold text-slate-900">{price}</span>
        <span className="text-sm text-[#556679]">/bulan</span>
      </div>

      <a
        href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappText}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`mb-6 flex h-11 w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition ${
          popular
            ? "bg-[#00a79d] text-white hover:bg-[#008f86]"
            : "bg-[#00a79d]/10 text-[#00a79d] hover:bg-[#00a79d] hover:text-white"
        }`}
      >
        Berlangganan Sekarang
      </a>

      <div className="flex-grow space-y-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <div className="mt-0.5 flex-shrink-0 rounded-full bg-[#00a79d] p-1">
              <Check className="h-3 w-3 text-white" />
            </div>

            <span className="text-sm leading-6 text-[#556679]">{feature}</span>
          </div>
        ))}
      </div>

      {note && (
        <div className="mt-4 border-t border-slate-100 pt-4">
          <p className="text-xs italic text-[#556679]">*{note}</p>
        </div>
      )}
    </div>
  );
}
