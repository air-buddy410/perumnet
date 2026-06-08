import { Clock, Shield, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 px-4 pb-20 pt-32 scroll-mt-24"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              🚀 Koneksi Cepat, Harga Sahabat – Dari Desa Membangun Negeri
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              Internet Cepat dan Stabil dengan
              <span className="block text-orange-400">Harga Sahabat</span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-white/90">
              Nikmati pengalaman internet tanpa batas dengan kecepatan tinggi
              dan stabil untuk kebutuhan belajar, bekerja, dan hiburan keluarga
              Anda di tahun 2026!
            </p>

            <div className="mb-12 flex flex-wrap gap-4">
              <a
                href="#packages"
                className="rounded-md bg-orange-500 px-8 py-4 text-lg font-medium text-white shadow-xl transition hover:bg-orange-600"
              >
                Lihat Paket
              </a>

              <a
                href="#contact"
                className="rounded-md border-2 border-white bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition hover:bg-white hover:text-green-600"
              >
                Hubungi Kami
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { label: "Kecepatan Tinggi", icon: Zap },
                { label: "Keamanan Terjamin", icon: Shield },
                { label: "Support 24/7", icon: Clock },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="mb-2 rounded-full bg-white/20 p-3 backdrop-blur-sm">
                      <Icon className="h-6 w-6 text-orange-400" />
                    </div>
                    <p className="text-sm font-semibold text-white">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1688733718768-3673547a8b5d"
                alt="Modern office with high-speed internet connection"
                className="rounded-2xl shadow-2xl"
              />

              <div className="absolute -bottom-6 -left-6 max-w-xs rounded-xl bg-white p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 p-3">
                    <Zap className="h-8 w-8 text-white" />
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-slate-900">2.000+</p>
                    <p className="text-sm text-slate-600">
                      Pelanggan Puas Maharani Internet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
