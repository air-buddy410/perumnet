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
    <section
      id="contact"
      className="scroll-mt-24 bg-slate-50 px-5 py-16 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Hubungi Kami"
          title="Pasang Internet PerumNet Sekarang"
          description="Isi form konsultasi atau hubungi kami melalui WhatsApp untuk informasi paket, survey lokasi, dan pemasangan internet baru."
        />

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-3xl border border-[#00a79d]/10 bg-white p-6 shadow-sm md:p-8">
            <h3 className="mb-2 text-2xl font-bold text-slate-900">
              Kirim Pesan
            </h3>

            <p className="mb-6 text-[#556679]">
              Tim PerumNet akan menghubungi Anda secepatnya.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <FormField label="Nama Lengkap">
                <input
                  type="text"
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#00a79d] focus:ring-2 focus:ring-[#00a79d]/20"
                />
              </FormField>

              <FormField label="Email">
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#00a79d] focus:ring-2 focus:ring-[#00a79d]/20"
                />
              </FormField>

              <FormField label="Nomor Telepon">
                <input
                  type="tel"
                  placeholder="08xx-xxxx-xxxx"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#00a79d] focus:ring-2 focus:ring-[#00a79d]/20"
                />
              </FormField>

              <FormField label="Pesan">
                <textarea
                  rows={4}
                  placeholder="Tuliskan pesan Anda di sini..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#00a79d] focus:ring-2 focus:ring-[#00a79d]/20"
                />
              </FormField>

              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-xl bg-[#00a79d] px-4 py-4 text-base font-semibold text-white transition hover:bg-[#008f86]"
              >
                <Send className="mr-2 h-5 w-5" />
                Kirim Pesan
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-[#00a79d]/10 bg-white p-6 shadow-sm md:p-8">
              <h3 className="mb-6 text-2xl font-bold text-slate-900">
                Informasi Kontak
              </h3>

              <div className="space-y-6">
                <ContactInfo
                  icon={Phone}
                  label="Telepon / WhatsApp"
                  value={siteConfig.phone}
                />

                <ContactInfo
                  icon={Mail}
                  label="Email"
                  value={siteConfig.email}
                />

                <ContactInfo
                  icon={MapPin}
                  label="Alamat"
                  value={siteConfig.address}
                />

                <ContactInfo
                  icon={Clock}
                  label="Jam Operasional"
                  value="Senin - Minggu: 24/7"
                />
              </div>
            </div>

            <div className="rounded-3xl bg-[#00a79d] p-6 text-white shadow-lg md:p-8">
              <h3 className="mb-4 text-2xl font-bold">Butuh Bantuan Segera?</h3>

              <p className="mb-6 text-white/90">
                Hubungi tim PerumNet melalui WhatsApp untuk konsultasi,
                pengecekan area, dan pemasangan internet baru.
              </p>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-white/20 p-4 backdrop-blur-sm transition hover:bg-white/30"
              >
                <Phone className="h-6 w-6" />
                <div>
                  <p className="text-sm text-white/75">WhatsApp PerumNet</p>
                  <p className="text-xl font-bold">{siteConfig.phone}</p>
                </div>
              </a>
            </div>

            <img
              src="https://images.unsplash.com/photo-1678790118729-631da1a112ef?auto=format&fit=crop&w=900&q=80"
              alt="Customer service representative helping clients"
              className="h-[260px] w-full rounded-3xl object-cover shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  children: React.ReactNode;
};

function FormField({ label, children }: FormFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>
      {children}
    </div>
  );
}

type ContactInfoProps = {
  icon: React.ElementType;
  label: string;
  value: string;
};

function ContactInfo({ icon: Icon, label, value }: ContactInfoProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-2xl bg-[#00a79d]/10 p-3 text-[#00a79d]">
        <Icon className="h-6 w-6" />
      </div>

      <div className="min-w-0">
        <p className="mb-1 font-semibold text-slate-900">{label}</p>
        <p className="break-words text-[#556679]">{value}</p>
      </div>
    </div>
  );
}
