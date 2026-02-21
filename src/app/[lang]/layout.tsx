import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { locales, type Locale } from "@/i18n/settings";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skip Or Buy: Worth It? — Know the real cost before you buy",
  description:
    "Calculate the price per use of anything in seconds. One purchase. No subscription. No ads.",
  keywords: [
    "cost per use",
    "price per use calculator",
    "skip or buy",
    "worth it calculator",
    "purchase decision",
  ],
  openGraph: {
    title: "Skip Or Buy: Worth It?",
    description:
      "Calculate the price per use of anything in seconds. One purchase. No subscription. No ads.",
    url: "https://skiporbuyapp.com",
    siteName: "Skip Or Buy: Worth It?",
    type: "website",
  },
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
