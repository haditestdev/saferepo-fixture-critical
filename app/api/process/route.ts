import { NextRequest, NextResponse } from "next/server";
import { runSystemDiagnostic, readUploadedLog, evaluateCondition } from "@/lib/security-fixtures";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const task = body.task || "test";
  const file = body.file || "app.log";
  const expr = body.expr || "1+1";

  // SAST Trigger 18: Command Injection
  runSystemDiagnostic(task);

  // SAST Trigger 19: Dynamic Eval
  evaluateCondition(expr);

  try {
    // SAST Trigger 20: Path Traversal
    const content = readUploadedLog(file);
    return NextResponse.json({ output: content });
  } catch (err: any) {
    // SAST Trigger 21: Full Stack Trace Exposure (CWE-209)
    return NextResponse.json({ error: err.message, stack: err.stack }, { status: 500 });
  }
}
