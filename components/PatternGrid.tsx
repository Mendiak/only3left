"use client";

import { useMemo, useState } from "react";
import { FadeInView } from "@/components/FadeInView";
import { PatternCard } from "@/components/PatternCard";
import type { Locale } from "@/lib/i18n";
import { localizeCategory, ui } from "@/lib/i18n";
import type { Pattern } from "@/lib/types";

type PatternGridProps = {
  patterns: Pattern[];
  locale?: Locale;
};

const severityLevels = [1, 2, 3, 4, 5] as const;

export function PatternGrid({ patterns, locale = "en" }: PatternGridProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [minSeverity, setMinSeverity] = useState<number | null>(null);
  const t = ui[locale];

  const categories = useMemo(
    () => [...new Set(patterns.map((p) => p.category))].sort(),
    [patterns]
  );

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();
    return patterns.filter((p) => {
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (minSeverity !== null && p.severity < minSeverity) return false;
      if (query) {
        const display = locale === "en" ? p : undefined;
        const title = display?.title ?? p.title;
        const summary = display?.summary ?? p.summary;
        const description = display?.description ?? p.description;
        if (
          !title.toLowerCase().includes(query) &&
          !summary.toLowerCase().includes(query) &&
          !description.toLowerCase().includes(query)
        ) return false;
      }
      return true;
    });
  }, [patterns, selectedCategory, minSeverity, search, locale]);

  const hasActiveFilters = selectedCategory !== null || minSeverity !== null || search.trim() !== "";

  function clearFilters() {
    setSearch("");
    setSelectedCategory(null);
    setMinSeverity(null);
  }

  return (
    <div>
      <div className="mb-8 space-y-4">
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.searchPatterns}
            className="w-full border border-white/10 bg-surface py-3 pl-10 pr-4 text-sm text-paper placeholder-muted transition focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`whitespace-nowrap border px-3 py-1.5 text-xs uppercase tracking-[0.18em] transition-all duration-200 ${
                selectedCategory === null
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-white/10 text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {t.allCategories}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                className={`whitespace-nowrap border px-3 py-1.5 text-xs uppercase tracking-[0.18em] transition-all duration-200 ${
                  cat === selectedCategory
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-white/10 text-muted hover:border-accent hover:text-accent"
                }`}
              >
                {localizeCategory(cat, locale)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-muted">{t.anySeverity}</span>
            {severityLevels.map((level) => (
              <button
                key={level}
                onClick={() => setMinSeverity(minSeverity === level ? null : level)}
                className={`px-2 py-1 text-sm transition-all duration-200 ${
                  minSeverity !== null && minSeverity <= level
                    ? minSeverity === level
                      ? "border border-accent bg-accent/10"
                      : "opacity-100"
                    : "opacity-30 hover:opacity-60"
                }`}
                aria-label={`${locale === "es" ? "Toxicidad mínima" : "Min severity"} ${level}`}
              >
                ☠️
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-muted" role="status" aria-live="polite">
            {t.showing} {filtered.length} {t.of_total} {patterns.length}
          </p>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-xs uppercase tracking-[0.18em] text-accent transition hover:text-paper"
            >
              {t.clearFilters}
            </button>
          )}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((pattern, i) => (
            <FadeInView key={pattern.slug} delay={i * 40}>
              <PatternCard pattern={pattern} locale={locale} />
            </FadeInView>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-lg text-muted">{t.noResults}</p>
          <p className="mt-2 text-sm text-muted">{t.tryAdjusting}</p>
        </div>
      )}
    </div>
  );
}
