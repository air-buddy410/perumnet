import { Mail, MapPin, Phone } from "lucide-react";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { siteConfig } from "@/data/site";

const services = [
  "Internet Rumah",
  "Internet Bisnis",
  "WiFi Solutions",
  "CCTV",
  "Customer Support",
];

const company = [
  "Tentang Kami",
  "Karir",
  "Blog",
  "Press Release",
  "Partnership",
];

export function Footer() {
  return (
    <footer className="bg-slate-900 px-4 pb-8 pt-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-lg font-bold">
                M
              </div>

              <span className="text-xl font-bold">
                Maharani<span className="text-orange-500">Internet</span>
              </span>
            </div>

            <p className="mb-4 leading-relaxed text-slate-400">
              Provider internet terpercaya dengan teknologi fiber optik untuk
              koneksi super cepat dan stabil.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="rounded-lg bg-slate-800 p-2 transition-colors hover:bg-green-600"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-2 transition-colors hover:bg-green-600"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-2 transition-colors hover:bg-green-600"
              >
                <FaXTwitter size={20} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-2 transition-colors hover:bg-green-600"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          <FooterColumn title="Layanan" items={services} />
          <FooterColumn title="Perusahaan" items={company} />

          <div>
            <span className="mb-4 block text-lg font-bold">Kontak</span>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="min-w-0 break-words">
                  {siteConfig.address}
                </span>
              </li>

              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="min-w-0 break-words">{siteConfig.phone}</span>
              </li>

              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="min-w-0 break-all">{siteConfig.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-400">
              © 2026 CV MAHARANI KOMPUTER DAN JARINGAN
            </p>

            <p className="text-sm text-slate-400">
              Powered by AlusNet (PT. Adi Solusindo Teknologi)
            </p>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-green-500">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-slate-400 hover:text-green-500">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-slate-400 hover:text-green-500">
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
      <span className="mb-4 block text-lg font-bold">{title}</span>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-slate-400 transition-colors hover:text-green-500"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
