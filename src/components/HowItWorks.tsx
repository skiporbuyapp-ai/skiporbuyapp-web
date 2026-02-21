"use client";

import FadeIn, { StaggerContainer, StaggerItem } from "./FadeIn";
import type { Dictionary } from "@/i18n/getDictionary";

export default function HowItWorks({ dict }: { dict: Dictionary }) {
  const steps = [
    {
      number: "1",
      title: dict.howItWorks.step1,
      description: dict.howItWorks.step1Desc,
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: "2",
      title: dict.howItWorks.step2,
      description: dict.howItWorks.step2Desc,
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
        </svg>
      ),
    },
    {
      number: "3",
      title: dict.howItWorks.step3,
      description: dict.howItWorks.step3Desc,
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-navy-700 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {dict.howItWorks.title}{" "}
              <span className="bg-gradient-to-r from-mint to-emerald-400 bg-clip-text text-transparent">
                {dict.howItWorks.titleAccent}
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
              {dict.howItWorks.subtitle}
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
          {steps.map((step, i) => (
            <StaggerItem key={step.number}>
              <div className="relative text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-12 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-mint/30 via-mint/10 to-transparent md:block" />
                )}
                <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-navy-700/50 bg-navy-800/50 text-mint backdrop-blur-sm transition-all duration-300 hover:border-mint/30 hover:shadow-lg hover:shadow-mint/10">
                  <span className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-mint to-emerald-500 text-sm font-bold text-navy-900 shadow-lg shadow-mint/25">
                    {step.number}
                  </span>
                  {step.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-slate-400">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Example calculation */}
        <FadeIn delay={0.3}>
          <div className="mx-auto mt-16 max-w-2xl overflow-hidden rounded-2xl border border-navy-700/50 bg-gradient-to-br from-navy-800/80 to-navy-800/30 p-8 text-center backdrop-blur-sm">
            <p className="text-lg text-slate-300 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              <span className="font-semibold text-white">{dict.howItWorks.exampleBoots}</span>
              <span className="text-mint font-bold text-xl">&divide;</span>
              <span className="font-semibold text-white">{dict.howItWorks.exampleUses}</span>
              <span className="text-mint font-bold text-xl">=</span>
              <span className="font-semibold text-white">{dict.howItWorks.exampleResult}</span>
              <span className="text-slate-500">&mdash;</span>
              <span className="inline-block rounded-full bg-gradient-to-r from-verdict-worth/20 to-verdict-worth/5 px-4 py-1 font-semibold text-verdict-worth border border-verdict-worth/20">
                {dict.howItWorks.worthIt}
              </span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
