import { Mail, MapPin, Phone } from "lucide-react";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { services, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#556679] px-5 pb-8 pt-16 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-5">
              <div className="inline-flex rounded-2xl bg-white px-4 py-3 shadow-lg">
                <img
                  src="/images/perumnet-logo.png"
                  alt="PerumNet"
                  className="h-14 w-auto"
                />
              </div>
            </div>

            <p className="mb-6 leading-7 text-slate-300">
              Penyedia layanan internet fiber optic cepat, stabil, dan
              terpercaya untuk kebutuhan rumah, bisnis, dan komunitas perumahan
              di Bali.
            </p>

            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaXTwitter, FaYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="rounded-xl bg-slate-700 p-2 transition hover:bg-[#00a79d]"
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </div>
          </div>

          <FooterColumn
            title="Layanan"
            items={services.map((service) => service.title)}
          />

          <div>
            <span className="mb-5 block text-lg font-bold">Kontak</span>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#00a79d]" />
                <span className="text-slate-300">{siteConfig.address}</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-[#00a79d]" />
                <span className="text-slate-300">{siteConfig.phone}</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-[#00a79d]" />
                <span className="break-all text-slate-300">
                  {siteConfig.email}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-slate-300">
              © {new Date().getFullYear()} PerumNet. All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#"
                className="text-slate-300 transition hover:text-[#00a79d]"
              >
                Syarat & Ketentuan
              </a>

              <a
                href="#"
                className="text-slate-300 transition hover:text-[#00a79d]"
              >
                Kebijakan Privasi
              </a>

              <a
                href="#"
                className="text-slate-300 transition hover:text-[#00a79d]"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  items: string[];
};

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <span className="mb-5 block text-lg font-bold">{title}</span>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#services"
              className="text-slate-300 transition hover:text-[#00a79d]"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
