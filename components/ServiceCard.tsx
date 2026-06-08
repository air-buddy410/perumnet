import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  variant?: "green" | "orange";
};

export function ServiceCard({
  title,
  description,
  icon: Icon,
  variant = "green",
}: ServiceCardProps) {
  const gradient =
    variant === "orange"
      ? "from-orange-500 to-orange-600"
      : "from-green-500 to-emerald-600";

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl">
      <div
        className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${gradient}`}
      >
        <Icon className="h-8 w-8 text-white" />
      </div>

      <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>

      <p className="leading-relaxed text-slate-600">{description}</p>

      <div className="mt-6 border-t border-slate-100 pt-6" />
    </div>
  );
}
