"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { faqs } from "@/data/site";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Reveal>
      <section
        id="faq"
        className="scroll-mt-24 bg-white px-5 py-16 md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            badge="FAQ"
            title="Pertanyaan yang Sering Diajukan"
            description="Temukan jawaban seputar layanan, paket internet, pemasangan, dan support PerumNet."
          />

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 24,
                    },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.45,
                        ease: "easeOut",
                      },
                    },
                  }}
                  className="overflow-hidden rounded-2xl border border-[#00a79d]/10 bg-slate-50"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-[#00a79d]/10 p-2 text-[#00a79d]">
                        <HelpCircle className="h-5 w-5" />
                      </div>

                      <h3 className="text-lg font-bold leading-relaxed text-slate-900">
                        {faq.question}
                      </h3>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown className="h-5 w-5 flex-shrink-0 text-[#00a79d]" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="px-5 pb-5 md:px-6 md:pb-6 md:pl-[68px]">
                          <p className="leading-7 text-[#556679]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </Reveal>
  );
}
