import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
import { createI18nMiddleware } from "next-international/middleware";
import { links } from "@/_components/Wrapper/Header/Header";
const array = [
  "instruments",
  "faq",
  "about-us",
  "links",
  "account",
  "storage",
  "articles",
  "link",
];

let headers = { "accept-language": "en-US,en;q=0.5" };
// let languages = new Negotiator({ headers }).languages();
let locales = ["ru", "en", "ua"];
let defaultLocale = "en-US";
const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "ua"],
  defaultLocale: "ua",
});
// match(languages, locales, defaultLocale); // -> 'en-US'
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  let language;
  let refererLanguage;

  const referer = request.headers.get("referer");
  const refererBoolean = locales.some((locale) => {
    let result = referer?.includes(`/${locale}`);
    if (result) refererLanguage = locale;
    return result;
  });
  let pathnameHasLocale = locales.some((locale) => {
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
  let response;

  //----------------
  //---FIRST PART---
  //----------------
  if (!pathnameHasLocale && !refererBoolean) {
    if (
      request.headers.get("host") === "transfer.quanticfiles.com" &&
      !array.some((elem) => request.nextUrl.pathname.includes(elem))
    ) {
      response = NextResponse.rewrite(
        new URL(
          `/${refererBoolean ? refererLanguage : "ua"}/transfer${request.nextUrl.pathname}`,
          request.url,
        ),
      );
    } else if (
      request.headers.get("host") === "cloud.quanticfiles.com" &&
      !array.some((elem) => request.nextUrl.pathname.includes(elem))
    ) {
      response = NextResponse.rewrite(
        new URL(
          `/${refererBoolean ? refererLanguage : "ua"}/cloud${request.nextUrl.pathname}`,
          request.url,
        ),
      );
    } else if (
      request.headers.get("host") === "image.quanticfiles.com" &&
      !array.some((elem) => request.nextUrl.pathname.includes(elem))
    ) {
      response = NextResponse.rewrite(
        new URL(
          `/${refererBoolean ? refererLanguage : "ua"}/image${request.nextUrl.pathname}`,
          request.url,
        ),
      );
    } else
      response = NextResponse.rewrite(
        new URL(
          `/${refererBoolean ? refererLanguage : "ua"}${request.nextUrl.pathname}`,
          request.url,
        ),
      );
  }

  if (pathnameHasLocale) {
    if (
      request.headers.get("host") === "transfer.quanticfiles.com" &&
      !array.some((elem) => request.nextUrl.pathname.includes(elem))
    ) {
      console.log(
        "request.url----------",
        `${language}/transfer${request.nextUrl.pathname}`,
      );
      response = NextResponse.rewrite(
        new URL(
          `${language}/transfer${request.nextUrl.pathname.replace(`/${language}`, "")}`,
          request.url,
        ),
      );
    } else if (
      request.headers.get("host") === "cloud.quanticfiles.com" &&
      !array.some((elem) => request.nextUrl.pathname.includes(elem))
    ) {
      response = NextResponse.rewrite(
        new URL(
          `${language}/cloud${request.nextUrl.pathname.replace(`/${language}`, "")}`,
          request.url,
        ),
      );
    } else if (
      request.headers.get("host") === "image.quanticfiles.com" &&
      !array.some((elem) => request.nextUrl.pathname.includes(elem))
    ) {
      response = NextResponse.rewrite(
        new URL(
          `${language}/image${request.nextUrl.pathname.replace(`/${language}`, "")}`,
          request.url,
        ),
      );
    }
  } else if (refererBoolean && !pathnameHasLocale) {
    response = NextResponse.redirect(
      new URL(
        `/${refererLanguage}${request.nextUrl.pathname}`,
        // `${refererBoolean ? `/${refererLanguage}` : ""}${request.nextUrl.pathname}`,
        request.url,
      ),
    );
  }

  if (!response) response = NextResponse.next();
  // response.headers.set("x-default-locale", defaultLocale);
  // response.headers.set("accept-language", "en");
  response?.headers.set("x-next-locale", language || "ua");

  return response;
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };
