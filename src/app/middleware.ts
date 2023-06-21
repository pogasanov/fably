import { NextRequest } from "next/server";
import { supabaseMiddleware } from "@/components/app/middlewares";

export async function middleware(req: NextRequest) {
  return supabaseMiddleware(req)
}