import { NextResponse } from "next/server";

export function middleware(req) {
  console.log(`Request: ${req.method} ${req.nextUrl.pathname}`);

  const authToken = req.cookies.get("token")?.value;

  const protectedRoutes = ["/dashboard", "/profile"];

  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!authToken) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], 
};
