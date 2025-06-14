import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const getJwtSecret = () => new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const url = request.nextUrl;

  if (url.pathname === "/login" && token) {
    try {
      await jwtVerify(token, getJwtSecret());
      return NextResponse.redirect(new URL("/upload", request.url));
    } catch (err) {
      // Invalid token, fall through to /login
    }
  }

  if (url.pathname.startsWith("/upload")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      await jwtVerify(token, getJwtSecret());
      return NextResponse.next();
    } catch (err) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/upload", "/login"],
};
