"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/roadmaps", label: "Roadmaps" },
  { href: "/courses", label: "Courses" },
  { href: "/labs", label: "Labs" },
  { href: "/certifications", label: "Certifications" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 shrink-0">
          <span className="font-mono text-lg font-bold tracking-tight">
            <span className="text-green-400">abhi</span>
            <span className="text-zinc-500">@</span>
            <span className="text-blue-400">KultKloud</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="/resources"
            className="px-4 py-1.5 rounded-md bg-green-500 text-zinc-950 text-sm font-semibold hover:bg-green-400 transition-colors"
          >
            Free Resources
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 rounded-md hover:bg-zinc-800 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-md text-sm transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-zinc-800 mt-2">
            <Link
              href="/resources"
              className="block px-3 py-2 rounded-md bg-green-500 text-zinc-950 font-semibold text-center text-sm hover:bg-green-400 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Free Resources
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
