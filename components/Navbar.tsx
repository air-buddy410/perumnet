"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3" onClick={closeMenu}>
            <img
              src="/images/perumnet-logo.png"
              alt="PerumNet"
              className="h-12 w-auto"
            />

            <span className="text-xl font-bold text-slate-900">
              Perum<span className="text-[#00a79d]">Net</span>
            </span>
          </a>

          {/* Desktop menu */}
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
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#00a79d] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#008d84]"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="p-2 md:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#556679]" />
            ) : (
              <Menu className="h-6 w-6 text-[#556679]" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 border-t border-slate-200 pt-4 md:hidden">
            <div className="flex flex-col items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="w-full rounded-md px-3 py-3 text-center font-medium text-[#556679] transition-colors hover:bg-slate-50 hover:text-[#00a79d]"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-2 w-full rounded-md bg-[#00a79d] px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-[#008d84]"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
