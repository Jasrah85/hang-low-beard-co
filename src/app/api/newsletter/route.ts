// src/app/api/newsletter/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json().catch(() => ({ email: "" }));
  if (!email || typeof email !== "string") {
    return NextResponse.json(
      { ok: false, error: "Invalid email" },
      { status: 400 },
    );
  }
  console.log("NEWSLETTER", { email }); // TODO: send to ESP
  return NextResponse.json({ ok: true });
}
