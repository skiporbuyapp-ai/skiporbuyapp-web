"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Dictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/settings";
import Link from "next/link";

export default function CookieBanner({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay so it doesn't appear instantly on page load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-6 left-6 right-6 z-[60] mx-auto max-w-lg"
        >
          <div className="rounded-2xl border border-navy-700/50 bg-navy-800/95 p-5 shadow-2xl backdrop-blur-xl">
            <p className="text-sm leading-relaxed text-slate-300">
              {dict.cookie.message}{" "}
              <Link
                href={`/${lang}/privacy`}
                className="text-mint underline-offset-2 transition hover:underline"
              >
                {dict.cookie.learnMore}
              </Link>
            </p>
            <div className="mt-4 flex gap-3">
              <button
                onClick={handleAccept}
                className="rounded-full bg-mint px-5 py-2 text-sm font-semibold text-navy-900 transition hover:bg-mint-dark"
              >
                {dict.cookie.accept}
              </button>
              <button
                onClick={handleDecline}
                className="rounded-full border border-navy-700 px-5 py-2 text-sm font-medium text-slate-400 transition hover:border-slate-500 hover:text-white"
              >
                {dict.cookie.decline}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
