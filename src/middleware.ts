import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
import { createI18nMiddleware } from "next-international/middleware";
const array = ["instruments", "faq", "about-us", "links"];

import { match } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";

let headers = { "accept-language": "en-US,en;q=0.5" };
// let languages = new Negotiator({ headers }).languages();
let locales = ["ru", "en", "ua"];
let defaultLocale = "en-US";
const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "ua"],
  defaultLocale: "en",
});
// match(languages, locales, defaultLocale); // -> 'en-US'
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // alert();
  // return I18nMiddleware(request);
  const { pathname } = request.nextUrl;
  let language;
  const pathnameHasLocale = locales.some((locale) => {
    let result =
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`;
    if (result) language = locale;
    return result;
  });

  request.nextUrl.pathname = `${pathname}`;
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    // request.nextUrl.pathname.includes("_next") ||
    request.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return NextResponse.next();
  }
  // return NextResponse.rewrite(new URL("/proxy", request.url));
  console.log(
    "request.headers.get",
    request.headers.get("host"),
    request.nextUrl.pathname,
    request.url,
  );
  console.log(request.nextUrl.pathname);
  // if (pathnameHasLocale) {
  //   console.log("true");
  //   // if (request.nextUrl.locale === "default") {
  //   const locale = request.cookies.get("NEXT_LOCALE")?.value || "en";
  //
  //   // `/${locale}${request.nextUrl.pathname}${request.nextUrl.search}`,
  //   return NextResponse.rewrite(
  //     new URL(`${request.url.replace(`/${language}`, ``)}`, `/${language}`),
  //   );
  // }

  // if (
  //   request.headers.get("host") === "transfer.quanticfiles.com" &&
  //   !array.some((elem) => request.nextUrl.pathname.includes(elem))
  // ) {
  if (!pathnameHasLocale)
    return NextResponse.rewrite(
      new URL(`/en${request.nextUrl.pathname}`, request.url),
    );
  // }

  if (
    request.headers.get("host") === "transfer.quanticfiles.com" &&
    !array.some((elem) => request.nextUrl.pathname.includes(elem))
  ) {
    return NextResponse.rewrite(
      new URL(`/transfer${request.nextUrl.pathname}`, request.url),
    );
  }

  if (
    request.headers.get("host") === "image.quanticfiles.com" &&
    !array.some((elem) => request.nextUrl.pathname.includes(elem))
  ) {
    return NextResponse.rewrite(
      new URL(`/image${request.nextUrl.pathname}`, request.url),
    );
  }
  if (pathnameHasLocale) return I18nMiddleware(request);
  //
  // return I18nMiddleware(request);
  // return NextResponse.redirect(request.nextUrl);
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };
