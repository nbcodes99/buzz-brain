import React from "react";
import Link from "next/link";

export default function SignIn() {
  return (
    <section className="pb-24 pt-36 px-8 md:px-20 flex flex-col items-center w-full">
      <div className="flex flex-col items-center px-8 md:px-24 py-10 bg-zinc-900 shadow-sm rounded-md animate-bounceIn">
        <h1 className="font-bold text-2xl md:text-4xl text-zinc-300 mb-2">
          Sign <span className="text-amber-600">In</span>
        </h1>
        <p className="text-sm font-medium text-zinc-700 text-center mb-8">
          Enter details to sign in
        </p>
        <form
          action=""
          className="flex flex-col items-center gap-y-6 w-full p-4"
        >
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-3 md:px-4 py-2 md:py-3 bg-zinc-900 text-white border placeholder-zinc-500 border-zinc-700 rounded-md focus:outline-none focus:border-zinc-400 transition-colors"
          />
          <input
            type="password"
            placeholder="Your password"
            className="w-full px-3 md:px-4 py-2 md:py-3 bg-zinc-900 text-white border placeholder-zinc-500 border-zinc-700 rounded-md focus:outline-none focus:border-zinc-400 transition-colors"
          />
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-zinc-200 font-medium py-2 px-6 rounded-md shadow transition-colors"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-center text-zinc-600 my-6 font-medium">
          Don't have an account,{" "}
          <Link href="/signup" className="text-indigo-600">
            signup
          </Link>
        </p>
      </div>
    </section>
  );
}
