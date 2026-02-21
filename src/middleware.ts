import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./i18n/settings";

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const preferred = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0].trim())
      .find((lang) =>
        locales.some(
          (locale) => lang === locale || lang.startsWith(locale.split("-")[0])
        )
      );
    if (preferred) {
      const match = locales.find(
        (locale) =>
          preferred === locale || preferred.startsWith(locale.split("-")[0])
      );
      if (match) return match;
    }
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Skip static files and api routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.includes(".")
  ) {
    return;
  }

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|images|favicon.ico|.*\\..*).*)"],
};
