"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { patterns } from "@/lib/patterns";
import { localizePattern } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export function AlsoLike({ currentSlug, locale = "en" }: { currentSlug: string; locale?: Locale }) {
  const [suggestions, setSuggestions] = useState<ReturnType<typeof localizePattern>[]>([]);

  useEffect(() => {
    const current = patterns.find((p) => p.slug === currentSlug);
    const sameCategory = patterns.filter(
      (p) => p.slug !== currentSlug && p.category === current?.category
    );
    const pool = sameCategory.length >= 3 ? sameCategory : patterns.filter((p) => p.slug !== currentSlug);
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    setSuggestions(shuffled.slice(0, 3).map((p) => localizePattern(p, locale as Locale)));
  }, [currentSlug, locale]);

  if (suggestions.length === 0) return null;

  const prefix = locale === "es" ? "/es" : "";

  return (
    <div className="mt-14 border-t border-white/10 pt-8">
      <div className="flex items-center gap-3">
        <div className="h-0.5 w-6 bg-accent" />
        <p className="text-sm uppercase tracking-[0.22em] text-muted">
          {locale === "es" ? "También te puede interesar" : "You might also like"}
        </p>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {suggestions.map((p) => (
          <Link
            key={p.slug}
            href={`${prefix}/patterns/${p.slug}`}
            className="group border border-white/10 bg-ink p-4 transition hover:border-accent/40 hover:bg-accent/5"
          >
            <p className="text-[10px] uppercase tracking-widest text-muted/40">{p.category}</p>
            <p className="mt-1.5 text-sm font-bold text-paper group-hover:text-accent transition">
              {p.title}
            </p>
            <p className="mt-1.5 text-xs text-muted/60 line-clamp-2">{p.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
