import { NextResponse } from "next/server";

export function middleware(NextRequest) {
  const token = req.cookies.get("token");
  
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Apply middleware only to /dashboard/*
};
