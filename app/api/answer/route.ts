import { db } from "@/app/drizzle/db";
import { users } from "@/app/drizzle/schema";
import { getServerSession } from "next-auth";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/AuthOptions";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json(null, { status: 401 });

  const { correct } = await req.json();
  if (correct) {
    const [u] = await db
      .select({ score: users.score })
      .from(users)
      .where(eq(users.email, session.user.email));
    const newScore = (u?.score || 0) + 1;

    await db
      .update(users)
      .set({ score: newScore })
      .where(eq(users.email, session.user.email));
  }

  return NextResponse.json({ success: true });
}
