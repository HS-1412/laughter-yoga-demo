"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { useDemo, DemoRole } from "@/context/DemoContext";

export default function LoginPage() {
  const router = useRouter();
  const { role, setRole } = useDemo();

  const [emailInput, setEmailInput] = useState("learner.demo@laughteryogi.example");
  const [passwordInput, setPasswordInput] = useState("••••••••••••");
  const [selectedPortal, setSelectedPortal] = useState<"student" | "admin">("student");

  const handleQuickRoleSelect = (targetRole: DemoRole, destination: string) => {
    setRole(targetRole);
    router.push(destination);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRole(selectedPortal);
    router.push(selectedPortal === "student" ? "/student" : "/admin");
  };

  return (
    <div className="bg-ivory min-h-screen py-14 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-marigold-soft border border-marigold/40 text-xs font-semibold text-forest-deep">
            <Sparkles className="w-3.5 h-3.5 text-marigold" />
            <span>Interactive Role Switcher & Login Preview (Demo)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-forest-deep">
            Welcome Back to Laughter Yogi
          </h1>
          <p className="text-sm sm:text-base text-ink-muted">
            For client evaluation, you can either use the simulated sign-in form below
            or launch directly into the Student or Admin Dashboard demos with one click.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-ivory-border shadow-editorial space-y-6">
            <div className="flex items-center justify-between border-b border-ivory-border pb-4">
              <div>
                <h2 className="text-xl font-serif font-bold text-forest-deep">
                  Member Sign In (Demo)
                </h2>
                <p className="text-xs text-ink-subtle mt-0.5">
                  Pre-filled with sample credentials for effortless testing
                </p>
              </div>
              <Lock className="w-5 h-5 text-sage" />
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
                  Select Destination Portal
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPortal("student");
                      setEmailInput("learner.demo@laughteryogi.example");
                    }}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedPortal === "student"
                        ? "bg-sage-light/70 border-sage text-forest-deep font-semibold"
                        : "bg-ivory border-ivory-border text-ink-muted"
                    }`}
                  >
                    <span className="block text-xs uppercase tracking-wider text-sage">
                      Learner View
                    </span>
                    <span className="text-sm">Student Portal</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPortal("admin");
                      setEmailInput("admin.demo@laughteryogi.example");
                    }}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedPortal === "admin"
                        ? "bg-marigold-soft border-marigold text-forest-deep font-semibold"
                        : "bg-ivory border-ivory-border text-ink-muted"
                    }`}
                  >
                    <span className="block text-xs uppercase tracking-wider text-marigold">
                      Manager View
                    </span>
                    <span className="text-sm">Admin Portal</span>
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="login-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-1.5"
                >
                  Sample Email Address
                </label>
                <input
                  id="login-email"
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-ivory border border-ivory-border text-sm text-ink focus:border-sage focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="login-password"
                  className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-1.5"
                >
                  Sample Password
                </label>
                <input
                  id="login-password"
                  type="password"
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-ivory border border-ivory-border text-sm text-ink focus:border-sage focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-forest text-ivory font-semibold text-sm hover:bg-forest-muted transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>
                  Continue to{" "}
                  {selectedPortal === "student"
                    ? "Student Dashboard Demo"
                    : "Admin Portal Demo"}
                </span>
                <ArrowRight className="w-4 h-4 text-marigold" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div className="bg-white p-7 rounded-3xl border border-ivory-border shadow-card space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 rounded-xl bg-sage-light flex items-center justify-center text-forest shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-ivory-warm text-forest-deep">
                  Interactive Course Player Included
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-forest-deep">
                1. Student Dashboard & Learning Player Demo
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Preview enrolled programs, course progress bars, upcoming live session
                placeholders, and an interactive video-lesson learning interface with
                Previous/Next controls.
              </p>
              <button
                type="button"
                onClick={() => handleQuickRoleSelect("student", "/student")}
                className="w-full py-3 px-5 rounded-xl bg-ivory-warm border border-ivory-border text-forest-deep font-semibold text-sm hover:bg-sage hover:text-white transition-colors"
              >
                Launch Student Dashboard Demo →
              </button>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-ivory-border shadow-card space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 rounded-xl bg-marigold-soft flex items-center justify-center text-forest-deep shrink-0">
                  <ShieldCheck className="w-6 h-6 text-marigold" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-marigold-soft text-forest-deep">
                  Course Editor & Filters Included
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-forest-deep">
                2. Platform Admin Dashboard Demo
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Explore course and lesson management, student filtering, simulated
                payment logs, live session scheduling, and interactive course-editor
                modals.
              </p>
              <button
                type="button"
                onClick={() => handleQuickRoleSelect("admin", "/admin")}
                className="w-full py-3 px-5 rounded-xl bg-forest text-ivory font-semibold text-sm hover:bg-forest-muted transition-colors"
              >
                Launch Admin Dashboard Demo →
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-ivory-warm border border-ivory-border flex items-center gap-3 text-xs text-ink-muted">
              <CheckCircle2 className="w-4 h-4 text-sage shrink-0" />
              <span>
                Active Demo Role:{" "}
                <strong className="text-forest-deep uppercase">{role}</strong> (No real
                database credentials required)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
