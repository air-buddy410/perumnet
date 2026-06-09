"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Shield, Zap } from "lucide-react";
import { siteConfig } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="scroll-mt-24 relative overflow-hidden bg-gradient-to-br from-[#00a79d] via-[#00998f] to-[#007f78] px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-32"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-5 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
            >
              🚀 {siteConfig.name} • Internet Fiber Optik Bali
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl"
            >
              Internet Fiber Optik
              <span className="block text-[#d7f8f5]">
                Cepat, Stabil & Terjangkau
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 text-base leading-relaxed text-white/90 md:text-lg"
            >
              Nikmati koneksi internet fiber optic yang cepat, stabil, dan
              terpercaya untuk kebutuhan rumah, bisnis, sekolah, streaming,
              gaming, dan aktivitas online sehari-hari.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8 flex flex-wrap gap-3"
            >
              {["✓ Unlimited", "✓ Fiber Optic", "✓ Support 24/7"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/15 px-3 py-1 text-sm text-white backdrop-blur-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-10 flex flex-wrap gap-4"
            >
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
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-8 grid grid-cols-3 gap-3 md:gap-6"
            >
              {[
                { label: "Internet Stabil", icon: Zap },
                { label: "Fiber Optic", icon: Shield },
                { label: "Support 24/7", icon: Clock },
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
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.25 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/hero2.jpg"
                alt="PerumNet Internet Fiber Optic"
                width={1200}
                height={800}
                priority
                className="h-[300px] w-full object-cover md:h-[550px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#556679]/70 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.75 }}
              className="absolute -bottom-4 left-4 max-w-xs rounded-2xl bg-white p-5 shadow-2xl md:-bottom-6 md:-left-6"
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
