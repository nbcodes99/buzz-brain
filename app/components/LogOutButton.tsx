"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/signin" })}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition my-10"
    >
      Log Out
    </button>
  );
}
