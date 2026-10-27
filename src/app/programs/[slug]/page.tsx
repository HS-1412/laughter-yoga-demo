"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Clock,
  Layers,
  CheckCircle2,
  PlayCircle,
  Sparkles,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Calendar,
} from "lucide-react";
import { PROGRAMS_DATA } from "@/data/demoData";
import { useDemo } from "@/context/DemoContext";

export default function ProgramDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const program = PROGRAMS_DATA.find((p) => p.slug === slug) || PROGRAMS_DATA[0];

  const { enrolledSlugs, enrollInProgramDemo, openBookingModal } = useDemo();
  const isEnrolled = enrolledSlugs.includes(program.slug);

  const [openModuleIds, setOpenModuleIds] = useState<string[]>(
    program.modules.map((m) => m.id)
  );

  const toggleModule = (modId: string) => {
    setOpenModuleIds((prev) =>
      prev.includes(modId) ? prev.filter((id) => id !== modId) : [...prev, modId]
    );
  };

  return (
    <div className="bg-ivory min-h-screen pb-20">
      <section className="bg-forest-deep text-ivory py-14 lg:py-20 border-b border-forest-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-marigold hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Programs</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-marigold text-forest-deep">
                  {program.format}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-forest-muted text-ivory border border-ivory/15">
                  {program.level}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-forest-muted text-marigold border border-marigold/30">
                  Demo Curriculum Preview
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
                {program.title}
              </h1>

              <p className="text-base sm:text-lg text-ivory/85 leading-relaxed">
                {program.subtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-ivory/80">
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 text-marigold" />
                  {program.demoDuration}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-marigold" />
                  {program.demoScheduleNote}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Layers className="w-4 h-4 text-marigold" />
                  {program.modules.length}{" "}
                  {program.modules.length === 1 ? "Module" : "Modules"}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-ivory text-ink rounded-2xl p-6 sm:p-7 border border-ivory-border shadow-editorial space-y-5">
                <div className="relative h-48 rounded-xl overflow-hidden bg-ivory-warm">
                  <img
                    src={program.image}
                    alt={program.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center justify-between border-b border-ivory-border pb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-ink-subtle block">
                      Program Access Status
                    </span>
                    <span className="font-serif font-bold text-lg text-forest-deep">
                      {program.demoFeeLabel}
                    </span>
                  </div>
                  <Sparkles className="w-5 h-5 text-marigold" />
                </div>

                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => enrollInProgramDemo(program.slug, program.title)}
                    className="w-full py-3.5 px-5 rounded-xl bg-forest text-ivory font-semibold text-sm hover:bg-forest-muted transition-colors shadow-sm"
                  >
                    {isEnrolled
                      ? "✓ Added to Your Student Demo (Click to Verify)"
                      : "Add to Student Dashboard Demo"}
                  </button>

                  <Link
                    href="/student"
                    className="w-full py-3.5 px-5 rounded-xl bg-marigold-soft border border-marigold/40 text-forest-deep font-semibold text-sm hover:bg-marigold/20 transition-colors flex items-center justify-center gap-2"
                  >
                    <GraduationCap className="w-4 h-4 text-forest" />
                    <span>Open Interactive Course Player Demo</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      openBookingModal(
                        `${program.title} — Orientation Q&A`,
                        program.demoScheduleNote
                      )
                    }
                    className="w-full py-3 px-4 rounded-xl border border-ivory-border text-ink-muted font-medium text-xs hover:bg-ivory-warm transition-colors"
                  >
                    Preview Live Orientation Booking Modal
                  </button>
                </div>

                <p className="text-[11px] text-ink-subtle text-center">
                  All actions above are safe frontend demonstrations—no real payment or
                  account registration is triggered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest-deep">
                Program Overview
              </h2>
              <p className="text-base text-ink-muted leading-relaxed">
                {program.fullDescription}
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-ivory-border shadow-card space-y-5">
              <h3 className="text-xl font-serif font-bold text-forest-deep">
                What You Will Experience (Sample Highlights)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                    <span className="text-sm text-ink-muted leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest-deep">
                  Sample Curriculum & Modules
                </h2>
                <span className="text-xs font-medium text-ink-subtle">
                  Click any module to expand lessons
                </span>
              </div>

              <div className="space-y-4">
                {program.modules.map((mod) => {
                  const isOpen = openModuleIds.includes(mod.id);
                  return (
                    <div
                      key={mod.id}
                      className="bg-white rounded-2xl border border-ivory-border overflow-hidden shadow-card"
                    >
                      <button
                        type="button"
                        onClick={() => toggleModule(mod.id)}
                        className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-ivory-warm/50 transition-colors"
                      >
                        <div>
                          <h3 className="text-lg font-serif font-bold text-forest-deep">
                            {mod.title}
                          </h3>
                          <p className="text-xs text-ink-subtle mt-0.5">
                            {mod.lessons.length}{" "}
                            {mod.lessons.length === 1 ? "Lesson" : "Lessons"} • Demo
                            Content
                          </p>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-sage" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-ink-subtle" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="border-t border-ivory-border divide-y divide-ivory-border">
                          {mod.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="p-5 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-ivory/40"
                            >
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <PlayCircle className="w-4 h-4 text-sage shrink-0" />
                                  <span className="font-semibold text-sm text-forest-deep">
                                    {lesson.title}
                                  </span>
                                </div>
                                <p className="text-xs text-ink-muted pl-6">
                                  {lesson.summary}
                                </p>
                              </div>

                              <div className="flex items-center gap-3 pl-6 sm:pl-0 shrink-0">
                                <span className="text-xs font-medium px-2.5 py-1 rounded bg-ivory-warm text-ink-muted">
                                  {lesson.durationLabel}
                                </span>
                                <Link
                                  href="/student"
                                  className="text-xs font-semibold text-forest hover:text-sage underline"
                                >
                                  Preview Lesson
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-ivory-warm p-7 rounded-2xl border border-ivory-border space-y-4">
              <h3 className="text-xl font-serif font-bold text-forest-deep">
                Who This Program Is For
              </h3>
              <ul className="space-y-3">
                {program.whoIsItFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-ink-muted leading-relaxed"
                  >
                    <span className="w-2 h-2 rounded-full bg-marigold mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-ivory-border space-y-4">
              <h3 className="text-lg font-serif font-bold text-forest-deep">
                Have Questions About Group or Custom Formats?
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                We offer custom sessions for communities, workplaces, and private
                groups. Try our interactive inquiry form to preview how prospective
                learners reach out.
              </p>
              <Link
                href="/contact"
                className="inline-block w-full py-3 px-4 rounded-xl border border-ivory-border text-center text-xs font-semibold text-forest-deep hover:bg-ivory-warm transition-colors"
              >
                Go to Contact & Inquiry Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
