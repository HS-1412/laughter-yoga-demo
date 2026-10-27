"use client";

import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Sparkles, RotateCcw } from "lucide-react";
import { PROGRAMS_DATA } from "@/data/demoData";
import ProgramCard from "@/components/ui/ProgramCard";

const CATEGORIES = [
  "All",
  "Foundations",
  "Guided Practice",
  "Holistic Wellness",
  "Workshops",
] as const;

export default function ProgramsCatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedFormat, setSelectedFormat] = useState<string>("All");

  const filteredPrograms = useMemo(() => {
    return PROGRAMS_DATA.filter((prog) => {
      const matchesSearch =
        prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || prog.category === selectedCategory;
      const matchesFormat =
        selectedFormat === "All" || prog.format === selectedFormat;

      return matchesSearch && matchesCategory && matchesFormat;
    });
  }, [searchQuery, selectedCategory, selectedFormat]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedFormat("All");
  };

  return (
    <div className="bg-ivory min-h-screen py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory-warm border border-ivory-border text-xs font-semibold text-sage">
            <Sparkles className="w-3.5 h-3.5 text-marigold" />
            <span>Interactive Course Discovery Catalog (Demo Content)</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-forest-deep">
            Programs & Courses
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            Explore our sample curriculum of foundational courses, ongoing guided
            sessions, and interactive group workshops. All offerings below are
            structured demonstration examples ready to be populated with live client
            programs.
          </p>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-ivory-border shadow-card space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-7 relative">
              <label htmlFor="program-search" className="sr-only">
                Search programs
              </label>
              <Search className="w-4 h-4 text-ink-subtle absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                id="program-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by program title, breathwork, workshop..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-ivory border border-ivory-border text-sm text-ink focus:border-sage focus:outline-none"
              />
            </div>

            <div className="md:col-span-5 flex items-center gap-3">
              <SlidersHorizontal className="w-4 h-4 text-sage shrink-0" />
              <label htmlFor="format-select" className="text-xs font-semibold uppercase tracking-wider text-ink-muted shrink-0">
                Format:
              </label>
              <select
                id="format-select"
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="w-full px-3.5 py-3 rounded-xl bg-ivory border border-ivory-border text-sm text-forest-deep font-medium focus:border-sage focus:outline-none"
              >
                <option value="All">All Formats</option>
                <option value="Online Course">Online Course</option>
                <option value="Guided Series">Guided Series</option>
                <option value="Interactive Workshop">Interactive Workshop</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-ivory-border">
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    selectedCategory === category
                      ? "bg-forest text-ivory"
                      : "bg-ivory text-ink-muted hover:bg-ivory-warm hover:text-forest-deep"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {(searchQuery || selectedCategory !== "All" || selectedFormat !== "All") && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage hover:text-forest"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-ivory-border p-12 text-center max-w-lg mx-auto space-y-4">
            <p className="text-xl font-serif font-bold text-forest-deep">
              No matching programs found
            </p>
            <p className="text-sm text-ink-muted">
              Try adjusting your search keywords or resetting the category and format
              filters.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-xl bg-forest text-ivory text-sm font-semibold hover:bg-forest-muted transition-colors"
            >
              Show All Sample Programs
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
