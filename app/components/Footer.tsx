import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="bg-zinc-900 w-full flex flex-col justify-between px-6 py-10">
      <div className="flex flex-col md:flex-row items-center justify-around mb-16 border-b-2 border-zinc-800 pb-10">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-bold text-amber-700 text-2xl">
            Buzz<span className="text-zinc-300">Brain</span>
          </h1>
          <h1 className="font-bold mt-10 text-base text-zinc-200">Contact</h1>
          <p className="text-sm text-zinc-400 font-medium mb-8">
            echoStacks.dev@gmail.com
          </p>
          <div className="flex items-center gap-x-6">
            <a href="https://www.instagram.com/nb.codes/">
              <FaInstagram />
            </a>
            <a href="https://github.com/nbcodes99">
              <FaGithub />
            </a>
            <a href="https://nbcodes.substack.com/">
              <SiSubstack />
            </a>
            <a href="https://www.youtube.com/@nb.codes99">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="flex items-center gap-x-14 mt-20 md:mt-0 ">
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-xl mb-3">Help & Info</h1>
            <span className="flex flex-col gap-y-2">
              <a href="/" className="text-sm text-zinc-300">
                About Us
              </a>
              <a href="/" className="text-sm text-zinc-300">
                Contact Us
              </a>
              <a href="/" className="text-sm text-zinc-300">
                FAQ
              </a>
              <a href="/" className="text-sm text-zinc-300">
                Support
              </a>
            </span>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-xl mb-3">Quick Links</h1>
            <span className="flex flex-col gap-y-2">
              <a href="/" className="text-sm text-zinc-300">
                Play Quiz
              </a>
              <a href="/" className="text-sm text-zinc-300">
                Categories
              </a>
              <a href="/" className="text-sm text-zinc-300">
                Leaderboard
              </a>
              <a href="/" className="text-sm text-zinc-300">
                Profile
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <p className="text-zinc-500 flex items-center text-sm font-medium">
          <FaRegCopyright className="mr-2 text-zinc-300" />
          2025{" "}
          <span className="ml-1 text-amber-700">
            Buzz<span className="text-zinc-300">Brain</span>
          </span>
          . All rights reserved.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-6 md:mt-0">
          <p className="underline text-zinc-500 cursor-pointer text-sm">
            Privacy Policy
          </p>
          <p className="underline text-zinc-500 cursor-pointer text-sm">
            Terms of Service
          </p>
          <p className="underline text-zinc-500 cursor-pointer text-sm">
            Cookies
          </p>
        </div>
      </div>
    </section>
  );
}
