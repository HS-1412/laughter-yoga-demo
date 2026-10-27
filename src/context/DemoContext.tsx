"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle2, Info, X, Sparkles, Calendar } from "lucide-react";

export type DemoRole = "visitor" | "student" | "admin";

interface ToastMessage {
  id: string;
  title: string;
  description: string;
  type?: "success" | "info";
}

interface BookingModalState {
  isOpen: boolean;
  sessionTitle: string;
  sessionTimeLabel: string;
}

interface DemoContextType {
  role: DemoRole;
  setRole: (role: DemoRole) => void;
  enrolledSlugs: string[];
  enrollInProgramDemo: (slug: string, title: string) => void;
  completedLessonIds: string[];
  toggleLessonCompleteDemo: (lessonId: string, lessonTitle: string) => void;
  triggerToast: (title: string, description: string, type?: "success" | "info") => void;
  openBookingModal: (sessionTitle: string, sessionTimeLabel: string) => void;
  closeBookingModal: () => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<DemoRole>("visitor");
  const [enrolledSlugs, setEnrolledSlugs] = useState<string[]>([
    "laughter-yoga-foundations",
    "guided-laughter-sessions",
  ]);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(["les-101"]);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [bookingModal, setBookingModal] = useState<BookingModalState>({
    isOpen: false,
    sessionTitle: "",
    sessionTimeLabel: "",
  });
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const triggerToast = useCallback(
    (title: string, description: string, type: "success" | "info" = "info") => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, title, description, type }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4500);
    },
    []
  );

  const setRole = useCallback(
    (newRole: DemoRole) => {
      setRoleState(newRole);
      triggerToast(
        `Switched to ${newRole.toUpperCase()} Demo View`,
        "This is a frontend demonstration state. No real authentication or backend session is modified.",
        "info"
      );
    },
    [triggerToast]
  );

  const enrollInProgramDemo = useCallback(
    (slug: string, title: string) => {
      if (!enrolledSlugs.includes(slug)) {
        setEnrolledSlugs((prev) => [...prev, slug]);
        triggerToast(
          `Added "${title}" to Student Demo`,
          "Demo interaction complete: Program added to your temporary Student Dashboard preview.",
          "success"
        );
      } else {
        triggerToast(
          "Already in Your Demo Dashboard",
          `"${title}" is ready to explore inside the Student Dashboard demo.`,
          "info"
        );
      }
    },
    [enrolledSlugs, triggerToast]
  );

  const toggleLessonCompleteDemo = useCallback(
    (lessonId: string, lessonTitle: string) => {
      setCompletedLessonIds((prev) => {
        const exists = prev.includes(lessonId);
        const next = exists ? prev.filter((id) => id !== lessonId) : [...prev, lessonId];
        triggerToast(
          exists ? "Lesson Marked Incomplete (Demo)" : "Lesson Completed (Demo)",
          `"${lessonTitle}" progress updated in local browser memory only.`,
          "success"
        );
        return next;
      });
    },
    [triggerToast]
  );

  const openBookingModal = useCallback((sessionTitle: string, sessionTimeLabel: string) => {
    setBookingModal({ isOpen: true, sessionTitle, sessionTimeLabel });
    setBookingSubmitted(false);
    setBookingName("");
    setBookingEmail("");
  }, []);

  const closeBookingModal = useCallback(() => {
    setBookingModal({ isOpen: false, sessionTitle: "", sessionTimeLabel: "" });
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName.trim() || !bookingEmail.trim()) return;
    setBookingSubmitted(true);
    triggerToast(
      "Demo Session Reservation Previewed",
      `Simulated reservation for "${bookingModal.sessionTitle}". No real calendar invite or server booking was created.`,
      "success"
    );
  };

  return (
    <DemoContext.Provider
      value={{
        role,
        setRole,
        enrolledSlugs,
        enrollInProgramDemo,
        completedLessonIds,
        toggleLessonCompleteDemo,
        triggerToast,
        openBookingModal,
        closeBookingModal,
      }}
    >
      {children}

      {bookingModal.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest-deep/60 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
        >
          <div className="bg-ivory border border-ivory-border rounded-2xl max-w-md w-full p-6 md:p-8 shadow-editorial relative">
            <button
              onClick={closeBookingModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-full text-ink-muted hover:bg-ivory-warm hover:text-forest transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-marigold-soft text-forest-deep text-xs font-semibold mb-4 border border-marigold/30">
              <Sparkles className="w-3.5 h-3.5 text-marigold" />
              Interactive Booking Flow Preview (Demo)
            </div>

            <h3 id="booking-modal-title" className="text-2xl font-serif text-forest-deep mb-2">
              {bookingModal.sessionTitle}
            </h3>
            <p className="text-sm text-ink-muted flex items-center gap-2 mb-6">
              <Calendar className="w-4 h-4 text-sage" />
              {bookingModal.sessionTimeLabel}
            </p>

            {bookingSubmitted ? (
              <div className="bg-sage-light/70 border border-sage/30 rounded-xl p-5 text-center">
                <CheckCircle2 className="w-10 h-10 text-sage mx-auto mb-3" />
                <h4 className="text-lg font-serif text-forest-deep mb-1">
                  Demo Reservation Confirmed
                </h4>
                <p className="text-sm text-ink-muted mb-5">
                  Thank you, <span className="font-semibold text-forest-deep">{bookingName}</span>.
                  This demonstrates how visitors will reserve live sessions once connected to a real
                  scheduling backend.
                </p>
                <button
                  onClick={closeBookingModal}
                  className="w-full py-2.5 px-4 rounded-xl bg-forest text-ivory font-medium text-sm hover:bg-forest-muted transition-colors"
                >
                  Done Previewing
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="demo-booking-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-1.5"
                  >
                    Your Name (Demo Input)
                  </label>
                  <input
                    id="demo-booking-name"
                    type="text"
                    required
                    value={bookingName}
                    onChange={(e) => setBookingName(e.target.value)}
                    placeholder="Enter a sample name"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-ivory-border text-ink text-sm focus:border-sage focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="demo-booking-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-1.5"
                  >
                    Email Address (Demo Input)
                  </label>
                  <input
                    id="demo-booking-email"
                    type="email"
                    required
                    value={bookingEmail}
                    onChange={(e) => setBookingEmail(e.target.value)}
                    placeholder="sample@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-ivory-border text-ink text-sm focus:border-sage focus:outline-none"
                  />
                </div>
                <p className="text-xs text-ink-subtle bg-ivory-warm p-3 rounded-lg border border-ivory-border">
                  <strong>Demo Notice:</strong> Submitting this form previews the confirmation UI. No
                  actual email is sent or stored on a server.
                </p>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={closeBookingModal}
                    className="flex-1 py-2.5 px-4 rounded-xl border border-ivory-border text-ink-muted text-sm font-medium hover:bg-ivory-warm transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-forest text-ivory text-sm font-medium hover:bg-forest-muted transition-colors"
                  >
                    Simulate Booking
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <div
        aria-live="polite"
        className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl bg-forest-deep text-ivory shadow-editorial border border-forest-muted transition-all"
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-marigold shrink-0 mt-0.5" />
            ) : (
              <Info className="w-5 h-5 text-marigold shrink-0 mt-0.5" />
            )}
            <div className="flex-1 text-xs leading-relaxed">
              <p className="font-semibold text-sm text-white mb-0.5">{toast.title}</p>
              <p className="text-ivory/80">{toast.description}</p>
            </div>
            <button
              onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
              aria-label="Dismiss notification"
              className="text-ivory/60 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error("useDemo must be used within a DemoProvider");
  }
  return context;
}
