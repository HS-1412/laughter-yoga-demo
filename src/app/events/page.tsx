"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, Sparkles, ArrowRight, Users } from "lucide-react";
import { EVENTS_DATA } from "@/data/demoData";
import { useDemo } from "@/context/DemoContext";

export default function EventsPage() {
  const { openBookingModal } = useDemo();
  const [selectedType, setSelectedType] = useState<string>("All");

  const filteredEvents = EVENTS_DATA.filter((evt) =>
    selectedType === "All" ? true : evt.type === selectedType
  );

  return (
    <div className="bg-ivory min-h-screen py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ivory-border pb-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory-warm border border-ivory-border text-xs font-semibold text-sage">
              <Sparkles className="w-3.5 h-3.5 text-marigold" />
              <span>Community Events & Gatherings (Demo Placeholders)</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-forest-deep">
              Special Events & Immersions
            </h1>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              Join seasonal community circles, facilitator introductions, and
              collaborative wellness gatherings. All event dates below are sample
              placeholders for demonstration.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["All", "Community Circle", "Special Workshop"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                  selectedType === type
                    ? "bg-forest text-ivory"
                    : "bg-white border border-ivory-border text-ink-muted hover:bg-ivory-warm"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {filteredEvents.map((event) => (
            <article
              key={event.id}
              className="bg-white rounded-3xl border border-ivory-border shadow-card overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-5 bg-ivory-warm min-h-[260px] relative">
                <img
                  src={event.image}
                  alt={event.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-forest-deep/90 text-ivory">
                    {event.type}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4 text-xs text-ink-muted">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-ivory border border-ivory-border text-forest-deep font-medium">
                      <Calendar className="w-3.5 h-3.5 text-marigold" />
                      {event.demoDateRange}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-ivory border border-ivory-border text-ink-muted">
                      <MapPin className="w-3.5 h-3.5 text-sage" />
                      {event.locationLabel}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest-deep">
                    {event.title}
                  </h2>

                  <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                    {event.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-ivory-border flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-ink-subtle font-medium">
                    Sample Event Entry • No Real Ticket Issued
                  </span>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        openBookingModal(event.title, event.demoDateRange)
                      }
                      className="px-6 py-3 rounded-xl bg-forest text-ivory text-xs sm:text-sm font-semibold hover:bg-forest-muted transition-colors"
                    >
                      Register Interest (Demo)
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="bg-forest-deep text-ivory rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-marigold">
              <Users className="w-4 h-4" />
              <span>Collaborate With Laughter Yogi</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Planning a Wellness Day or Community Retreat?
            </h3>
            <p className="text-sm sm:text-base text-ivory/80 leading-relaxed">
              Invite Laughter Yogi to guide an interactive session for your conference,
              workplace, or community gathering.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-marigold text-forest-deep font-semibold text-sm hover:bg-marigold-hover transition-colors shrink-0"
          >
            <span>Inquire About Event Hosting</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
