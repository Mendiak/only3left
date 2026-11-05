"use client";

import { useMemo, useState } from "react";
import { FadeInView } from "@/components/FadeInView";
import { PatternCard } from "@/components/PatternCard";
import type { Locale } from "@/lib/i18n";
import { localizeCategory, localizePattern, ui } from "@/lib/i18n";
import type { Pattern } from "@/lib/types";

type PatternGridProps = {
  patterns: Pattern[];
  locale?: Locale;
};

export function PatternGrid({ patterns, locale = "en" }: PatternGridProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [maxSeverity, setMaxSeverity] = useState<Pattern["severity"] | null>(null);
  const t = ui[locale];

  const categories = useMemo(
    () => [...new Set(patterns.map((p) => p.category))].sort(),
    [patterns]
  );

  const severityLevels = useMemo(
    () => [...new Set(patterns.map((p) => p.severity))].sort((a, b) => a - b),
    [patterns]
  );

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();
    return patterns.filter((p) => {
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (maxSeverity !== null && p.severity > maxSeverity) return false;
      if (query) {
        // Search the copy the user is actually reading, not the English source.
        const display = locale === "es" ? localizePattern(p, locale) : p;
        if (
          !display.title.toLowerCase().includes(query) &&
          !display.summary.toLowerCase().includes(query) &&
          !display.description.toLowerCase().includes(query)
        ) return false;
      }
      return true;
    });
  }, [patterns, selectedCategory, maxSeverity, search, locale]);

  const hasActiveFilters = selectedCategory !== null || maxSeverity !== null || search.trim() !== "";

  function clearFilters() {
    setSearch("");
    setSelectedCategory(null);
    setMaxSeverity(null);
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
            type="search"
            name="pattern-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.searchPatterns}
            aria-label={t.searchPatterns}
            className="w-full border border-white/10 bg-surface py-3 pl-10 pr-4 text-sm text-paper placeholder-muted transition focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`max-w-full border px-3 py-1.5 text-left text-xs uppercase tracking-[0.18em] transition-all duration-200 ${
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
                className={`max-w-full border px-3 py-1.5 text-left text-xs uppercase tracking-[0.18em] transition-all duration-200 ${
                  cat === selectedCategory
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-white/10 text-muted hover:border-accent hover:text-accent"
                }`}
              >
                {localizeCategory(cat, locale)}
              </button>
            ))}
          </div>

          <div
            className="flex flex-wrap items-center gap-2"
            role="group"
            aria-label={locale === "es" ? "Filtrar por toxicidad máxima" : "Filter by maximum toxicity"}
          >
            <span className="text-xs text-muted">{locale === "es" ? "Toxicidad máxima" : "Max toxicity"}</span>
            <button
              type="button"
              onClick={() => setMaxSeverity(null)}
              aria-pressed={maxSeverity === null}
              className={`border px-3 py-1.5 text-xs uppercase tracking-[0.18em] transition-all duration-200 ${
                maxSeverity === null
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-white/10 text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {t.anySeverity}
            </button>
            {severityLevels.map((level) => {
              const selected = maxSeverity === level;
              const included = maxSeverity !== null && level <= maxSeverity;

              return (
                <button
                  key={level}
                  type="button"
                  onClick={() => setMaxSeverity(selected ? null : level)}
                  aria-pressed={selected}
                  aria-label={`${locale === "es" ? "Toxicidad hasta" : "Toxicity up to"} ${level} ${
                    locale === "es" ? "de" : "of"
                  } 5`}
                  className={`flex items-center gap-1 border px-2 py-1 text-sm transition-all duration-200 ${
                    selected
                      ? "border-accent bg-accent/10 text-paper"
                      : included
                        ? "border-accent/50 bg-accent/5 text-paper"
                        : "border-white/10 text-muted hover:border-accent/50 hover:text-paper"
                  }`}
                >
                  <span aria-hidden="true">{"☠️".repeat(level)}</span>
                  <span className="text-[10px] tabular-nums text-muted">{level}/5</span>
                </button>
              );
            })}
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
