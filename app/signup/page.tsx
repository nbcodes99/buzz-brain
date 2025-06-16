"use client";

import { useRouter } from "next/navigation";
import { use, useState } from "react";
import Link from "next/link";
import { Callout } from "@radix-ui/themes";
import { GrStatusGood } from "react-icons/gr";
import { BiError } from "react-icons/bi";

export default function SignUp() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess(!false);
      setForm({ username: "", email: "", password: "" });

      setTimeout(() => {
        setSuccess(false);
        router.push("/signin");
      }, 4000);
    } else {
      setError(!false);
      setForm({ username: "", email: "", password: "" });
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  };
  return (
    <section className="pb-24 pt-36 px-8 md:px-20 flex flex-col items-center w-full">
      <div className="flex flex-col items-center px-8 md:px-24 py-10 bg-zinc-900 shadow-sm rounded-md animate-bounceIn">
        <h1 className="font-bold text-2xl md:text-4xl text-zinc-300 mb-2">
          Create <span className="text-amber-600">Account</span>
        </h1>
        <p className="text-sm font-medium text-zinc-600 text-center mb-8">
          Enter details to create your account
        </p>
        {success && (
          <Callout.Root color="green" variant="soft" className="w-full">
            <Callout.Icon>
              <GrStatusGood />
            </Callout.Icon>
            <Callout.Text>Account Created Successfully!</Callout.Text>
          </Callout.Root>
        )}
        {error && (
          <Callout.Root color="red" variant="soft">
            <Callout.Icon>
              <BiError />
            </Callout.Icon>
            <Callout.Text>An error occurred!</Callout.Text>
          </Callout.Root>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-y-6 w-full p-4"
        >
          <input
            type="text"
            placeholder="Your username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="w-full px-3 md:px-4 py-2 md:py-3 bg-zinc-900 text-white border placeholder-zinc-500 border-zinc-700 rounded-md focus:outline-none focus:border-zinc-400 transition-colors"
          />
          <input
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-3 md:px-4 py-2 md:py-3 bg-zinc-900 text-white border placeholder-zinc-500 border-zinc-700 rounded-md focus:outline-none focus:border-zinc-400 transition-colors"
          />
          <input
            type="password"
            placeholder="Your password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-3 md:px-4 py-2 md:py-3 bg-zinc-900 text-white border placeholder-zinc-500 border-zinc-700 rounded-md focus:outline-none focus:border-zinc-400 transition-colors"
          />
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-zinc-200 font-medium py-2 px-6 rounded-md shadow transition-colors"
          >
            Create
          </button>
        </form>
        <p className="text-sm text-center text-zinc-600 my-6 font-medium">
          Already have an account?{" "}
          <Link href="/signin" className="text-indigo-600">
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
}
