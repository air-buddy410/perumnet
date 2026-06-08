import { Check, Crown, Globe, Star, Zap } from "lucide-react";

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

const gradients = [
  "from-green-500 to-emerald-600",
  "from-orange-500 to-orange-600",
  "from-green-600 to-emerald-700",
  "from-purple-500 to-indigo-600",
  "from-red-500 to-pink-600",
];

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
  const gradient = gradients[index] || gradients[0];

  return (
    <div
      className={`relative flex flex-col rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl ${
        popular
          ? "border-2 border-orange-500 shadow-2xl"
          : "border-2 border-slate-200"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 w-full -translate-x-1/2 text-center">
          <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2 text-sm font-semibold text-white shadow-lg">
            ⭐ Paling Populer
          </span>
        </div>
      )}

      <div
        className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${gradient}`}
      >
        <Icon className="h-7 w-7 text-white" />
      </div>

      <h3 className="mb-2 text-xl font-bold text-slate-900">{name}</h3>

      <div className="mb-1">
        <span className="text-sm text-slate-500">Up To </span>
        <span className="text-3xl font-bold text-slate-900">{speed}</span>
      </div>

      <p className="mb-4 text-sm text-slate-500">Kecepatan Internet</p>

      <div className="mb-6">
        <span className="text-2xl font-bold text-slate-900">{price}</span>
        <span className="text-sm text-slate-600">/bulan</span>
      </div>

      <a
        href="#contact"
        className={`mb-6 flex h-10 w-full items-center justify-center rounded-md bg-gradient-to-r px-4 py-2 text-sm font-medium text-white transition ${
          popular
            ? "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
            : "from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
        }`}
      >
        Berlangganan Sekarang
      </a>

      <div className="flex-grow space-y-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <div
              className={`mt-0.5 flex-shrink-0 rounded-full bg-gradient-to-br ${gradient} p-1`}
            >
              <Check className="h-3 w-3 text-white" />
            </div>

            <span className="text-sm text-slate-700">{feature}</span>
          </div>
        ))}
      </div>

      {note && (
        <div className="mt-4 border-t border-slate-100 pt-4">
          <p className="text-xs italic text-slate-500">*{note}</p>
        </div>
      )}
    </div>
  );
}
