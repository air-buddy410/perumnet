type SectionHeaderProps = {
  badge: string;
  title: string;
  description: string;
  variant?: "green" | "orange";
};

export function SectionHeader({
  badge,
  title,
  description,
  variant = "green",
}: SectionHeaderProps) {
  const badgeClass =
    variant === "orange"
      ? "from-orange-500 to-orange-600"
      : "from-green-500 to-emerald-600";

  return (
    <div className="mb-16 text-center">
      <span
        className={`mb-4 inline-block rounded-full bg-gradient-to-r ${badgeClass} px-4 py-2 text-sm font-medium text-white`}
      >
        {badge}
      </span>

      <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
        {title}
      </h2>

      <p className="mx-auto max-w-2xl text-lg text-slate-600">{description}</p>
    </div>
  );
}
