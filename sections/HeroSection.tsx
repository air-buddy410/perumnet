import { Clock, Shield, Zap } from "lucide-react";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-[#00a79d] via-[#00998f] to-[#007f78] px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-20 scroll-mt-24"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="mb-5 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              🚀 {siteConfig.name} • Internet Fiber Optik Bali
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              Internet Fiber Optik
              <span className="block text-[#d7f8f5]">
                Cepat, Stabil & Terjangkau
              </span>
            </h1>

            <p className="mb-6 text-base leading-relaxed text-white/90 md:text-lg">
              Nikmati koneksi internet fiber optic yang cepat, stabil, dan
              terpercaya untuk kebutuhan rumah, bisnis, sekolah, streaming,
              gaming, dan aktivitas online sehari-hari.
            </p>

            {/* Trust Badges */}
            <div className="mb-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/15 px-3 py-1 text-sm text-white backdrop-blur-sm">
                ✓ Unlimited
              </span>

              <span className="rounded-full bg-white/15 px-3 py-1 text-sm text-white backdrop-blur-sm">
                ✓ Fiber Optic
              </span>

              <span className="rounded-full bg-white/15 px-3 py-1 text-sm text-white backdrop-blur-sm">
                ✓ Support 24/7
              </span>
            </div>

            {/* CTA */}
            <div className="mb-10 flex flex-wrap gap-4">
              <a
                href="#packages"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-[#00a79d] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-slate-100"
              >
                Lihat Paket
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-2 border-white bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#00a79d]"
              >
                Hubungi Kami
              </a>
            </div>

            {/* Features */}
            <div className="mt-8 grid grid-cols-3 gap-3 md:gap-6">
              {[
                {
                  label: "Internet Stabil",
                  icon: Zap,
                },
                {
                  label: "Fiber Optic",
                  icon: Shield,
                },
                {
                  label: "Support 24/7",
                  icon: Clock,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="mb-2 rounded-full bg-white/20 p-3 backdrop-blur-sm">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <p className="text-[11px] font-semibold text-white md:text-sm">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/hero2.jpg"
                alt={siteConfig.name}
                className="h-[300px] w-full object-cover md:h-[550px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#556679]/70 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-4 left-4 max-w-xs rounded-2xl bg-white p-5 shadow-2xl md:-bottom-6 md:-left-6">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-[#00a79d] p-3">
                  <Zap className="h-7 w-7 text-white" />
                </div>

                <div>
                  <p className="text-lg font-bold text-slate-900 md:text-2xl">
                    Hingga 177 Mbps
                  </p>

                  <p className="text-sm text-[#556679]">
                    Unlimited Fiber Optic
                  </p>
                </div>
              </div>
            </div>

            {/* Optional Badge */}
            <div className="absolute top-4 right-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#00a79d] shadow-lg">
              ⭐ Terpercaya
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
