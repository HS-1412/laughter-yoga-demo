"use client";

import React from "react";
import Link from "next/link";
import { Sun, Mail, MapPin, Phone, Globe } from "lucide-react";
import { useDemo } from "@/context/DemoContext";

export default function Footer() {
  const { triggerToast } = useDemo();

  const handlePlaceholderClick = (label: string) => {
    triggerToast(
      `${label} (Demo Placeholder)`,
      "This link is a non-destructive placeholder awaiting the client's verified production details.",
      "info"
    );
  };

  return (
    <footer className="bg-forest-deep text-ivory border-t border-forest-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-forest-muted">
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-marigold flex items-center justify-center text-forest-deep font-bold">
                <Sun className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Laughter Yogi
              </span>
            </Link>
            <p className="text-sm text-ivory/80 leading-relaxed max-w-sm">
              A welcoming wellness and online-learning platform dedicated to intentional laughter,
              mindful breathing, and joyful human connection.
            </p>
            <div className="inline-block px-3 py-1.5 rounded-lg bg-forest-muted/80 border border-ivory/10 text-xs text-marigold">
              Frontend Redesign Demo • Sample Content Only
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-marigold">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-ivory/80">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Laughter Yogi</Link></li>
              <li><Link href="/programs" className="hover:text-white transition-colors">Programs & Courses</Link></li>
              <li><Link href="/sessions" className="hover:text-white transition-colors">Live Sessions</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-marigold">
              Sample Programs & Portals
            </h3>
            <ul className="space-y-2.5 text-sm text-ivory/80">
              <li><Link href="/programs/laughter-yoga-foundations" className="hover:text-white transition-colors">Laughter Yoga Foundations</Link></li>
              <li><Link href="/programs/guided-laughter-sessions" className="hover:text-white transition-colors">Guided Laughter Sessions</Link></li>
              <li><Link href="/programs/personal-wellness-programs" className="hover:text-white transition-colors">Personal Wellness Programs</Link></li>
              <li><Link href="/programs/live-group-workshops" className="hover:text-white transition-colors">Live Group Workshops</Link></li>
              <li className="pt-2 border-t border-forest-muted/60">
                <Link href="/student" className="text-marigold hover:underline font-medium">→ Student Dashboard Demo</Link>
              </li>
              <li>
                <Link href="/admin" className="text-marigold hover:underline font-medium">→ Admin Dashboard Demo</Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-marigold">
              Contact Placeholders
            </h3>
            <p className="text-xs text-ivory/60">
              To be populated with the client&apos;s verified contact details prior to launch:
            </p>
            <ul className="space-y-3 text-sm text-ivory/80">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-marigold shrink-0 mt-1" />
                <span>[Client Official Email Placeholder]</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-marigold shrink-0 mt-1" />
                <span>[Client Phone / WhatsApp Placeholder]</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-marigold shrink-0 mt-1" />
                <span>[Studio / Regional Location Placeholder, India]</span>
              </li>
            </ul>

            <div className="pt-3 flex items-center gap-2">
              {["Instagram", "YouTube", "LinkedIn", "Facebook"].map((network) => (
                <button
                  key={network}
                  type="button"
                  onClick={() => handlePlaceholderClick(`${network} Profile Link`)}
                  className="px-2.5 py-1.5 rounded-lg bg-forest-muted text-xs text-ivory/80 hover:text-white hover:bg-sage transition-colors inline-flex items-center gap-1"
                >
                  <Globe className="w-3 h-3 text-marigold" />
                  <span>{network}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/60">
          <p>
            © {new Date().getFullYear()} Laughter Yogi (Redesign Demonstration). All sample content
            is for preview purposes only.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => handlePlaceholderClick("Privacy Policy")}
              className="hover:text-ivory transition-colors"
            >
              Privacy Policy (Demo)
            </button>
            <button
              type="button"
              onClick={() => handlePlaceholderClick("Terms and Conditions")}
              className="hover:text-ivory transition-colors"
            >
              Terms & Conditions (Demo)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
