type SectionHeaderProps = {
  badge: string;
  title: string;
  description: string;
};

export function SectionHeader({
  badge,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 text-center md:mb-16">
      <span className="inline-flex items-center rounded-full bg-[#00a79d]/10 px-4 py-2 text-sm font-semibold text-[#00a79d]">
        {badge}
      </span>

      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#00a79d]" />

      <h2 className="mt-6 mb-4 text-3xl font-bold text-slate-900 md:text-5xl">
        {title}
      </h2>

      <p className="mx-auto max-w-3xl text-base leading-8 text-[#556679] md:text-lg">
        {description}
      </p>
    </div>
  );
}
