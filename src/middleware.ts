import { NextRequest } from "next/server";
import { supabaseMiddleware } from "@/components/app/middlewares";

export function middleware(req: NextRequest) {
  return supabaseMiddleware(req)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|login|signup).*)',
  ],
}