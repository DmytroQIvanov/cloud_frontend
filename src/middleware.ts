import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // alert();
  // console.log("dada");
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return;
  }
  // return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };
