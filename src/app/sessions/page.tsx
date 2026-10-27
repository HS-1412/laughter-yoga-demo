"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Video,
  Calendar,
  Clock,
  Sparkles,
  Users,
  Smile,
  Mic,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { LIVE_SESSIONS_DATA } from "@/data/demoData";
import { useDemo } from "@/context/DemoContext";

const SESSION_FORMATS = [
  "All Formats",
  "Live Online (Zoom Demo)",
  "Interactive Group Practice",
] as const;

const EXPECTATION_CARDS = [
  {
    icon: Smile,
    title: "Warm, Low-Pressure Welcome",
    description:
      "Facilitators begin every session with gentle movement and simple rhythmic clapping so everyone feels comfortable and at ease.",
  },
  {
    icon: Video,
    title: "Camera-Friendly Connection",
    description:
      "Seeing fellow participants smile and laugh naturally amplifies the shared experience, while participation remains relaxed and supportive.",
  },
  {
    icon: Mic,
    title: "Guided Laughter & Breath Rounds",
    description:
      "Alternate between playful 45-second intentional laughter prompts and slow, grounding yogic exhalations.",
  },
  {
    icon: HeartHandshake,
    title: "Peaceful Closing Reflection",
    description:
      "Every circle concludes with a quiet minute of gratitude and stillness so you return to your day feeling centered.",
  },
];

export default function LiveSessionsPage() {
  const { openBookingModal } = useDemo();
  const [selectedFormat, setSelectedFormat] = useState<string>("All Formats");

  const filteredSessions = LIVE_SESSIONS_DATA.filter((session) =>
    selectedFormat === "All Formats" ? true : session.format === selectedFormat
  );

  return (
    <div className="bg-ivory min-h-screen py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-ivory-border pb-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory-warm border border-ivory-border text-xs font-semibold text-sage">
              <Sparkles className="w-3.5 h-3.5 text-marigold" />
              <span>Live Practice Schedule Preview (Demo Content)</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-forest-deep">
              Live Sessions & Guided Circles
            </h1>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              Practise together in real time with experienced facilitators. All dates
              and times shown below are demonstration placeholders illustrating how
              recurring weekly sessions will be presented.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {SESSION_FORMATS.map((fmt) => (
              <button
                key={fmt}
                type="button"
                onClick={() => setSelectedFormat(fmt)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                  selectedFormat === fmt
                    ? "bg-forest text-ivory shadow-sm"
                    : "bg-white border border-ivory-border text-ink-muted hover:bg-ivory-warm hover:text-forest-deep"
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredSessions.map((session) => (
            <article
              key={session.id}
              className="bg-white rounded-2xl border border-ivory-border overflow-hidden shadow-card hover:shadow-editorial transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 bg-ivory-warm overflow-hidden">
                  <img
                    src={session.image}
                    alt={session.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-forest-deep/90 text-ivory backdrop-blur-sm">
                      {session.format}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-sage font-semibold">
                    <span>{session.level}</span>
                    <span className="px-2.5 py-0.5 rounded bg-marigold-soft text-forest-deep border border-marigold/30">
                      {session.spotsLabel}
                    </span>
                  </div>

                  <h2 className="text-2xl font-serif font-bold text-forest-deep">
                    {session.title}
                  </h2>

                  <p className="text-sm text-ink-muted leading-relaxed">
                    {session.description}
                  </p>

                  <div className="pt-2 space-y-2 text-xs text-forest-deep bg-ivory p-4 rounded-xl border border-ivory-border">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-marigold shrink-0" />
                      <span className="font-medium">{session.demoDateLabel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-sage shrink-0" />
                      <span>{session.demoTimeLabel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-ink-subtle shrink-0" />
                      <span className="text-ink-muted">
                        Facilitator: {session.facilitatorPlaceholder}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() =>
                    openBookingModal(
                      session.title,
                      `${session.demoDateLabel} • ${session.demoTimeLabel}`
                    )
                  }
                  className="w-full py-3.5 px-5 rounded-xl bg-forest text-ivory text-sm font-semibold hover:bg-forest-muted transition-colors shadow-sm"
                >
                  Book a Session (Demo)
                </button>
              </div>
            </article>
          ))}
        </div>

        <section className="bg-ivory-warm rounded-3xl p-8 sm:p-12 border border-ivory-border space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-sage">
              First-Timer Friendly
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest-deep">
              What to Expect in Your First Live Session
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPECTATION_CARDS.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white p-6 rounded-2xl border border-ivory-border space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-sage-light flex items-center justify-center text-forest">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-forest-deep">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-ivory-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm text-ink-muted">
              Looking for a private live workshop for your organization, university, or
              community group?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-sage shrink-0"
            >
              <span>Request a Custom Group Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
