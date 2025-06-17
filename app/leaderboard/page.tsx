import { db } from "@/app/drizzle/db";
import { users } from "@/app/drizzle/schema";
import { desc } from "drizzle-orm";
import { FaTrophy } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";

export default async function LeaderboardPage() {
  const topUsers = await db
    .select({ username: users.username, score: users.score })
    .from(users)
    .orderBy(desc(users.score))
    .limit(10);

  return (
    <section className="pt-24 px-6 flex flex-col items-center w-full">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-zinc-100 flex items-center gap-x-4 mt-10">
        <FaTrophy className="text-amber-600" /> Leaderboard
      </h1>
      {topUsers.length > 0 ? (
        <div className="w-full max-w-3xl flex flex-col items-center">
          <table className="min-w-full border-collapse rounded-md animate-bounceIn mb-8">
            <thead>
              <tr className="bg-amber-800 text-zinc-200">
                <th className="text-left py-3 px-4 font-medium">Rank</th>
                <th className="text-left py-3 px-4 font-medium">Name</th>
                <th className="text-left py-3 px-4 font-medium">Points</th>
              </tr>
            </thead>
            <tbody>
              {topUsers.map((user, i) => (
                <tr
                  key={i}
                  className={`${
                    i === 0
                      ? "bg-amber-900 font-medium"
                      : "bg-zinc-900 text-zinc-300"
                  } border-b border-zinc-800`}
                >
                  <td className="py-3 px-4 text-zinc-300">{i + 1}</td>
                  <td className="text-zinc-300">
                    {/* {i === 0 && <IoIosStarHalf className="text-amber-600" />} */}
                    {user.username}
                  </td>
                  <td className="py-3 px-4 text-zinc-300">{user.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-zinc-400 text-center">
            Get on the{" "}
            <a href="/signin" className="text-orange-500 underline">
              leaderboard,
            </a>{" "}
            if you're not signed in.
          </p>
        </div>
      ) : (
        <p className="text-zinc-400">No scores yet. Be the first to play!</p>
      )}
    </section>
  );
}
