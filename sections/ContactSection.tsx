"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send, UserRound } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
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
    <Reveal>
      <section
        id="contact"
        className="scroll-mt-24 bg-slate-50 px-5 py-16 md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Hubungi Kami"
            title="Hubungi Tim PerumNet"
            description="Hubungi Helpdesk atau Admin PerumNet untuk informasi paket, pemasangan internet baru, pengecekan area, maupun bantuan teknis."
          />

          <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
            <div>
              <div className="h-fit rounded-3xl border border-[#00a79d]/10 bg-white p-6 shadow-sm md:p-8">
                <h3 className="mb-2 text-2xl font-bold text-slate-900">
                  Kirim Pesan
                </h3>

                <p className="mb-6 text-[#556679]">
                  Isi form berikut dan tim PerumNet akan menghubungi Anda
                  secepatnya.
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
            </div>

            <div className="space-y-5">
              <div className="rounded-3xl border border-[#00a79d]/10 bg-white p-6 shadow-sm">
                <h3 className="mb-5 text-2xl font-bold text-slate-900">
                  Informasi Kontak
                </h3>

                <div className="space-y-5">
                  <ContactInfo
                    icon={Phone}
                    label="Helpdesk PerumNet"
                    value={siteConfig.phone}
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                  />

                  <ContactInfo
                    icon={UserRound}
                    label="Admin PerumNet"
                    value={siteConfig.adminPhone}
                    href={`https://wa.me/${siteConfig.adminWhatsapp}`}
                  />

                  <ContactInfo
                    icon={Mail}
                    label="Email"
                    value={siteConfig.email}
                    href={`mailto:${siteConfig.email}`}
                  />

                  <ContactInfo
                    icon={MapPin}
                    label="Kantor Layanan"
                    value={siteConfig.address}
                  />

                  <ContactInfo
                    icon={Clock}
                    label="Jam Operasional"
                    value="Senin - Minggu: 24/7"
                  />
                </div>
              </div>

              <div className="rounded-3xl bg-[#00a79d] p-6 text-white shadow-lg">
                <h3 className="mb-3 text-2xl font-bold">
                  Butuh Bantuan Segera?
                </h3>

                <p className="mb-5 text-white/90">
                  Hubungi Helpdesk PerumNet untuk informasi paket, pemasangan,
                  pengecekan area, atau bantuan teknis.
                </p>

                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-white/20 p-4 backdrop-blur-sm transition hover:bg-white/30"
                >
                  <Phone className="h-6 w-6" />

                  <div>
                    <p className="text-sm text-white/75">Helpdesk PerumNet</p>
                    <p className="text-xl font-bold">{siteConfig.phone}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
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
  href?: string;
};

function ContactInfo({ icon: Icon, label, value, href }: ContactInfoProps) {
  const content = (
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

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block transition hover:opacity-80"
      >
        {content}
      </a>
    );
  }

  return content;
}
