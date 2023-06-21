import { NextRequest } from "next/server";
import { supabaseGET } from "@/components/app/routes";

export async function GET(request: NextRequest) {
  return supabaseGET(request)
}