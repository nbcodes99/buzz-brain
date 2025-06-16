// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/lib/db";
import { compare } from "bcryptjs";
import { users } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import AuthOptions from "./AuthOptions";

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };
