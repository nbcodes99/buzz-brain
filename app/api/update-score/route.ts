import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { db } from "@/app/drizzle/db";
import { eq, sql } from "drizzle-orm";
import { users } from "@/app/drizzle/schema";
import { authOptions } from "../auth/[...nextauth]/AuthOptions";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { score } = await req.json();

  try {
    await db
      .update(users)
      .set({ score: sql`${users.score} + 1` })
      .where(eq(users.email, session.user.email));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to update score" },
      { status: 500 }
    );
  }
}
