"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileNav({
  links
}: {
  links: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-pitch-700 text-mist-100"
      >
        <span className="relative block h-3 w-4">
          <span
            className={`absolute left-0 top-0 h-[2px] w-4 bg-current transition-transform ${
              open ? "translate-y-[5px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[5px] h-[2px] w-4 bg-current transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[10px] h-[2px] w-4 bg-current transition-transform ${
              open ? "-translate-y-[5px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open && (
        <nav className="absolute inset-x-0 top-16 border-b border-pitch-700 bg-pitch-950 px-5 py-4">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base text-mist-100 hover:bg-pitch-800"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/search"
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-3 text-base text-mist-100 hover:bg-pitch-800"
              >
                Search
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
