import React from "react";
import Link from "next/link";
import {
  Sun,
  Heart,
  Wind,
  Users,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const CORE_VALUES = [
  {
    icon: Sun,
    title: "Intentional Lightness",
    description:
      "We approach laughter as an accessible daily movement practice—inviting warmth and ease without requiring humour, comedy, or performance.",
  },
  {
    icon: Wind,
    title: "Grounded Breathwork",
    description:
      "Every session pairs upbeat laughter rounds with calm, rhythmic yogic breathing so participants feel centered and refreshed.",
  },
  {
    icon: Users,
    title: "Inclusive Community",
    description:
      "Our online circles and group workshops welcome learners of all backgrounds and experience levels into a supportive shared space.",
  },
  {
    icon: BookOpen,
    title: "Thoughtful Education",
    description:
      "We structure our courses with clear modules, practical takeaways, and guided reflections that fit naturally into modern schedules.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-ivory">
      <section className="py-16 lg:py-24 border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory-warm border border-ivory-border text-xs font-semibold text-sage">
                <Sparkles className="w-3.5 h-3.5 text-marigold" />
                <span>About Laughter Yogi • Brand Story Preview</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-forest-deep leading-tight">
                Where Mindful Breath Meets the Joy of Shared Laughter.
              </h1>

              <p className="text-lg text-ink-muted leading-relaxed">
                Laughter Yogi is a laughter yoga and wellness education platform created
                to help individuals, communities, and organizations cultivate everyday
                joy, presence, and meaningful human connection.
              </p>

              <p className="text-base text-ink-muted leading-relaxed">
                In a fast-paced digital world, moments of genuine lightness often get
                pushed aside. Our platform brings structured online courses, guided
                weekly sessions, and interactive group workshops into one welcoming home.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-forest text-ivory text-sm font-semibold hover:bg-forest-muted transition-colors"
                >
                  <span>Browse Our Programs</span>
                  <ArrowRight className="w-4 h-4 text-marigold" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-ivory-border bg-white text-forest-deep text-sm font-semibold hover:bg-ivory-warm transition-colors"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-ivory-border shadow-editorial aspect-[4/3] bg-ivory-warm">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=85"
                  alt="Facilitator guiding a joyful group through gentle stretching and laughter exercises"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ivory-warm border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-sage block mb-2">
              Our Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest-deep">
              Crafted with Warmth, Clarity, and Intention
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-white p-7 rounded-2xl border border-ivory-border shadow-card space-y-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-sage-light flex items-center justify-center text-forest">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-forest-deep">
                    {val.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-ivory-warm border border-ivory-border">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
                  alt="Peaceful wellness facilitator portrait placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-marigold-soft text-forest-deep text-xs font-semibold border border-marigold/30">
                <Heart className="w-3.5 h-3.5 text-marigold" />
                Founder & Lead Facilitator Bio Placeholder (Demo)
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest-deep">
                Dedicated to Sharing the Practice of Joyful Presence
              </h2>
              <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                This section is reserved for the Laughter Yogi founder&apos;s authentic
                story, training background, and vision for the community. In production,
                it can highlight real workshops led, personal philosophy, and a welcoming
                video introduction.
              </p>
              <div className="pt-2">
                <Link
                  href="/sessions"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-sage"
                >
                  <span>Explore Upcoming Live Sessions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
