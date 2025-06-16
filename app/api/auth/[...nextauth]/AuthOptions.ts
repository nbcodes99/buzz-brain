import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { users } from "@/app/drizzle/schema";
import { eq, or } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { db } from "@/app/drizzle/db";
import type { Adapter } from "next-auth/adapters";

export const authOptions: AuthOptions = {
  adapter: DrizzleAdapter(db) as Adapter,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: { label: "Username or Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.identifier || !credentials?.password) return null;

        const user = await db
          .select()
          .from(users)
          .where(
            or(
              eq(users.email, credentials.identifier),
              eq(users.username, credentials.identifier)
            )
          );

        if (!user[0]) return null;

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user[0].password
        );

        if (!passwordMatch) return null;

        return {
          id: user[0].id,
          email: user[0].email,
          username: user[0].username,
        };
      },
    }),
  ],
  session: {
    strategy: "database",
  },
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.username = user.username;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
