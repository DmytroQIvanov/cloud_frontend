import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // alert();

  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return;
  }
  // return NextResponse.rewrite(new URL("/proxy", request.url));
  console.log(
    "request.headers.get",
    request.headers.get("host"),
    request.nextUrl.pathname,
  );
  if (request.headers.get("host") === "transfer.quanticfiles.com") {
    // (request.nextUrl.pathname === "/" ||
    //   request.nextUrl.pathname === "/transfer/")
    // )
    // alert();
    return NextResponse.rewrite(
      new URL(`/transfer${request.nextUrl.pathname}`, request.url),
    );
    //
    // return NextResponse.redirect(new URL("/instruments", request.url));
  }
  // return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };
