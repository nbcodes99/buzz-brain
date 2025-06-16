import { db } from "@/app/drizzle/db";
import { users } from "@/app/drizzle/schema";
import { desc } from "drizzle-orm";

export default async function LeaderboardPage() {
  const topUsers = await db
    .select({ username: users.username, score: users.score })
    .from(users)
    .orderBy(desc(users.score))
    .limit(10);

  return (
    <section className="pt-24 px-6">
      <h1 className="text-2xl font-bold mb-6 text-white">🏆 Leaderboard</h1>
      <ul className="text-white space-y-4">
        {topUsers.map((user, i) => (
          <li
            key={i}
            className="bg-zinc-800 p-4 rounded shadow flex justify-between"
          >
            <span>
              {i + 1}. {user.username}
            </span>
            <span>{user.score} pts</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
