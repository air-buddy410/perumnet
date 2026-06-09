import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div className="group rounded-3xl border border-[#00a79d]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00a79d] transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-8 w-8 text-white" />
      </div>

      <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>

      <p className="leading-7 text-[#556679]">{description}</p>
    </div>
  );
}
