"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  PlayCircle,
  Calendar,
  User,
  CheckCircle2,
  Circle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen,
  Clock,
  Award,
  ArrowUpRight,
  Video,
} from "lucide-react";
import { PROGRAMS_DATA, LIVE_SESSIONS_DATA } from "@/data/demoData";
import { useDemo } from "@/context/DemoContext";

type StudentTab = "overview" | "player" | "sessions" | "profile";

export default function StudentDashboardPage() {
  const {
    enrolledSlugs,
    enrollInProgramDemo,
    completedLessonIds,
    toggleLessonCompleteDemo,
    openBookingModal,
    triggerToast,
  } = useDemo();

  const [activeTab, setActiveTab] = useState<StudentTab>("overview");
  const [selectedProgramSlug, setSelectedProgramSlug] = useState<string>(
    "laughter-yoga-foundations"
  );

  const [learnerName, setLearnerName] = useState("Sample Learner (Demo Account)");
  const [learnerGoal, setLearnerGoal] = useState(
    "Practise 10 minutes of intentional laughter and breathwork every morning"
  );

  const activeProgram = useMemo(() => {
    return (
      PROGRAMS_DATA.find((p) => p.slug === selectedProgramSlug) ||
      PROGRAMS_DATA[0]
    );
  }, [selectedProgramSlug]);

  const allLessonsInProgram = useMemo(() => {
    return activeProgram.modules.flatMap((mod) =>
      mod.lessons.map((lesson) => ({
        ...lesson,
        moduleTitle: mod.title,
      }))
    );
  }, [activeProgram]);

  const [activeLessonId, setActiveLessonId] = useState<string>(
    allLessonsInProgram[0]?.id || "les-101"
  );

  const currentLessonIndex = useMemo(() => {
    const idx = allLessonsInProgram.findIndex((l) => l.id === activeLessonId);
    return idx >= 0 ? idx : 0;
  }, [allLessonsInProgram, activeLessonId]);

  const currentLesson = allLessonsInProgram[currentLessonIndex] || allLessonsInProgram[0];

  const getProgramProgress = (slug: string) => {
    const prog = PROGRAMS_DATA.find((p) => p.slug === slug);
    if (!prog) return 0;
    const lessons = prog.modules.flatMap((m) => m.lessons);
    if (lessons.length === 0) return 0;
    const completedCount = lessons.filter((l) =>
      completedLessonIds.includes(l.id)
    ).length;
    return Math.round((completedCount / lessons.length) * 100);
  };

  const handleOpenCoursePlayer = (slug: string) => {
    const targetProg =
      PROGRAMS_DATA.find((p) => p.slug === slug) || PROGRAMS_DATA[0];
    setSelectedProgramSlug(targetProg.slug);
    const firstLesson = targetProg.modules[0]?.lessons[0]?.id;
    if (firstLesson) setActiveLessonId(firstLesson);
    setActiveTab("player");
  };

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      setActiveLessonId(allLessonsInProgram[currentLessonIndex - 1].id);
    }
  };

  const handleNextLesson = () => {
    if (currentLessonIndex < allLessonsInProgram.length - 1) {
      setActiveLessonId(allLessonsInProgram[currentLessonIndex + 1].id);
    }
  };

  const enrolledPrograms = PROGRAMS_DATA.filter((p) =>
    enrolledSlugs.includes(p.slug)
  );
  const availablePrograms = PROGRAMS_DATA.filter(
    (p) => !enrolledSlugs.includes(p.slug)
  );

  return (
    <div className="bg-ivory min-h-screen">
      <div className="bg-marigold-soft border-b border-marigold/30 py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs text-forest-deep">
          <div className="flex items-center gap-2 font-medium">
            <Sparkles className="w-4 h-4 text-marigold shrink-0" />
            <span>
              <strong>STUDENT DASHBOARD DEMO:</strong> All courses, progress bars,
              and lessons shown below are interactive sample records stored in
              temporary browser memory.
            </span>
          </div>
          <Link
            href="/programs"
            className="font-semibold text-forest hover:text-sage underline"
          >
            Browse Public Catalog →
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl border border-ivory-border p-5 shadow-card space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-ivory-border">
                <div className="w-11 h-11 rounded-xl bg-forest text-marigold flex items-center justify-center font-serif font-bold text-lg shrink-0">
                  SL
                </div>
                <div className="min-w-0">
                  <p className="font-serif font-bold text-forest-deep text-sm truncate">
                    {learnerName}
                  </p>
                  <span className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded bg-sage-light text-forest mt-0.5">
                    Demo Learner Account
                  </span>
                </div>
              </div>

              <nav aria-label="Student Dashboard Navigation" className="space-y-1.5">
                <button
                  type="button"
                  onClick={() => setActiveTab("overview")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeTab === "overview"
                      ? "bg-forest text-ivory font-semibold shadow-sm"
                      : "text-ink-muted hover:bg-ivory-warm hover:text-forest-deep"
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4 shrink-0" />
                  <span>My Learning Overview</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("player")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeTab === "player"
                      ? "bg-forest text-ivory font-semibold shadow-sm"
                      : "text-ink-muted hover:bg-ivory-warm hover:text-forest-deep"
                  }`}
                >
                  <PlayCircle className="w-4 h-4 shrink-0" />
                  <span>Course Learning Player</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("sessions")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeTab === "sessions"
                      ? "bg-forest text-ivory font-semibold shadow-sm"
                      : "text-ink-muted hover:bg-ivory-warm hover:text-forest-deep"
                  }`}
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Upcoming Live Sessions</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("profile")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeTab === "profile"
                      ? "bg-forest text-ivory font-semibold shadow-sm"
                      : "text-ink-muted hover:bg-ivory-warm hover:text-forest-deep"
                  }`}
                >
                  <User className="w-4 h-4 shrink-0" />
                  <span>Profile & Preferences</span>
                </button>
              </nav>
            </div>

            <div className="bg-ivory-warm rounded-2xl border border-ivory-border p-5 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-sage block">
                Quick Player Switcher
              </span>
              <p className="text-xs text-ink-muted leading-relaxed">
                Jump directly into any sample curriculum inside the interactive
                course player:
              </p>
              <div className="space-y-1.5 pt-1">
                {PROGRAMS_DATA.map((prog) => (
                  <button
                    key={prog.id}
                    type="button"
                    onClick={() => handleOpenCoursePlayer(prog.slug)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                      selectedProgramSlug === prog.slug && activeTab === "player"
                        ? "bg-white text-forest-deep font-semibold border border-ivory-border"
                        : "text-ink-muted hover:bg-white/60 hover:text-forest-deep"
                    }`}
                  >
                    <span className="truncate">{prog.title}</span>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9 space-y-8">
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div className="bg-forest-deep text-ivory rounded-3xl p-7 sm:p-9 shadow-editorial flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2 max-w-xl">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-marigold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Welcome Back • Demo Student View</span>
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      Ready for Today&apos;s Practice, {learnerName.split(" ")[0]}?
                    </h1>
                    <p className="text-sm text-ivory/80 leading-relaxed">
                      Intention: &ldquo;{learnerGoal}&rdquo;
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleOpenCoursePlayer("laughter-yoga-foundations")
                    }
                    className="px-6 py-3.5 rounded-xl bg-marigold text-forest-deep font-semibold text-sm hover:bg-marigold-hover transition-colors shrink-0 inline-flex items-center gap-2 self-start md:self-auto"
                  >
                    <PlayCircle className="w-4 h-4" />
                    <span>Resume Lesson</span>
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-forest-deep">
                      Enrolled Programs (Demo Sample)
                    </h2>
                    <span className="text-xs text-ink-subtle">
                      {enrolledPrograms.length} Active in Demo
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {enrolledPrograms.map((prog) => {
                      const progress = getProgramProgress(prog.slug);
                      return (
                        <div
                          key={prog.id}
                          className="bg-white rounded-2xl border border-ivory-border p-6 shadow-card flex flex-col justify-between space-y-5"
                        >
                          <div className="space-y-3">
                            <div className="flex items-center justify-between gap-2">
                              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-sage-light text-forest">
                                {prog.format}
                              </span>
                              <span className="text-xs font-medium text-ink-subtle">
                                {prog.demoDuration}
                              </span>
                            </div>

                            <h3 className="text-xl font-serif font-bold text-forest-deep">
                              {prog.title}
                            </h3>

                            <p className="text-xs text-ink-muted leading-relaxed">
                              {prog.shortDescription}
                            </p>
                          </div>

                          <div className="space-y-4 pt-2 border-t border-ivory-border">
                            <div className="space-y-1.5">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-medium text-ink-muted">
                                  Demo Lesson Progress
                                </span>
                                <span className="font-bold text-forest-deep">
                                  {progress}%
                                </span>
                              </div>
                              <div className="w-full h-2 rounded-full bg-ivory-warm overflow-hidden">
                                <div
                                  className="h-full bg-sage transition-all duration-300"
                                  style={{ width: `${Math.max(progress, 8)}%` }}
                                />
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <button
                                type="button"
                                onClick={() => handleOpenCoursePlayer(prog.slug)}
                                className="flex-1 py-2.5 px-4 rounded-xl bg-forest text-ivory text-xs font-semibold hover:bg-forest-muted transition-colors inline-flex items-center justify-center gap-1.5"
                              >
                                <PlayCircle className="w-4 h-4 text-marigold" />
                                <span>Continue Learning</span>
                              </button>
                              <Link
                                href={`/programs/${prog.slug}`}
                                className="py-2.5 px-3.5 rounded-xl border border-ivory-border text-xs font-semibold text-forest-deep hover:bg-ivory-warm transition-colors"
                              >
                                Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {availablePrograms.length > 0 && (
                  <div className="space-y-4 pt-4">
                    <h2 className="text-xl font-serif font-bold text-forest-deep">
                      Available Programs to Explore (One-Click Demo Add)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {availablePrograms.map((prog) => (
                        <div
                          key={prog.id}
                          className="bg-ivory-warm/70 rounded-2xl border border-ivory-border p-6 flex flex-col justify-between space-y-4"
                        >
                          <div className="space-y-2">
                            <span className="text-xs font-semibold text-sage">
                              {prog.format} • {prog.demoDuration}
                            </span>
                            <h3 className="text-lg font-serif font-bold text-forest-deep">
                              {prog.title}
                            </h3>
                            <p className="text-xs text-ink-muted leading-relaxed">
                              {prog.shortDescription}
                            </p>
                          </div>
                          <div className="flex items-center gap-3 pt-2">
                            <button
                              type="button"
                              onClick={() =>
                                enrollInProgramDemo(prog.slug, prog.title)
                              }
                              className="px-4 py-2.5 rounded-xl bg-white border border-ivory-border text-xs font-semibold text-forest-deep hover:bg-forest hover:text-ivory transition-colors"
                            >
                              + Add to My Demo Dashboard
                            </button>
                            <Link
                              href={`/programs/${prog.slug}`}
                              className="text-xs font-semibold text-sage hover:underline inline-flex items-center gap-1"
                            >
                              <span>Syllabus</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "player" && currentLesson && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-ivory-border p-5 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-sage block">
                      Interactive Course Learning Player (Demo)
                    </span>
                    <h1 className="text-xl sm:text-2xl font-serif font-bold text-forest-deep">
                      {activeProgram.title}
                    </h1>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-xs text-ink-subtle block">
                        Course Completion
                      </span>
                      <span className="text-sm font-bold text-forest-deep">
                        {getProgramProgress(activeProgram.slug)}% Completed
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-sage-light flex items-center justify-center text-forest">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-8 space-y-6">
                    <div className="rounded-2xl overflow-hidden bg-forest-deep border border-forest-muted shadow-editorial aspect-video relative flex flex-col justify-between p-6 text-ivory">
                      <div className="flex items-center justify-between text-xs">
                        <span className="px-3 py-1 rounded-full bg-forest-muted/90 text-marigold font-semibold">
                          {currentLesson.moduleTitle}
                        </span>
                        <span className="px-2.5 py-1 rounded bg-black/40 text-ivory/80">
                          {currentLesson.durationLabel}
                        </span>
                      </div>

                      <div className="my-auto text-center space-y-3 max-w-md mx-auto">
                        <button
                          type="button"
                          onClick={() =>
                            triggerToast(
                              "Simulated Video Stream",
                              `Playing demo stream for "${currentLesson.title}". Connect Vimeo, Mux, or Cloudflare Stream in production.`,
                              "info"
                            )
                          }
                          aria-label="Play simulated lesson video"
                          className="w-16 h-16 rounded-full bg-marigold text-forest-deep flex items-center justify-center mx-auto hover:scale-105 transition-transform shadow-lg"
                        >
                          <PlayCircle className="w-9 h-9" />
                        </button>
                        <p className="font-serif text-lg sm:text-xl font-bold text-white">
                          {currentLesson.title}
                        </p>
                        <p className="text-xs text-ivory/70">
                          {currentLesson.videoPlaceholderNote}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="w-full h-1.5 rounded-full bg-ivory/20 overflow-hidden">
                          <div className="w-1/3 h-full bg-marigold" />
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-ivory/70">
                          <span>04:12 / {currentLesson.durationLabel}</span>
                          <span>1080p HD • Demo Player</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-ivory-border p-4 flex flex-wrap items-center justify-between gap-3 shadow-card">
                      <button
                        type="button"
                        onClick={handlePrevLesson}
                        disabled={currentLessonIndex === 0}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-ivory-border text-xs font-semibold text-forest-deep hover:bg-ivory-warm disabled:opacity-40 disabled:pointer-events-none transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Previous Lesson</span>
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          toggleLessonCompleteDemo(
                            currentLesson.id,
                            currentLesson.title
                          )
                        }
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                          completedLessonIds.includes(currentLesson.id)
                            ? "bg-sage text-white"
                            : "bg-marigold-soft border border-marigold/40 text-forest-deep hover:bg-marigold/30"
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>
                          {completedLessonIds.includes(currentLesson.id)
                            ? "Completed in Demo"
                            : "Mark Lesson Complete"}
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNextLesson}
                        disabled={
                          currentLessonIndex === allLessonsInProgram.length - 1
                        }
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-forest text-ivory text-xs font-semibold hover:bg-forest-muted disabled:opacity-40 disabled:pointer-events-none transition-colors"
                      >
                        <span>Next Lesson</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="bg-white rounded-2xl border border-ivory-border p-6 sm:p-7 shadow-card space-y-5">
                      <div className="space-y-2">
                        <h2 className="text-xl font-serif font-bold text-forest-deep">
                          About This Lesson
                        </h2>
                        <p className="text-sm text-ink-muted leading-relaxed">
                          {currentLesson.summary}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-ivory-border space-y-3">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-sage">
                          Key Practice Takeaways
                        </h3>
                        <ul className="space-y-2.5">
                          {currentLesson.keyTakeaways.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2.5 text-sm text-ink-muted"
                            >
                              <CheckCircle2 className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="bg-white rounded-2xl border border-ivory-border shadow-card overflow-hidden">
                      <div className="p-4 bg-ivory-warm border-b border-ivory-border flex items-center justify-between">
                        <span className="font-serif font-bold text-sm text-forest-deep flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-sage" />
                          <span>Course Curriculum</span>
                        </span>
                        <span className="text-xs text-ink-subtle">
                          {allLessonsInProgram.length} Lessons
                        </span>
                      </div>

                      <div className="divide-y divide-ivory-border">
                        {activeProgram.modules.map((mod) => (
                          <div key={mod.id} className="p-4 space-y-2.5">
                            <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                              {mod.title}
                            </p>
                            <div className="space-y-1.5">
                              {mod.lessons.map((lesson) => {
                                const isCurrent = lesson.id === currentLesson.id;
                                const isDone = completedLessonIds.includes(
                                  lesson.id
                                );
                                return (
                                  <button
                                    key={lesson.id}
                                    type="button"
                                    onClick={() => setActiveLessonId(lesson.id)}
                                    className={`w-full text-left p-3 rounded-xl text-xs transition-colors flex items-start gap-2.5 ${
                                      isCurrent
                                        ? "bg-forest text-ivory font-semibold"
                                        : "hover:bg-ivory-warm text-ink-muted"
                                    }`}
                                  >
                                    {isDone ? (
                                      <CheckCircle2
                                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                                          isCurrent ? "text-marigold" : "text-sage"
                                        }`}
                                      />
                                    ) : (
                                      <Circle className="w-4 h-4 shrink-0 mt-0.5 opacity-60" />
                                    )}
                                    <div className="flex-1 min-w-0">
                                      <p className="truncate">{lesson.title}</p>
                                      <span
                                        className={`inline-flex items-center gap-1 text-[11px] mt-0.5 ${
                                          isCurrent
                                            ? "text-ivory/80"
                                            : "text-ink-subtle"
                                        }`}
                                      >
                                        <Clock className="w-3 h-3" />
                                        {lesson.durationLabel}
                                      </span>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "sessions" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-ivory-border p-6 shadow-card">
                  <h1 className="text-2xl font-serif font-bold text-forest-deep mb-1">
                    Upcoming Live Practice Circles (Demo Schedule)
                  </h1>
                  <p className="text-sm text-ink-muted">
                    Reserve a demo spot in any recurring group session below to
                    preview the student booking confirmation flow.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {LIVE_SESSIONS_DATA.map((sess) => (
                    <div
                      key={sess.id}
                      className="bg-white rounded-2xl border border-ivory-border p-6 shadow-card flex flex-col justify-between space-y-5"
                    >
                      <div className="space-y-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-light text-forest text-xs font-semibold">
                          <Video className="w-3.5 h-3.5" />
                          {sess.format}
                        </span>
                        <h2 className="text-xl font-serif font-bold text-forest-deep">
                          {sess.title}
                        </h2>
                        <p className="text-xs text-ink-muted leading-relaxed">
                          {sess.description}
                        </p>
                        <div className="p-3.5 rounded-xl bg-ivory border border-ivory-border text-xs space-y-1 text-forest-deep">
                          <p className="font-semibold">{sess.demoDateLabel}</p>
                          <p className="text-ink-muted">{sess.demoTimeLabel}</p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          openBookingModal(
                            sess.title,
                            `${sess.demoDateLabel} • ${sess.demoTimeLabel}`
                          )
                        }
                        className="w-full py-3 px-4 rounded-xl bg-forest text-ivory text-xs font-semibold hover:bg-forest-muted transition-colors"
                      >
                        Reserve Demo Spot
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <div className="bg-white rounded-2xl border border-ivory-border p-7 sm:p-8 shadow-card max-w-2xl space-y-6">
                <div className="border-b border-ivory-border pb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sage">
                    Demo Profile Settings
                  </span>
                  <h1 className="text-2xl font-serif font-bold text-forest-deep mt-1">
                    Learner Profile & Practice Intention
                  </h1>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    triggerToast(
                      "Demo Profile Updated",
                      "Your display name and daily intention have been updated for this browser session.",
                      "success"
                    );
                  }}
                  className="space-y-5"
                >
                  <div>
                    <label
                      htmlFor="student-demo-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2"
                    >
                      Display Name (Demo Only)
                    </label>
                    <input
                      id="student-demo-name"
                      type="text"
                      value={learnerName}
                      onChange={(e) => setLearnerName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-ivory-border text-sm text-ink focus:border-sage focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="student-demo-goal"
                      className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2"
                    >
                      Personal Practice Intention
                    </label>
                    <input
                      id="student-demo-goal"
                      type="text"
                      value={learnerGoal}
                      onChange={(e) => setLearnerGoal(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-ivory-border text-sm text-ink focus:border-sage focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-forest text-ivory text-sm font-semibold hover:bg-forest-muted transition-colors"
                  >
                    Save Demo Preferences
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
