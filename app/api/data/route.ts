import { NextRequest, NextResponse } from "next/server";
import { buildUserSearchQuery, queryExternalMetric } from "@/lib/security-fixtures";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";
  const target = searchParams.get("target") || "";

  // SAST Trigger 16: SQL Injection sink invoked in Next.js Route
  const sql = buildUserSearchQuery(q);

  // SAST Trigger 17: SSRF trigger invoked in Route
  if (target) {
    queryExternalMetric(target);
  }

  return NextResponse.json({ query: sql, status: "complete" });
}
