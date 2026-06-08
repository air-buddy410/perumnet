import { Menu } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-lg font-bold text-white">
              M
            </div>

            <span className="text-xl font-bold text-slate-900">
              Maharani<span className="text-orange-500">Internet</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-medium text-slate-700 transition-colors hover:text-orange-500"
              >
                {item.label}
              </a>
            ))}

            <a
              href={`https://wa.me/62${siteConfig.phone.slice(1)}`}
              className="rounded-md bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:from-green-600 hover:to-emerald-700"
            >
              Hubungi Kami
            </a>
          </div>

          <button className="p-2 md:hidden">
            <Menu className="h-6 w-6 text-slate-900" />
          </button>
        </div>
      </nav>
    </header>
  );
}
