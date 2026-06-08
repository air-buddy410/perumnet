"use client";

import { useState } from "react";

import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      alert("Pesan berhasil dikirim!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <section id="contact" className="bg-slate-50 px-4 py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Hubungi Kami"
          title="PASANG SEKARANG!"
          description="Jangan tunggu lama untuk koneksi yang lebih baik. Hubungi kami di:"
        />

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="mb-6 text-2xl font-bold text-slate-900">
              Kirim Pesan
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-transparent focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-transparent focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  placeholder="08xx-xxxx-xxxx"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-transparent focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Pesan
                </label>
                <textarea
                  rows={4}
                  placeholder="Tuliskan pesan Anda di sini..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-transparent focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-4 text-lg font-medium text-white transition hover:from-green-600 hover:to-emerald-700"
              >
                <Send className="mr-2 h-5 w-5" />
                Kirim Pesan
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-slate-900">
                Informasi Kontak
              </h3>

              <div className="space-y-6">
                <ContactInfo
                  icon={Phone}
                  label="Telepon"
                  value={siteConfig.phone}
                  variant="green"
                />

                <ContactInfo
                  icon={Mail}
                  label="Email"
                  value={siteConfig.email}
                  variant="orange"
                />

                <ContactInfo
                  icon={MapPin}
                  label="Alamat"
                  value={siteConfig.address}
                  variant="green"
                />

                <ContactInfo
                  icon={Clock}
                  label="Jam Operasional"
                  value="Senin - Minggu: 24/7"
                  variant="orange"
                />
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 p-8 text-white">
              <h3 className="mb-4 text-2xl font-bold">Butuh Bantuan Segera?</h3>

              <p className="mb-6 opacity-90">
                Hubungi hotline kami untuk mendapatkan bantuan langsung dari tim
                support kami
              </p>

              <div className="flex items-center gap-3 rounded-lg bg-white/20 p-4 backdrop-blur-sm">
                <Phone className="h-6 w-6" />
                <div>
                  <p className="text-sm opacity-75">24/7 Hotline</p>
                  <p className="text-xl font-bold">{siteConfig.phone}</p>
                </div>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1678790118729-631da1a112ef"
              alt="Customer service representative helping clients"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type ContactInfoProps = {
  icon: React.ElementType;
  label: string;
  value: string;
  variant: "green" | "orange";
};

function ContactInfo({ icon: Icon, label, value, variant }: ContactInfoProps) {
  const gradient =
    variant === "orange"
      ? "from-orange-500 to-orange-600"
      : "from-green-500 to-emerald-600";

  return (
    <div className="flex items-start gap-4">
      <div
        className={`rounded-lg bg-gradient-to-br ${gradient} p-3 text-white`}
      >
        <Icon className="h-6 w-6" />
      </div>

      <div>
        <p className="mb-1 font-semibold text-slate-900">{label}</p>
        <p className="text-slate-600">{value}</p>
      </div>
    </div>
  );
}
