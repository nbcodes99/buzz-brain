import { db } from "@/app/drizzle/db";
import { users } from "@/app/drizzle/schema";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import { eq, or } from "drizzle-orm";

export async function POST(req: Request) {
  const { username, email, password } = await req.json();

  const hashed = await hash(password, 10);

  const existingUsers = await db
    .select()
    .from(users)
    .where(or(eq(users.email, email), eq(users.username, username)));

  if (existingUsers.length > 0) {
    alert("User with this email or username already exists.");
  }

  await db.insert(users).values({
    username,
    email,
    password: hashed,
  });

  return NextResponse.json({ success: true }, { status: 201 });
}
