import { Award, CircleCheck, Heart, TrendingUp, Users } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const benefits = [
  "Full Unlimited: Bebas kuota (FUP), internetan sepuasnya setiap hari.",
  "Biaya Registrasi Rp 0: Pemasangan gratis tanpa biaya tambahan tersembunyi.",
  "Teknologi Fiber Optic: Koneksi lebih stabil meski cuaca buruk.",
  "Menggunakan Router Dual Band: Support wifi 5Ghz.",
  "Harga Kompetitif.",
];

const stats = [
  {
    label: "Pengguna Aktif",
    value: "2.000+",
    icon: Users,
  },
  {
    label: "Tahun Pengalaman",
    value: "6+",
    icon: Award,
  },
  {
    label: "Uptime Guarantee",
    value: "99.9%",
    icon: TrendingUp,
  },
  {
    label: "Rating Pelanggan",
    value: "4.9/5",
    icon: Heart,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white px-4 py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Tentang Kami"
          title="Provider Internet Terpercaya"
          description="Maharani Internet telah melayani ribuan pelanggan dengan komitmen memberikan layanan internet terbaik dan terpercaya"
        />

        <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1489436969537-cf0c1dc69cba"
              alt="Professional ISP team working"
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">
              Mengapa Memilih{" "}
              <span className="text-green-600">Maharani Internet</span>?
            </h3>

            <div className="space-y-4 pt-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CircleCheck className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                  <span className="text-lg font-medium text-slate-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-xl border border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 p-6 text-center"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-600">
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <p className="mb-1 text-3xl font-bold text-slate-900">
                  {stat.value}
                </p>

                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
