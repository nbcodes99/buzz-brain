import { db } from "@/app/drizzle/db";
import { users } from "@/app/drizzle/schema";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, email, password } = await req.json();

  const hashed = await hash(password, 10);

  await db.insert(users).values({
    username,
    email,
    password: hashed,
  });

  return NextResponse.json({ success: true }, { status: 201 });
}
