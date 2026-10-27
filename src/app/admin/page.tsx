"use client";

import React, { useState, useMemo } from "react";
import {
  LayoutGrid,
  BookOpen,
  Layers,
  Users,
  ClipboardList,
  CreditCard,
  Video,
  UploadCloud,
  Settings,
  Search,
  Plus,
  Edit3,
  Eye,
  X,
  ShieldAlert,
  Sparkles,
  FileVideo,
} from "lucide-react";
import {
  PROGRAMS_DATA,
  ADMIN_STUDENTS_SAMPLE,
  ADMIN_PAYMENTS_SAMPLE,
  LIVE_SESSIONS_DATA,
  ProgramItem,
  AdminPaymentRecord,
} from "@/data/demoData";
import { useDemo } from "@/context/DemoContext";

type AdminSection =
  | "overview"
  | "courses"
  | "lessons"
  | "students"
  | "enrolments"
  | "payments"
  | "sessions"
  | "resources"
  | "settings";

export default function AdminDashboardPage() {
  const { triggerToast } = useDemo();

  const [activeSection, setActiveSection] = useState<AdminSection>("overview");
  const [coursesList, setCoursesList] = useState<ProgramItem[]>(PROGRAMS_DATA);
  const [editingCourse, setEditingCourse] = useState<ProgramItem | null>(null);

  const [studentSearch, setStudentSearch] = useState("");
  const [studentStatusFilter, setStudentStatusFilter] = useState<string>("All");

  const [inspectingPayment, setInspectingPayment] =
    useState<AdminPaymentRecord | null>(null);

  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadType, setUploadType] = useState("Guided Video Lesson (MP4)");

  const filteredStudents = useMemo(() => {
    return ADMIN_STUDENTS_SAMPLE.filter((stu) => {
      const matchesQuery =
        stu.namePlaceholder.toLowerCase().includes(studentSearch.toLowerCase()) ||
        stu.emailPlaceholder.toLowerCase().includes(studentSearch.toLowerCase()) ||
        stu.enrolledProgram.toLowerCase().includes(studentSearch.toLowerCase());
      const matchesStatus =
        studentStatusFilter === "All" || stu.status === studentStatusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [studentSearch, studentStatusFilter]);

  const handleSaveCourseEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCourse) return;
    setCoursesList((prev) =>
      prev.map((c) => (c.id === editingCourse.id ? editingCourse : c))
    );
    triggerToast(
      `Updated "${editingCourse.title}" (Demo)`,
      "Course changes saved in temporary browser state for this demonstration.",
      "success"
    );
    setEditingCourse(null);
  };

  const handleSimulatedUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadTitle.trim()) return;
    triggerToast(
      "Simulated Media Upload Complete",
      `"${uploadTitle}" (${uploadType}) added to demo resource preview. No files were uploaded to a server.`,
      "success"
    );
    setUploadTitle("");
    setUploadModalOpen(false);
  };

  const NAV_ITEMS: { id: AdminSection; label: string; icon: React.ElementType }[] = [
    { id: "overview", label: "Overview Dashboard", icon: LayoutGrid },
    { id: "courses", label: "Course Management", icon: BookOpen },
    { id: "lessons", label: "Lesson Management", icon: Layers },
    { id: "students", label: "Student Directory", icon: Users },
    { id: "enrolments", label: "Enrolment Records", icon: ClipboardList },
    { id: "payments", label: "Payment Logs (Demo)", icon: CreditCard },
    { id: "sessions", label: "Live Sessions", icon: Video },
    { id: "resources", label: "Video & Resources", icon: UploadCloud },
    { id: "settings", label: "Platform Settings", icon: Settings },
  ];

  return (
    <div className="bg-ivory min-h-screen">
      <div className="bg-forest-deep text-ivory py-3 px-4 border-b border-forest-muted">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-marigold shrink-0" />
            <span>
              <strong>ADMIN PORTAL DEMO:</strong> This interface demonstrates how
              courses, students, and sessions are managed. All records are sample
              data—not connected to a live database or payment processor.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setUploadModalOpen(true)}
              className="px-3 py-1 rounded-md bg-marigold text-forest-deep font-semibold hover:bg-marigold-hover transition-colors"
            >
              + Upload Resource (Demo)
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-ivory-border p-4 shadow-card space-y-1">
              <div className="px-3 py-2.5 border-b border-ivory-border mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-sage block">
                  Laughter Yogi CMS
                </span>
                <p className="font-serif font-bold text-base text-forest-deep">
                  Admin Console (Demo)
                </p>
              </div>

              {NAV_ITEMS.map((item) => {
                const IconComponent = item.icon;
                const active = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors ${
                      active
                        ? "bg-forest text-ivory font-semibold shadow-sm"
                        : "text-ink-muted hover:bg-ivory-warm hover:text-forest-deep"
                    }`}
                  >
                    <IconComponent className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="lg:col-span-9 space-y-6">
            {activeSection === "overview" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-ivory-border shadow-card">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-sage">
                      Executive Summary (Demo Data)
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-serif font-bold text-forest-deep">
                      Platform Overview
                    </h1>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    <button
                      type="button"
                      onClick={() => setActiveSection("courses")}
                      className="px-4 py-2.5 rounded-xl bg-forest text-ivory text-xs font-semibold hover:bg-forest-muted transition-colors"
                    >
                      Manage Courses
                    </button>
                    <button
                      type="button"
                      onClick={() => setUploadModalOpen(true)}
                      className="px-4 py-2.5 rounded-xl border border-ivory-border text-forest-deep text-xs font-semibold hover:bg-ivory-warm transition-colors"
                    >
                      Open Upload Interface
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-ivory-border shadow-card">
                    <span className="text-xs text-ink-subtle font-medium">
                      Sample Programs
                    </span>
                    <p className="text-2xl font-serif font-bold text-forest-deep mt-1">
                      {coursesList.length} Active
                    </p>
                    <span className="text-[11px] text-sage font-medium">
                      Demo Catalog Ready
                    </span>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-ivory-border shadow-card">
                    <span className="text-xs text-ink-subtle font-medium">
                      Sample Learners
                    </span>
                    <p className="text-2xl font-serif font-bold text-forest-deep mt-1">
                      {ADMIN_STUDENTS_SAMPLE.length} Records
                    </p>
                    <span className="text-[11px] text-sage font-medium">
                      Simulated Directory
                    </span>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-ivory-border shadow-card">
                    <span className="text-xs text-ink-subtle font-medium">
                      Live Circles
                    </span>
                    <p className="text-2xl font-serif font-bold text-forest-deep mt-1">
                      {LIVE_SESSIONS_DATA.length} Scheduled
                    </p>
                    <span className="text-[11px] text-sage font-medium">
                      Weekly Demo Slots
                    </span>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-ivory-border shadow-card">
                    <span className="text-xs text-ink-subtle font-medium">
                      Payment Logs
                    </span>
                    <p className="text-2xl font-serif font-bold text-forest-deep mt-1">
                      {ADMIN_PAYMENTS_SAMPLE.length} Entries
                    </p>
                    <span className="text-[11px] text-marigold font-semibold">
                      Simulated Sandbox Only
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-ivory-border shadow-card overflow-hidden">
                  <div className="p-5 border-b border-ivory-border flex items-center justify-between">
                    <h2 className="font-serif font-bold text-lg text-forest-deep">
                      Active Sample Programs
                    </h2>
                    <button
                      type="button"
                      onClick={() => setActiveSection("courses")}
                      className="text-xs font-semibold text-forest hover:text-sage underline"
                    >
                      Open Full Course Editor →
                    </button>
                  </div>
                  <div className="divide-y divide-ivory-border">
                    {coursesList.map((course) => (
                      <div
                        key={course.id}
                        className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div>
                          <p className="font-semibold text-sm text-forest-deep">
                            {course.title}
                          </p>
                          <p className="text-xs text-ink-subtle">
                            {course.format} • {course.demoDuration}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setEditingCourse(course)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-ivory-border text-xs font-semibold text-forest-deep hover:bg-ivory-warm self-start sm:self-auto"
                        >
                          <Edit3 className="w-3.5 h-3.5 text-sage" />
                          <span>Edit Course (Demo)</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSection === "courses" && (
              <div className="bg-white rounded-2xl border border-ivory-border shadow-card overflow-hidden">
                <div className="p-6 border-b border-ivory-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-serif font-bold text-forest-deep">
                      Course & Program Management (Demo)
                    </h1>
                    <p className="text-xs text-ink-muted mt-1">
                      Click &ldquo;Open Course Editor&rdquo; on any row to modify
                      titles, formats, or descriptions in local demo memory.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setEditingCourse({
                        ...coursesList[0],
                        id: `prog-demo-${Date.now()}`,
                        title: "New Sample Laughter Program (Draft)",
                      })
                    }
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-forest text-ivory text-xs font-semibold hover:bg-forest-muted shrink-0"
                  >
                    <Plus className="w-4 h-4 text-marigold" />
                    <span>New Draft Course (Demo)</span>
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-ivory-warm text-[11px] font-semibold uppercase tracking-wider text-ink-muted border-b border-ivory-border">
                        <th className="py-3.5 px-5">Program Title</th>
                        <th className="py-3.5 px-4">Category</th>
                        <th className="py-3.5 px-4">Format</th>
                        <th className="py-3.5 px-4">Demo Duration</th>
                        <th className="py-3.5 px-5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ivory-border text-sm">
                      {coursesList.map((course) => (
                        <tr key={course.id} className="hover:bg-ivory/50">
                          <td className="py-4 px-5 font-semibold text-forest-deep">
                            {course.title}
                          </td>
                          <td className="py-4 px-4 text-xs text-ink-muted">
                            {course.category}
                          </td>
                          <td className="py-4 px-4">
                            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-sage-light text-forest">
                              {course.format}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-xs text-ink-muted">
                            {course.demoDuration}
                          </td>
                          <td className="py-4 px-5 text-right">
                            <button
                              type="button"
                              onClick={() => setEditingCourse(course)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ivory-warm text-forest-deep text-xs font-semibold hover:bg-marigold-soft transition-colors"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                              <span>Open Course Editor</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeSection === "lessons" && (
              <div className="bg-white rounded-2xl border border-ivory-border shadow-card p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ivory-border pb-4">
                  <div>
                    <h1 className="text-2xl font-serif font-bold text-forest-deep">
                      Lesson & Curriculum Structure (Demo)
                    </h1>
                    <p className="text-xs text-ink-muted mt-1">
                      Preview modules and video lesson slots across your sample
                      programs.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUploadModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-forest text-ivory text-xs font-semibold hover:bg-forest-muted"
                  >
                    <UploadCloud className="w-4 h-4 text-marigold" />
                    <span>Upload Lesson Video (Demo)</span>
                  </button>
                </div>

                <div className="space-y-6">
                  {coursesList.map((prog) => (
                    <div
                      key={prog.id}
                      className="rounded-2xl border border-ivory-border overflow-hidden"
                    >
                      <div className="bg-ivory-warm px-5 py-3.5 border-b border-ivory-border flex items-center justify-between">
                        <span className="font-serif font-bold text-forest-deep">
                          {prog.title}
                        </span>
                        <span className="text-xs text-ink-subtle">
                          {prog.modules.length} Modules
                        </span>
                      </div>
                      <div className="p-4 space-y-3">
                        {prog.modules.map((mod) => (
                          <div key={mod.id} className="space-y-2">
                            <p className="text-xs font-bold uppercase tracking-wider text-sage">
                              {mod.title}
                            </p>
                            {mod.lessons.map((les) => (
                              <div
                                key={les.id}
                                className="flex items-center justify-between p-3 rounded-xl bg-ivory border border-ivory-border text-xs"
                              >
                                <span className="font-semibold text-forest-deep">
                                  {les.title}
                                </span>
                                <span className="text-ink-subtle">
                                  {les.durationLabel}
                                </span>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "students" && (
              <div className="bg-white rounded-2xl border border-ivory-border shadow-card overflow-hidden">
                <div className="p-6 border-b border-ivory-border space-y-4">
                  <div>
                    <h1 className="text-2xl font-serif font-bold text-forest-deep">
                      Student Directory (Sample Demo Records)
                    </h1>
                    <p className="text-xs text-ink-muted mt-1">
                      Filter sample learners by name, email, program, or enrollment
                      status.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                    <div className="sm:col-span-7 relative">
                      <Search className="w-4 h-4 text-ink-subtle absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={studentSearch}
                        onChange={(e) => setStudentSearch(e.target.value)}
                        placeholder="Filter sample students by name or program..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-ivory border border-ivory-border text-xs text-ink focus:border-sage focus:outline-none"
                      />
                    </div>
                    <div className="sm:col-span-5">
                      <select
                        value={studentStatusFilter}
                        onChange={(e) => setStudentStatusFilter(e.target.value)}
                        aria-label="Filter students by status"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-ivory border border-ivory-border text-xs font-semibold text-forest-deep focus:border-sage focus:outline-none"
                      >
                        <option value="All">All Demo Statuses</option>
                        <option value="Active (Demo)">Active (Demo)</option>
                        <option value="Completed (Demo)">Completed (Demo)</option>
                        <option value="Pending Invite (Demo)">
                          Pending Invite (Demo)
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {filteredStudents.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-ivory-warm text-[11px] font-semibold uppercase tracking-wider text-ink-muted border-b border-ivory-border">
                          <th className="py-3.5 px-5">Learner (Demo)</th>
                          <th className="py-3.5 px-4">Enrolled Program</th>
                          <th className="py-3.5 px-4">Progress</th>
                          <th className="py-3.5 px-4">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-ivory-border text-xs sm:text-sm">
                        {filteredStudents.map((stu) => (
                          <tr key={stu.id} className="hover:bg-ivory/50">
                            <td className="py-4 px-5">
                              <p className="font-semibold text-forest-deep">
                                {stu.namePlaceholder}
                              </p>
                              <p className="text-xs text-ink-subtle">
                                {stu.emailPlaceholder}
                              </p>
                            </td>
                            <td className="py-4 px-4 text-ink-muted">
                              {stu.enrolledProgram}
                            </td>
                            <td className="py-4 px-4 font-semibold text-forest-deep">
                              {stu.progressPercent}%
                            </td>
                            <td className="py-4 px-4">
                              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-sage-light text-forest">
                                {stu.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="p-10 text-center space-y-3">
                    <p className="font-serif font-bold text-forest-deep">
                      No matching sample learners
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setStudentSearch("");
                        setStudentStatusFilter("All");
                      }}
                      className="px-4 py-2 rounded-xl bg-forest text-ivory text-xs font-semibold"
                    >
                      Reset Student Filters
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeSection === "enrolments" && (
              <div className="bg-white rounded-2xl border border-ivory-border shadow-card p-6 space-y-4">
                <h1 className="text-2xl font-serif font-bold text-forest-deep">
                  Course Enrolment Logs (Demo Records)
                </h1>
                <p className="text-xs text-ink-muted">
                  Demonstrates how student-to-program assignments and cohort batches
                  are tracked.
                </p>
                <div className="divide-y divide-ivory-border">
                  {ADMIN_STUDENTS_SAMPLE.map((rec) => (
                    <div
                      key={rec.id}
                      className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm"
                    >
                      <div>
                        <span className="font-semibold text-forest-deep">
                          {rec.namePlaceholder}
                        </span>{" "}
                        enrolled in{" "}
                        <span className="font-semibold text-sage">
                          {rec.enrolledProgram}
                        </span>
                      </div>
                      <span className="text-xs text-ink-subtle">
                        {rec.joinedLabel} • {rec.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "payments" && (
              <div className="bg-white rounded-2xl border border-ivory-border shadow-card overflow-hidden">
                <div className="p-6 border-b border-ivory-border">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-marigold-soft text-forest-deep text-[11px] font-semibold mb-2">
                    <Sparkles className="w-3 h-3 text-marigold" />
                    Simulated Sandbox Logs Only — No Real Financial Data
                  </div>
                  <h1 className="text-2xl font-serif font-bold text-forest-deep">
                    Payment & Transaction Logs (Demo)
                  </h1>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-ivory-warm text-[11px] font-semibold uppercase tracking-wider text-ink-muted border-b border-ivory-border">
                        <th className="py-3.5 px-5">Reference</th>
                        <th className="py-3.5 px-4">Learner (Demo)</th>
                        <th className="py-3.5 px-4">Program</th>
                        <th className="py-3.5 px-4">Status</th>
                        <th className="py-3.5 px-5 text-right">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ivory-border text-xs sm:text-sm">
                      {ADMIN_PAYMENTS_SAMPLE.map((pay) => (
                        <tr key={pay.id} className="hover:bg-ivory/50">
                          <td className="py-4 px-5 font-mono text-xs font-semibold text-forest-deep">
                            {pay.referenceCode}
                          </td>
                          <td className="py-4 px-4">{pay.studentPlaceholder}</td>
                          <td className="py-4 px-4 text-ink-muted">
                            {pay.programTitle}
                          </td>
                          <td className="py-4 px-4">
                            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-sage-light text-forest">
                              {pay.status}
                            </span>
                          </td>
                          <td className="py-4 px-5 text-right">
                            <button
                              type="button"
                              onClick={() => setInspectingPayment(pay)}
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-ivory-border text-xs font-semibold text-forest-deep hover:bg-ivory-warm"
                            >
                              <Eye className="w-3.5 h-3.5 text-sage" />
                              <span>View Details</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeSection === "sessions" && (
              <div className="bg-white rounded-2xl border border-ivory-border shadow-card p-6 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ivory-border pb-4">
                  <div>
                    <h1 className="text-2xl font-serif font-bold text-forest-deep">
                      Live Session & Workshop Schedule (Demo)
                    </h1>
                    <p className="text-xs text-ink-muted mt-1">
                      Manage recurring Zoom circles and group workshop slots.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      triggerToast(
                        "Demo Session Scheduler",
                        "In production, this opens the Zoom/Google Meet calendar integration.",
                        "info"
                      )
                    }
                    className="px-4 py-2.5 rounded-xl bg-forest text-ivory text-xs font-semibold"
                  >
                    + Schedule Demo Circle
                  </button>
                </div>

                <div className="space-y-4">
                  {LIVE_SESSIONS_DATA.map((sess) => (
                    <div
                      key={sess.id}
                      className="p-4 rounded-xl bg-ivory border border-ivory-border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div>
                        <p className="font-serif font-bold text-base text-forest-deep">
                          {sess.title}
                        </p>
                        <p className="text-xs text-ink-muted">
                          {sess.demoDateLabel} • {sess.demoTimeLabel}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sage-light text-forest self-start sm:self-auto">
                        {sess.format}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "resources" && (
              <div className="bg-white rounded-2xl border border-ivory-border shadow-card p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ivory-border pb-4">
                  <div>
                    <h1 className="text-2xl font-serif font-bold text-forest-deep">
                      Video & Practice Resource Library (Demo)
                    </h1>
                    <p className="text-xs text-ink-muted mt-1">
                      Manage lesson videos, audio breathwork tracks, and PDF
                      workbooks.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUploadModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-forest text-ivory text-xs font-semibold hover:bg-forest-muted"
                  >
                    <UploadCloud className="w-4 h-4 text-marigold" />
                    <span>Open Upload Interface</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Welcome to Intentional Laughter (Sample Video Slot)",
                    "Diaphragmatic Breathwork Audio Guide (Sample Audio Slot)",
                    "4-Week Joyful Habit Companion Workbook (Sample PDF Slot)",
                    "Group Workshop Facilitator Checklist (Sample PDF Slot)",
                  ].map((item) => (
                    <div
                      key={item}
                      className="p-4 rounded-xl bg-ivory border border-ivory-border flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-sage-light text-forest flex items-center justify-center shrink-0">
                        <FileVideo className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold text-forest-deep truncate">
                          {item}
                        </p>
                        <span className="text-[11px] text-ink-subtle">
                          Demo Asset Placeholder
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "settings" && (
              <div className="bg-white rounded-2xl border border-ivory-border shadow-card p-6 space-y-5 max-w-2xl">
                <h1 className="text-2xl font-serif font-bold text-forest-deep">
                  Platform Configuration (Demo Preview)
                </h1>
                <p className="text-xs text-ink-muted">
                  Non-destructive configuration preview for Laughter Yogi platform
                  settings.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-ivory border border-ivory-border">
                    <p className="text-xs font-semibold uppercase tracking-wider text-sage">
                      Platform Brand Title
                    </p>
                    <p className="text-sm font-medium text-forest-deep mt-1">
                      Laughter Yogi — Laughter Yoga & Mindful Wellness Education
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-ivory border border-ivory-border">
                    <p className="text-xs font-semibold uppercase tracking-wider text-sage">
                      Payment & Auth Integration Status
                    </p>
                    <p className="text-xs text-ink-muted mt-1">
                      Frontend Demo Mode Active. Ready to connect NextAuth / Clerk
                      and Razorpay / Stripe in production phase.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {editingCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest-deep/60 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="course-editor-title"
        >
          <div className="bg-ivory border border-ivory-border rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-editorial relative space-y-5">
            <button
              type="button"
              onClick={() => setEditingCourse(null)}
              aria-label="Close course editor"
              className="absolute top-4 right-4 p-2 rounded-full text-ink-muted hover:bg-ivory-warm"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-sage">
                Interactive Course Editor (Demo)
              </span>
              <h2
                id="course-editor-title"
                className="text-2xl font-serif font-bold text-forest-deep"
              >
                Edit Sample Program
              </h2>
            </div>

            <form onSubmit={handleSaveCourseEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-1">
                  Program Title
                </label>
                <input
                  type="text"
                  required
                  value={editingCourse.title}
                  onChange={(e) =>
                    setEditingCourse({ ...editingCourse, title: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-ivory-border text-sm text-ink"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-1">
                  Demo Duration Label
                </label>
                <input
                  type="text"
                  required
                  value={editingCourse.demoDuration}
                  onChange={(e) =>
                    setEditingCourse({
                      ...editingCourse,
                      demoDuration: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-ivory-border text-sm text-ink"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-1">
                  Short Description
                </label>
                <textarea
                  rows={3}
                  required
                  value={editingCourse.shortDescription}
                  onChange={(e) =>
                    setEditingCourse({
                      ...editingCourse,
                      shortDescription: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-ivory-border text-sm text-ink"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingCourse(null)}
                  className="flex-1 py-2.5 px-4 rounded-xl border border-ivory-border text-xs font-semibold text-ink-muted"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-forest text-ivory text-xs font-semibold hover:bg-forest-muted"
                >
                  Save Changes (Demo)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {inspectingPayment && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest-deep/60 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-ivory border border-ivory-border rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-editorial relative space-y-4">
            <button
              type="button"
              onClick={() => setInspectingPayment(null)}
              aria-label="Close payment inspector"
              className="absolute top-4 right-4 p-2 rounded-full text-ink-muted hover:bg-ivory-warm"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block px-3 py-1 rounded-full bg-marigold-soft text-forest-deep text-xs font-semibold">
              Simulated Transaction Receipt (Demo)
            </span>

            <h3 className="text-xl font-serif font-bold text-forest-deep">
              Reference: {inspectingPayment.referenceCode}
            </h3>

            <div className="bg-white rounded-xl p-4 border border-ivory-border space-y-2.5 text-xs">
              <div className="flex justify-between">
                <span className="text-ink-subtle">Learner Placeholder:</span>
                <span className="font-semibold text-forest-deep">
                  {inspectingPayment.studentPlaceholder}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-subtle">Program:</span>
                <span className="font-semibold text-forest-deep">
                  {inspectingPayment.programTitle}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-subtle">Tier Label:</span>
                <span className="font-semibold text-forest-deep">
                  {inspectingPayment.demoAmountLabel}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-subtle">Gateway Mode:</span>
                <span className="font-semibold text-sage">
                  {inspectingPayment.methodPlaceholder}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-ink-subtle">
              This is a simulated record demonstrating how admin staff inspect
              enrollment receipts.
            </p>

            <button
              type="button"
              onClick={() => setInspectingPayment(null)}
              className="w-full py-2.5 rounded-xl bg-forest text-ivory text-xs font-semibold"
            >
              Close Inspector
            </button>
          </div>
        </div>
      )}

      {uploadModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest-deep/60 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-ivory border border-ivory-border rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-editorial relative space-y-5">
            <button
              type="button"
              onClick={() => setUploadModalOpen(false)}
              aria-label="Close upload modal"
              className="absolute top-4 right-4 p-2 rounded-full text-ink-muted hover:bg-ivory-warm"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-sage">
                Media Upload Interface (Demo)
              </span>
              <h3 className="text-2xl font-serif font-bold text-forest-deep">
                Upload Lesson Resource
              </h3>
            </div>

            <form onSubmit={handleSimulatedUpload} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-1">
                  Resource Title
                </label>
                <input
                  type="text"
                  required
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  placeholder="e.g., Morning Laughter Warm-Up Video"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-ivory-border text-sm text-ink"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-1">
                  Resource Type
                </label>
                <select
                  value={uploadType}
                  onChange={(e) => setUploadType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-ivory-border text-sm text-forest-deep font-medium"
                >
                  <option value="Guided Video Lesson (MP4)">
                    Guided Video Lesson (MP4)
                  </option>
                  <option value="Breathwork Audio Companion (MP3)">
                    Breathwork Audio Companion (MP3)
                  </option>
                  <option value="Practice Workbook (PDF)">
                    Practice Workbook (PDF)
                  </option>
                </select>
              </div>

              <div className="border-2 border-dashed border-ivory-border rounded-xl p-6 text-center bg-white/60 space-y-2">
                <UploadCloud className="w-8 h-8 text-sage mx-auto" />
                <p className="text-xs font-semibold text-forest-deep">
                  Simulated Drag & Drop Zone
                </p>
                <p className="text-[11px] text-ink-subtle">
                  In production, connects directly to cloud object storage (S3 /
                  Cloudflare R2 / Mux).
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-forest text-ivory text-xs font-semibold hover:bg-forest-muted"
              >
                Simulate Upload
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
