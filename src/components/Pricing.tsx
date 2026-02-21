"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import type { Dictionary } from "@/i18n/getDictionary";

export default function Pricing({ dict }: { dict: Dictionary }) {
  const included = [
    dict.pricing.noSub,
    dict.pricing.noAds,
    dict.pricing.noIAP,
    dict.pricing.allFeatures,
    dict.pricing.freeUpdates,
  ];

  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-navy-700 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {dict.pricing.title}{" "}
              <span className="bg-gradient-to-r from-mint to-emerald-400 bg-clip-text text-transparent">
                {dict.pricing.titleAccent}
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
              {dict.pricing.subtitle}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mx-auto mt-12 max-w-md">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl border border-mint/20 bg-gradient-to-b from-navy-800/80 to-navy-800/30 backdrop-blur-sm"
            >
              {/* Animated glow */}
              <motion.div
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-mint blur-[80px]"
              />

              {/* Shimmer border effect */}
              <div className="absolute inset-0 rounded-3xl border border-mint/10" />

              <div className="relative p-8 text-center sm:p-10">
                <div className="inline-block rounded-full bg-gradient-to-r from-mint/20 to-emerald-500/10 px-4 py-1.5 text-sm font-medium text-mint border border-mint/20">
                  {dict.pricing.lifetime}
                </div>

                <div className="mt-8 flex items-baseline justify-center gap-2">
                  <span className="font-heading text-6xl font-extrabold text-white">
                    {dict.pricing.price}
                  </span>
                  {dict.pricing.priceAlt && (
                    <span className="text-lg text-slate-400">{dict.pricing.priceAlt}</span>
                  )}
                </div>

                <p className="mt-2 text-sm text-slate-500">
                  {dict.pricing.oneTime}
                </p>

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-navy-700 to-transparent" />

                <ul className="space-y-4 text-left">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-mint/10">
                        <svg
                          className="h-3 w-3 text-mint"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#download"
                  className="group relative mt-8 block w-full overflow-hidden rounded-full bg-gradient-to-r from-mint to-emerald-500 py-3.5 text-center font-semibold text-navy-900 transition-all hover:shadow-xl hover:shadow-mint/25"
                >
                  <span className="relative z-10">{dict.pricing.downloadNow}</span>
                  <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
                </a>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
