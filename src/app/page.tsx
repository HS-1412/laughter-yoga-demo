"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Users,
  Laptop,
  HeartHandshake,
  Calendar,
  Clock,
  Video,
  Sparkles,
  Quote,
  CheckCircle2,
  Sun,
} from "lucide-react";
import {
  PROGRAMS_DATA,
  LIVE_SESSIONS_DATA,
  SAMPLE_TESTIMONIALS,
} from "@/data/demoData";
import ProgramCard from "@/components/ui/ProgramCard";
import { useDemo } from "@/context/DemoContext";

const WHY_PILLARS = [
  {
    icon: Compass,
    title: "Guided Experiences",
    description:
      "Every session and course is thoughtfully paced by facilitators who guide you through gentle warm-ups, rhythmic breathing, and intentional laughter exercises.",
  },
  {
    icon: Users,
    title: "Welcoming Community",
    description:
      "Experience a warm, judgment-free environment where newcomers and returning practitioners alike can relax, be themselves, and share uplifting moments.",
  },
  {
    icon: Laptop,
    title: "Flexible Online Learning",
    description:
      "Explore structured video lessons, audio companions, and reflection guides on your own schedule from the comfort of home.",
  },
  {
    icon: HeartHandshake,
    title: "Opportunities to Practise Together",
    description:
      "Move beyond solo study by joining live online circles and interactive group workshops designed for shared human connection.",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: "01",
    title: "Discover a Program",
    description:
      "Browse our foundational courses, weekly guided circles, and group workshops to find the format that fits your rhythm.",
  },
  {
    stepNumber: "02",
    title: "Join a Session or Enrol in a Course",
    description:
      "Select a self-paced online curriculum or reserve your spot in an upcoming live online practice circle.",
  },
  {
    stepNumber: "03",
    title: "Learn, Practise, and Connect",
    description:
      "Follow guided video lessons, participate in joyful group exercises, and build a sustainable daily ritual of lightness and breath.",
  },
];

export default function HomePage() {
  const { openBookingModal } = useDemo();
  const featuredSession = LIVE_SESSIONS_DATA[0];

  return (
    <div className="space-y-0">
      <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory-warm border border-ivory-border text-xs font-semibold uppercase tracking-wider text-forest">
                <Sun className="w-3.5 h-3.5 text-marigold" />
                <span>Laughter Yoga & Mindful Wellness Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-forest-deep leading-[1.1] tracking-tight">
                Bring More Laughter Into Your Life.
              </h1>

              <p className="text-lg sm:text-xl text-ink-muted leading-relaxed max-w-2xl">
                Discover laughter yoga, mindful movement, and guided experiences
                designed to help you reconnect, find joy, and build meaningful
                connections.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-forest text-ivory font-semibold text-base hover:bg-forest-muted transition-all shadow-sm"
                >
                  <span>Explore Our Programs</span>
                  <ArrowRight className="w-4 h-4 text-marigold" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white border border-ivory-border text-forest-deep font-semibold text-base hover:bg-ivory-warm transition-colors"
                >
                  <span>Discover Laughter Yoga</span>
                </Link>
              </div>

              <div className="pt-6 border-t border-ivory-border grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-ink-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sage shrink-0" />
                  <span>Facilitator-guided online & live formats</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sage shrink-0" />
                  <span>Accessible for all experience levels</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sage shrink-0" />
                  <span>Rooted in breath, warmth & community</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-ivory-border shadow-editorial bg-ivory-warm aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85"
                  alt="Diverse group of adults laughing joyfully together outdoors in warm natural light"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 bg-ivory/95 backdrop-blur-md p-4 rounded-2xl border border-ivory-border shadow-card">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-sage block mb-0.5">
                        Interactive Platform Preview
                      </span>
                      <p className="text-sm font-serif font-bold text-forest-deep">
                        Intentional Laughter • Yogic Breathwork • Shared Joy
                      </p>
                    </div>
                    <Link
                      href="/sessions"
                      className="px-3 py-1.5 rounded-lg bg-marigold text-forest-deep text-xs font-semibold hover:bg-marigold-hover transition-colors shrink-0"
                    >
                      Live Circles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-ivory-warm border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-sage">
                Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest-deep leading-tight">
                Laughter as a Shared Practice, Not Just a Reaction.
              </h2>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-ivory-border text-xs text-ink-subtle">
                <Sparkles className="w-3.5 h-3.5 text-marigold" />
                <span>Brand Philosophy & Community Preview</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-ink-muted leading-relaxed">
              <p>
                At <strong className="text-forest-deep">Laughter Yogi</strong>, we believe
                joy does not have to wait for external circumstances. By combining
                playful, intentional laughter exercises with grounding yogic breathwork,
                we create an uplifting space where anyone can step away from daily rush
                and reconnect with a sense of lightness.
              </p>
              <p className="text-sm sm:text-base">
                Whether you are exploring our self-paced foundational lessons at home or
                joining a live group workshop with colleagues and friends, every
                experience is designed to feel human, welcoming, and deeply grounding.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-ivory p-4 rounded-xl border border-ivory-border">
                  <p className="font-serif font-bold text-forest-deep text-base mb-1">
                    Unconditional Joy
                  </p>
                  <p className="text-xs text-ink-muted">
                    Gentle prompts that invite natural laughter without needing jokes or comedy.
                  </p>
                </div>
                <div className="bg-ivory p-4 rounded-xl border border-ivory-border">
                  <p className="font-serif font-bold text-forest-deep text-base mb-1">
                    Mindful Breath
                  </p>
                  <p className="text-xs text-ink-muted">
                    Rhythmic diaphragmatic breathing that anchors energy and calm presence.
                  </p>
                </div>
                <div className="bg-ivory p-4 rounded-xl border border-ivory-border">
                  <p className="font-serif font-bold text-forest-deep text-base mb-1">
                    Human Connection
                  </p>
                  <p className="text-xs text-ink-muted">
                    Supportive group circles built around warmth, kindness, and shared practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ivory border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sage mb-2">
                <span>Programs & Courses</span>
                <span className="px-2 py-0.5 rounded bg-marigold-soft text-forest-deep border border-marigold/30">
                  Demo Sample Offerings
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest-deep">
                Structured Pathways for Joyful Living
              </h2>
            </div>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-sage transition-colors self-start md:self-auto"
            >
              <span>View All Programs & Filters</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS_DATA.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-forest-deep text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-marigold block mb-2">
              Why Laughter Yogi
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              A Thoughtful Approach to Laughter & Holistic Education
            </h2>
            <p className="text-ivory/80 text-base sm:text-lg leading-relaxed">
              Designed to feel warm, clear, and accessible—combining structured online
              learning with genuine community practice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_PILLARS.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-forest-muted/50 border border-ivory/10 rounded-2xl p-6 flex flex-col justify-between hover:border-marigold/50 transition-colors"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-marigold/15 border border-marigold/30 flex items-center justify-center text-marigold mb-5">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-ivory/80 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-ivory border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-sage block mb-2">
              Simple & Welcoming
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest-deep mb-3">
              How Your Journey Works
            </h2>
            <p className="text-sm sm:text-base text-ink-muted">
              Whether you are starting with a 10-minute lesson or joining a live group
              circle, getting started is effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="relative bg-white p-8 rounded-2xl border border-ivory-border shadow-card"
              >
                <span className="inline-block font-serif text-3xl font-bold text-marigold mb-4">
                  {step.stepNumber}
                </span>
                <h3 className="text-xl font-serif font-bold text-forest-deep mb-2.5">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ivory-warm border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-ivory-border shadow-editorial overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 relative min-h-[300px] bg-forest-deep">
                <img
                  src={featuredSession.image}
                  alt={featuredSession.imageAlt}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-marigold text-forest-deep shadow-sm">
                    Featured Live Circle (Demo)
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-sage">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-light">
                      <Video className="w-3.5 h-3.5" />
                      {featuredSession.format}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ivory-warm text-ink-muted">
                      {featuredSession.spotsLabel}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-forest-deep">
                    {featuredSession.title}
                  </h2>

                  <p className="text-base text-ink-muted leading-relaxed">
                    {featuredSession.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2.5 text-sm text-forest-deep bg-ivory p-3.5 rounded-xl border border-ivory-border">
                      <Calendar className="w-4 h-4 text-marigold shrink-0" />
                      <span>{featuredSession.demoDateLabel}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-forest-deep bg-ivory p-3.5 rounded-xl border border-ivory-border">
                      <Clock className="w-4 h-4 text-sage shrink-0" />
                      <span>{featuredSession.demoTimeLabel}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-ivory-border flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      openBookingModal(
                        featuredSession.title,
                        `${featuredSession.demoDateLabel} • ${featuredSession.demoTimeLabel}`
                      )
                    }
                    className="px-6 py-3.5 rounded-xl bg-forest text-ivory text-sm font-semibold hover:bg-forest-muted transition-colors shadow-sm"
                  >
                    Book a Session (Demo)
                  </button>
                  <Link
                    href="/sessions"
                    className="px-6 py-3.5 rounded-xl border border-ivory-border text-forest-deep text-sm font-semibold hover:bg-ivory-warm transition-colors"
                  >
                    View Sessions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ivory border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-sage block mb-2">
                Community Reflections
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest-deep">
                Shared Moments of Lightness
              </h2>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-marigold-soft border border-marigold/40 text-xs text-forest-deep font-medium">
              <strong>Note:</strong> Placeholder testimonials below are for layout
              demonstration only—awaiting verified client reviews.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAMPLE_TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="bg-white p-7 rounded-2xl border border-ivory-border shadow-card flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="w-8 h-8 text-marigold/60" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded bg-ivory-warm text-ink-subtle border border-ivory-border">
                      Sample Placeholder
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-ink-muted italic leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-ivory-border">
                  <p className="text-sm font-serif font-bold text-forest-deep">
                    {item.participantPlaceholder}
                  </p>
                  <p className="text-xs text-sage font-medium mt-0.5">
                    {item.contextLabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-forest rounded-3xl p-8 sm:p-14 lg:p-16 text-center text-ivory shadow-editorial relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-muted text-marigold text-xs font-semibold">
                <Sun className="w-3.5 h-3.5" />
                <span>Begin Your Practice</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
                Make Space for More Joy.
              </h2>

              <p className="text-base sm:text-lg text-ivory/85 leading-relaxed">
                Explore our programs and discover a more joyful way to connect,
                learn, and practise together.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/programs"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-marigold text-forest-deep font-semibold text-base hover:bg-marigold-hover transition-colors"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/student"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-forest-muted text-ivory font-semibold text-base hover:bg-sage transition-colors border border-ivory/15"
                >
                  <span>Try Student Dashboard Demo</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
