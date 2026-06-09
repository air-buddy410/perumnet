import {
  Award,
  CircleCheck,
  Headphones,
  TrendingUp,
  Users,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";

import { siteConfig } from "@/data/site";

const benefits = [
  "Internet Full Unlimited tanpa batas kuota (FUP).",
  "Gratis biaya registrasi dan pemasangan.",
  "Jaringan Fiber Optic yang cepat dan stabil.",
  "Router Dual Band dengan dukungan WiFi 5GHz.",
  "Harga terjangkau untuk rumah dan bisnis.",
];

const stats = [
  {
    label: "Pelanggan Aktif",
    value: "2.000+",
    icon: Users,
  },
  {
    label: "Tahun Pengalaman",
    value: "6+",
    icon: Award,
  },
  {
    label: "Koneksi Stabil",
    value: "99.9%",
    icon: TrendingUp,
  },
  {
    label: "Support Pelanggan",
    value: "24/7",
    icon: Headphones,
  },
];

export function AboutSection() {
  return (
    <Reveal>
      <section
        id="about"
        className="scroll-mt-24 bg-white px-5 py-16 md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Tentang Kami"
            title="Provider Internet Fiber Optik Terpercaya"
            description={`${siteConfig.name} menghadirkan layanan internet cepat, stabil, dan terjangkau untuk rumah, bisnis, dan kebutuhan digital Anda.`}
          />

          <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                alt="Fiber optic infrastructure"
                className="h-[320px] w-full rounded-3xl object-cover shadow-xl md:h-[500px]"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                Mengapa Memilih{" "}
                <span className="text-[#00a79d]">{siteConfig.name}</span>?
              </h3>

              <p className="leading-8 text-[#556679]">
                Kami berkomitmen menyediakan layanan internet yang cepat,
                stabil, dan terjangkau untuk membantu aktivitas belajar,
                bekerja, streaming, gaming, dan kebutuhan bisnis Anda setiap
                hari.
              </p>

              <div className="space-y-4 pt-2">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CircleCheck className="mt-1 h-6 w-6 flex-shrink-0 text-[#00a79d]" />

                    <span className="text-base font-medium leading-7 text-slate-700 md:text-lg">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[#00a79d]/10 bg-[#00a79d]/5 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-6"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00a79d]">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <p className="mb-1 text-2xl font-bold text-slate-900 md:text-3xl">
                    {stat.value}
                  </p>

                  <p className="text-sm text-[#556679]">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
