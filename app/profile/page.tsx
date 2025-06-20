import { getServerSession } from "next-auth";
import { db } from "@/app/drizzle/db";
import { users } from "@/app/drizzle/schema";
import { eq } from "drizzle-orm";
import { authOptions } from "../api/auth/[...nextauth]/AuthOptions";
import LogoutButton from "../components/LogOutButton";
import Link from "next/link";
import { format } from "date-fns";
import ProfileInfoCard from "../components/ProfileInfoCard";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-zinc-400 flex flex-col items-center">
          You're not Signed In.{" "}
          <Link href="/signin" className="text-orange-500 underline">
            Sign in
          </Link>
        </p>
      </div>
    );
  }

  const dbUser = await db.query.users.findFirst({
    where: eq(users.email, session.user.email),
  });

  if (!dbUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-red-500">User not found in database.</p>
      </div>
    );
  }

  return (
    <section className="pb-24 pt-36 px-8 md:px-20 flex flex-col items-center w-full">
      <div className="flex flex-col items-center px-8 md:px-24 py-10 bg-zinc-900 shadow-md rounded-md w-full max-w-xl">
        <h1 className="text-3xl font-bold text-white mb-6">Your Profile</h1>

        <div className="space-y-4 text-zinc-300 w-full flex flex-col items-start">
          <ProfileInfoCard title={"Username"} value={dbUser.username} />
          <ProfileInfoCard title={"Email"} value={dbUser.email} />
          <ProfileInfoCard
            title={"Total"}
            value={dbUser.totalQuestionsAttempted}
          />
          <ProfileInfoCard title={"Score"} value={dbUser.score} />
          <ProfileInfoCard
            title={"Joined"}
            value={format(new Date(dbUser.createdAt), "do MMMM, yyyy")}
          />
        </div>
        <LogoutButton />
      </div>
    </section>
  );
}
