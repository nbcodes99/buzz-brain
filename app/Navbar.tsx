"use client";

import Link from "next/link";
import React, { useActionState, useState } from "react";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import { FaHamburger } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";

export default function Navbar() {
  const currentPath = usePathname();
  const links = [
    { label: "Play Quiz", href: "/playquiz" },
    { label: "Categories", href: "/categories" },
    { label: "Leaderboard", href: "/leaderboard" },
    { label: "Profile", href: "/profile" },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full">
        <nav className="flex items-center justify-between p-8 bg-amber-800 shadow-md">
          <Link href="/" className="text-zinc-900 font-bold text-xl">
            Buzz<span className="text-zinc-300">Brain</span>
          </Link>
          <div className="hamburger" onClick={toggleNavbar}>
            {isOpen ? (
              <GiCrossMark className="transition-colors text-3xl" />
            ) : (
              <FaHamburger className="transition-colors text-3xl" />
            )}
          </div>
          <ul className={isOpen ? "open animate-zoomIn" : ""}>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={classnames({
                    " text-zinc-50 border-b-2 border-zinc-200 pb-1 translate-y-10":
                      link.href === currentPath,
                    "text-zinc-100": link.href !== currentPath,
                    "transition-colors font-medium": true,
                  })}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
