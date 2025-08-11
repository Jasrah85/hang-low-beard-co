// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as {
    name?: string;
    email?: string;
    message?: string;
  } | null;
  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json(
      { ok: false, error: "Missing fields" },
      { status: 400 },
    );
  }

  // TODO: plug into email service or store. For now, log.
  console.log("CONTACT", body);

  return NextResponse.json({ ok: true });
}
