"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { locales, localeNames, localeFlags, type Locale } from "@/i18n/settings";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    window.location.href = segments.join("/");
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg bg-navy-800/60 px-3 py-2 text-sm text-slate-300 backdrop-blur-sm transition hover:bg-navy-700/60 hover:text-white border border-navy-700/50"
        aria-label="Change language"
      >
        <span className="text-base">{localeFlags[lang]}</span>
        <span className="hidden sm:inline">{localeNames[lang]}</span>
        <svg
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 z-50 min-w-[180px] overflow-hidden rounded-xl border border-navy-700/50 bg-navy-800/95 p-1.5 shadow-2xl backdrop-blur-xl"
          >
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => {
                  switchLocale(locale);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                  locale === lang
                    ? "bg-mint/10 text-mint"
                    : "text-slate-300 hover:bg-navy-700/50 hover:text-white"
                }`}
              >
                <span className="text-base">{localeFlags[locale]}</span>
                <span>{localeNames[locale]}</span>
                {locale === lang && (
                  <svg className="ml-auto h-4 w-4 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
