"use server";

import { getCookie } from "cookies-next/server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = await getCookie("token", { cookies });
  console.log(path)

  if (token && path !== "/home") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (!token && path !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
