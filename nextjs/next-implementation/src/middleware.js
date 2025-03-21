import { NextResponse } from "next/server";

export function middleware(req) {
    // Create a response object
    const res = NextResponse.rewrite(new URL("/", req.url)); // Rewriting request to "/"

    // Set a cookie
    res.cookies.set("user_session", "123456", {
        httpOnly: true,  // Cannot be accessed by JavaScript (security)
        secure: true,    // Only sent over HTTPS
        sameSite: "Strict",
        path: "/",       // Available on all routes
        maxAge: 60 * 60, // 1 hour
    });

    // Set a custom header
    res.headers.set("X-Custom-Header", "MyCustomValue");

    return res;
}

export const config = {
    matcher: "/home", // This middleware runs only for "/home"
};
