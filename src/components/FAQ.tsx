"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn, { StaggerContainer, StaggerItem } from "./FadeIn";
import type { Dictionary } from "@/i18n/getDictionary";

export default function FAQ({ dict }: { dict: Dictionary }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: dict.faq.q1, answer: dict.faq.a1 },
    { question: dict.faq.q2, answer: dict.faq.a2 },
    { question: dict.faq.q3, answer: dict.faq.a3 },
    { question: dict.faq.q4, answer: dict.faq.a4 },
    { question: dict.faq.q5, answer: dict.faq.a5 },
  ];

  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-navy-700 to-transparent" />

      <div className="mx-auto max-w-3xl px-6">
        <FadeIn>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {dict.faq.title}{" "}
              <span className="bg-gradient-to-r from-mint to-emerald-400 bg-clip-text text-transparent">
                {dict.faq.titleAccent}
              </span>
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-12 space-y-3" staggerDelay={0.06}>
          {faqs.map((faq, i) => (
            <StaggerItem key={i}>
              <div className="overflow-hidden rounded-2xl border border-navy-700/50 bg-navy-800/30 backdrop-blur-sm transition-all duration-300 hover:border-navy-700">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-4 font-heading font-semibold text-white">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-mint"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <div className="mb-3 h-px bg-gradient-to-r from-navy-700 to-transparent" />
                        <p className="leading-relaxed text-slate-400">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
