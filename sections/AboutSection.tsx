import {
  Award,
  BadgeCheck,
  Headphones,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/site";

const stats = [
  {
    label: "Fiber Optic",
    value: "100%",
    icon: TrendingUp,
  },
  {
    label: "Support",
    value: "24/7",
    icon: Headphones,
  },
  {
    label: "Unlimited",
    value: "No FUP",
    icon: Award,
  },
  {
    label: "Coverage",
    value: "Bali Timur",
    icon: Users,
  },
];

const benefits = [
  "Internet Full Unlimited tanpa FUP.",
  "Jaringan Fiber Optik cepat dan stabil.",
  "Gratis biaya registrasi dan pemasangan.",
  "Router Dual Band dengan dukungan WiFi 5GHz.",
  "Support teknis yang responsif.",
  "Harga terjangkau untuk rumah dan bisnis.",
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
            badge="Tentang PerumNet"
            title="Provider Internet Fiber Optik Terpercaya di Bali Timur"
            description="PerumNet menghadirkan layanan internet cepat, stabil, dan terjangkau untuk rumah, bisnis, sekolah, dan berbagai kebutuhan digital di Bali Timur."
          />

          <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                alt="Infrastruktur jaringan PerumNet"
                className="h-[320px] w-full object-cover md:h-[500px]"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                Mengapa Memilih{" "}
                <span className="text-[#00a79d]">{siteConfig.name}</span>?
              </h3>

              <div className="space-y-4 text-[#556679]">
                <p className="leading-8">
                  PerumNet merupakan reseller resmi dari{" "}
                  <strong>PT Adi Solusindo Teknologi (ALUS)</strong>, salah satu
                  perusahaan penyedia jasa internet dan solusi teknologi
                  informasi di Indonesia.
                </p>

                <p className="leading-8">
                  Kami menghadirkan layanan internet fiber optik yang cepat,
                  stabil, dan terjangkau untuk rumah, bisnis, sekolah,
                  streaming, gaming, hingga kebutuhan operasional perusahaan.
                </p>

                <p className="leading-8">
                  Didukung oleh infrastruktur dan pengalaman ALUS, PerumNet
                  berkomitmen memberikan layanan terbaik mulai dari konsultasi,
                  pemasangan, hingga dukungan teknis yang responsif.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
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

          <div className="mb-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-[#00a79d]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00a79d]/20 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00a79d]/10">
                  <BadgeCheck className="h-6 w-6 text-[#00a79d]" />
                </div>

                <p className="font-medium leading-7 text-slate-700">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-[#00a79d] to-[#00998f] p-8 text-center text-white md:p-10">
            <ShieldCheck className="mx-auto mb-4 h-10 w-10" />

            <h3 className="mb-3 text-2xl font-bold">
              Didukung Infrastruktur ALUS
            </h3>

            <p className="mx-auto max-w-3xl leading-8 text-white/90">
              PT Adi Solusindo Teknologi menyediakan berbagai solusi teknologi,
              mulai dari layanan internet, jaringan, perangkat keras, perangkat
              lunak, hingga pemeliharaan infrastruktur IT untuk berbagai
              kebutuhan bisnis dan organisasi di Indonesia.
            </p>
          </div>

          <div className="mt-24">
            <SectionHeader
              badge="Tim Kami"
              title="Tim PerumNet Siap Membantu Anda"
              description="Mulai dari konsultasi, survey lokasi, pemasangan hingga dukungan teknis, tim kami siap memberikan layanan terbaik untuk pelanggan di Bali Timur."
            />

            <div className="overflow-hidden rounded-[32px] shadow-xl">
              <img
                src="/images/contact-team.jpg"
                alt="Tim PerumNet"
                className="h-[360px] w-full object-cover md:h-[720px]"
              />
            </div>

            <div className="mx-auto mt-8 max-w-4xl text-center">
              <p className="leading-8 text-[#556679]">
                Tim PerumNet terdiri dari tenaga profesional yang berpengalaman
                dalam instalasi jaringan, pemeliharaan infrastruktur, serta
                dukungan pelanggan. Kami berkomitmen memberikan layanan yang
                cepat, ramah, dan terpercaya bagi seluruh pelanggan kami.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
