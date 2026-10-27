"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sun,
  Menu,
  X,
  GraduationCap,
  ShieldCheck,
  UserCheck,
  ArrowUpRight,
} from "lucide-react";
import { useDemo } from "@/context/DemoContext";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs & Courses" },
  { href: "/sessions", label: "Live Sessions" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { role } = useDemo();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-ivory/95 backdrop-blur-md border-b border-ivory-border">
      <div className="bg-forest-deep text-ivory/90 text-xs py-2 px-4 border-b border-forest-muted">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-marigold" />
            <span className="font-medium">
              Laughter Yogi • Interactive Redesign Demo
            </span>
            <span className="hidden md:inline text-ivory/60">
              (Sample educational & wellness content for client review)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/student"
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                pathname.startsWith("/student")
                  ? "bg-marigold text-forest-deep font-semibold"
                  : "bg-forest-muted/70 hover:bg-forest-muted text-ivory"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Student Dashboard Demo</span>
            </Link>
            <Link
              href="/admin"
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                pathname.startsWith("/admin")
                  ? "bg-marigold text-forest-deep font-semibold"
                  : "bg-forest-muted/70 hover:bg-forest-muted text-ivory"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin Portal Demo</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Laughter Yogi Home"
        >
          <div className="w-10 h-10 rounded-xl bg-forest flex items-center justify-center text-marigold shadow-sm group-hover:bg-forest-muted transition-colors">
            <Sun className="w-5 h-5" />
          </div>
          <div>
            <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-forest-deep leading-none">
              Laughter Yogi
            </span>
            <span className="block text-[11px] uppercase tracking-widest text-sage font-medium mt-1">
              Joy • Breath • Connection
            </span>
          </div>
        </Link>

        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-ivory-warm text-forest-deep font-semibold"
                  : "text-ink-muted hover:text-forest-deep hover:bg-ivory-warm/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium text-forest-deep hover:bg-ivory-warm transition-colors"
          >
            <UserCheck className="w-4 h-4 text-sage" />
            <span>{role === "visitor" ? "Login" : `Role: ${role.toUpperCase()}`}</span>
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-forest text-ivory text-sm font-medium hover:bg-forest-muted transition-colors shadow-sm"
          >
            <span>Explore Programs</span>
            <ArrowUpRight className="w-4 h-4 text-marigold" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2.5 rounded-xl border border-ivory-border text-forest-deep hover:bg-ivory-warm transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-ivory border-b border-ivory-border px-4 pt-3 pb-6 space-y-3">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-ivory-warm text-forest-deep font-semibold"
                    : "text-ink-muted hover:bg-ivory-warm/60 hover:text-forest-deep"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-ivory-border grid grid-cols-2 gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-4 rounded-xl border border-ivory-border text-center text-sm font-medium text-forest-deep hover:bg-ivory-warm"
            >
              Login ({role})
            </Link>
            <Link
              href="/programs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-4 rounded-xl bg-forest text-ivory text-center text-sm font-medium hover:bg-forest-muted"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
