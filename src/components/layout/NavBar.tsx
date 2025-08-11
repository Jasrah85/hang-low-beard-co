"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/logo/Logo";
import DarkModeToggle from "@/components/theme/DarkModeToggle";
import MobileNavSheet from "@/components/layout/MobileNavSheet";
import MiniCartButton from "@/components/cart/MiniCartButton";

const NAV = [
  { href: "/products", label: "Products" },
  { href: "/scents", label: "Scents" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar({ cartCount = 0 }: { cartCount?: number }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            className="mr-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-stone-300 lg:hidden dark:border-stone-700"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <span className="text-xl">☰</span>
          </button>
          <Logo />
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-stone-700 hover:text-stone-900 dark:text-stone-200 dark:hover:text-white"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <MiniCartButton />
          <DarkModeToggle />
        </div>
      </div>

      <MobileNavSheet open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <div className="mb-6 flex items-center justify-between">
          <Logo compact />
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-stone-300 dark:border-stone-700"
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col gap-3">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-xl px-3 py-2 text-base font-medium hover:bg-stone-100 dark:hover:bg-stone-800"
              onClick={() => setMobileOpen(false)}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </MobileNavSheet>
    </div>
  );
}
