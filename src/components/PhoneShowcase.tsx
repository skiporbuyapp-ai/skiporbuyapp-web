"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import PhoneMockup from "./PhoneMockup";
import type { Dictionary } from "@/i18n/getDictionary";

export default function PhoneShowcase({ dict }: { dict: Dictionary }) {
  const callouts = [
    {
      title: dict.phoneShowcase.instantVerdicts,
      description: dict.phoneShowcase.instantVerdictsDesc,
      side: "left" as const,
      color: "text-verdict-worth",
      borderColor: "border-verdict-worth/20",
    },
    {
      title: dict.phoneShowcase.smartCategories,
      description: dict.phoneShowcase.smartCategoriesDesc,
      side: "left" as const,
      color: "text-verdict-think",
      borderColor: "border-verdict-think/20",
    },
    {
      title: dict.phoneShowcase.compareSideBySide,
      description: dict.phoneShowcase.compareSideBySideDesc,
      side: "right" as const,
      color: "text-mint",
      borderColor: "border-mint/20",
    },
    {
      title: dict.phoneShowcase.shareCards,
      description: dict.phoneShowcase.shareCardsDesc,
      side: "right" as const,
      color: "text-verdict-skip",
      borderColor: "border-verdict-skip/20",
    },
  ];

  const leftCallouts = callouts.filter((c) => c.side === "left");
  const rightCallouts = callouts.filter((c) => c.side === "right");

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-navy-700 to-transparent" />

      {/* Background glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-mint blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {dict.phoneShowcase.title}{" "}
              <span className="bg-gradient-to-r from-mint to-emerald-400 bg-clip-text text-transparent">
                {dict.phoneShowcase.titleAccent}
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
              {dict.phoneShowcase.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-12">
          {/* Left callouts */}
          <div className="flex flex-col gap-5 lg:w-72">
            {leftCallouts.map((callout, i) => (
              <FadeIn key={callout.title} delay={i * 0.12} direction="right">
                <div className={`group rounded-xl border ${callout.borderColor} bg-navy-800/30 p-5 text-right backdrop-blur-sm transition-all duration-300 hover:bg-navy-800/60 hover:shadow-lg lg:text-right`}>
                  <h3 className={`font-heading font-semibold ${callout.color}`}>
                    {callout.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                    {callout.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Phone */}
          <FadeIn delay={0.15}>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneMockup />
            </motion.div>
          </FadeIn>

          {/* Right callouts */}
          <div className="flex flex-col gap-5 lg:w-72">
            {rightCallouts.map((callout, i) => (
              <FadeIn key={callout.title} delay={i * 0.12 + 0.25} direction="left">
                <div className={`group rounded-xl border ${callout.borderColor} bg-navy-800/30 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-navy-800/60 hover:shadow-lg`}>
                  <h3 className={`font-heading font-semibold ${callout.color}`}>
                    {callout.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                    {callout.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
