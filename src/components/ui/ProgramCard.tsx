"use client";

import React from "react";
import Link from "next/link";
import { Clock, Layers, ArrowRight, Sparkles } from "lucide-react";
import { ProgramItem } from "@/data/demoData";

interface ProgramCardProps {
  program: ProgramItem;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className="group bg-white rounded-2xl border border-ivory-border overflow-hidden shadow-card hover:shadow-editorial transition-all duration-300 flex flex-col h-full">
      <div className="relative h-56 w-full overflow-hidden bg-ivory-warm">
        <img
          src={program.image}
          alt={program.imageAlt}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-forest-deep/90 text-ivory backdrop-blur-sm">
            {program.format}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-ivory/95 text-forest-deep border border-ivory-border">
            {program.level}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4 text-xs text-ink-subtle mb-3">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sage" />
              {program.demoDuration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-marigold" />
              {program.modules.length} {program.modules.length === 1 ? "Module" : "Modules"}
            </span>
          </div>

          <h3 className="text-xl font-serif font-bold text-forest-deep mb-2 group-hover:text-sage transition-colors">
            <Link href={`/programs/${program.slug}`} className="focus:outline-none">
              {program.title}
            </Link>
          </h3>

          <p className="text-sm text-ink-muted leading-relaxed mb-5">
            {program.shortDescription}
          </p>
        </div>

        <div className="pt-4 border-t border-ivory-border flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1 text-xs font-medium text-ink-subtle">
            <Sparkles className="w-3.5 h-3.5 text-marigold" />
            Demo Curriculum
          </span>

          <Link
            href={`/programs/${program.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-sage transition-colors"
          >
            <span>View Program</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
