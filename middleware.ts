import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let locales = ["ja", "en"];

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return 'en';

  const languages = acceptLanguage.split(',').map(lang => {
    const [tag, q] = lang.split(';');
    return {
      tag: tag.trim(),
      q: q ? parseFloat(q.split('=')[1]) : 1.0
    };
  }).sort((a, b) => b.q - a.q);

  for (const lang of languages) {
    if (lang.tag.startsWith('ja')) return 'ja';
    if (lang.tag.startsWith('en')) return 'en';
  }

  return 'en';
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  
  // Skip if the path is for static files or API
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // files like favicon.ico, robots.txt, etc.
  ) {
    return;
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
