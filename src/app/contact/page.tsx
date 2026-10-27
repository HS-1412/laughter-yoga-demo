"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import { useDemo } from "@/context/DemoContext";

export default function ContactPage() {
  const { triggerToast } = useDemo();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Program or Course Inquiry");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submittedDemo, setSubmittedDemo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (fullName.trim().length < 2) {
      setErrorMsg("Please enter your name (at least 2 characters) to test the form.");
      return;
    }
    if (!email.includes("@")) {
      setErrorMsg("Please enter a valid sample email address.");
      return;
    }
    if (message.trim().length < 10) {
      setErrorMsg("Please enter a short sample message (at least 10 characters).");
      return;
    }

    setSubmittedDemo(true);
    triggerToast(
      "Demo Inquiry Validated",
      "Your sample message was validated in the browser. No real server email was dispatched.",
      "success"
    );
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setMessage("");
    setErrorMsg("");
    setSubmittedDemo(false);
  };

  return (
    <div className="bg-ivory min-h-screen py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory-warm border border-ivory-border text-xs font-semibold text-sage">
                <Sparkles className="w-3.5 h-3.5 text-marigold" />
                <span>Contact & Group Workshop Inquiries</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-forest-deep">
                We Would Love to Hear From You.
              </h1>
              <p className="text-base text-ink-muted leading-relaxed">
                Have a question about our foundational courses, weekly guided circles,
                or custom group workshops? Use this interactive demo form to preview
                how visitor inquiries work.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-ivory-border shadow-card space-y-5">
              <div className="flex items-center justify-between border-b border-ivory-border pb-3">
                <h2 className="text-lg font-serif font-bold text-forest-deep">
                  Direct Contact Placeholders
                </h2>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded bg-marigold-soft text-forest-deep">
                  Demo Only
                </span>
              </div>

              <p className="text-xs text-ink-subtle leading-relaxed">
                Per strict demonstration guidelines, no fictional phone numbers, email
                addresses, or street addresses have been fabricated. These slots are
                ready for Laughter Yogi&apos;s verified details:
              </p>

              <ul className="space-y-4 text-sm text-ink-muted">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sage-light flex items-center justify-center text-forest shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                      Email Placeholder
                    </span>
                    <span className="font-medium text-forest-deep">
                      [Official Client Email Address]
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sage-light flex items-center justify-center text-forest shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                      Phone / WhatsApp Placeholder
                    </span>
                    <span className="font-medium text-forest-deep">
                      [Official Client Phone Number]
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sage-light flex items-center justify-center text-forest shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                      Location Placeholder
                    </span>
                    <span className="font-medium text-forest-deep">
                      [Official Studio / City Location, India]
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-ivory-border shadow-editorial">
              {submittedDemo ? (
                <div className="py-8 text-center space-y-5 max-w-md mx-auto">
                  <div className="w-14 h-14 rounded-2xl bg-sage-light text-sage flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest-deep">
                    Demo Inquiry Received
                  </h2>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    Thank you,{" "}
                    <strong className="text-forest-deep">{fullName}</strong>. Your
                    sample inquiry regarding{" "}
                    <strong className="text-forest-deep">{topic}</strong> passed client
                    validation.
                  </p>
                  <div className="p-4 rounded-xl bg-ivory-warm border border-ivory-border text-xs text-ink-subtle text-left">
                    <strong>Frontend Demo Transparency:</strong> Because this is a
                    client design demonstration without a connected mail server, your
                    message was not transmitted externally.
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-3 rounded-xl bg-forest text-ivory text-sm font-semibold hover:bg-forest-muted transition-colors"
                  >
                    Send Another Sample Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="border-b border-ivory-border pb-4">
                    <h2 className="text-2xl font-serif font-bold text-forest-deep">
                      Send a Message (Interactive Demo)
                    </h2>
                    <p className="text-xs text-ink-subtle mt-1">
                      All fields include validation and display a clear demo confirmation
                      upon submission.
                    </p>
                  </div>

                  {errorMsg && (
                    <div
                      role="alert"
                      className="p-4 rounded-xl bg-marigold-soft border border-marigold text-forest-deep text-xs font-medium flex items-center gap-2.5"
                    >
                      <AlertCircle className="w-4 h-4 text-marigold shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g., Priya Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-ivory border border-ivory-border text-sm text-ink focus:border-sage focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sample@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-ivory border border-ivory-border text-sm text-ink focus:border-sage focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-topic"
                      className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2"
                    >
                      Inquiry Topic
                    </label>
                    <select
                      id="contact-topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-ivory-border text-sm text-forest-deep font-medium focus:border-sage focus:outline-none"
                    >
                      <option value="Program or Course Inquiry">
                        Program or Course Inquiry
                      </option>
                      <option value="Live Group Workshop for Organization">
                        Live Group Workshop for Organization
                      </option>
                      <option value="Weekly Guided Laughter Sessions">
                        Weekly Guided Laughter Sessions
                      </option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share how we can help or tell us about your group..."
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-ivory-border text-sm text-ink focus:border-sage focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <span className="text-xs text-ink-subtle">
                      * Demo form: validates inputs locally without external server
                      storage.
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-forest text-ivory text-sm font-semibold hover:bg-forest-muted transition-colors shadow-sm"
                    >
                      <Send className="w-4 h-4 text-marigold" />
                      <span>Send Demo Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
