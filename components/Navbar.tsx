import { Menu } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/images/perumnet-logo.png"
              alt="PerumNet"
              className="h-12 w-auto"
            />

            <span className="text-xl font-bold text-slate-900">
              Perum<span className="text-[#00a79d]">Net</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-medium text-[#556679] transition-colors hover:text-[#00a79d]"
              >
                {item.label}
              </a>
            ))}

            <a
              href={`https://wa.me/62${siteConfig.phone.slice(1)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#00a79d] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#008d84]"
            >
              Hubungi Kami
            </a>
          </div>

          <button className="p-2 md:hidden">
            <Menu className="h-6 w-6 text-[#556679]" />
          </button>
        </div>
      </nav>
    </header>
  );
}
