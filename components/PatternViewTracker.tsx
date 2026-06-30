"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRecentPatterns, addRecentPattern, type RecentPattern } from "@/hooks/useRecentPatterns";

export function PatternViewTracker({ pattern, locale = "en" }: { pattern: RecentPattern; locale?: string }) {
  const recent = useRecentPatterns();

  useEffect(() => {
    addRecentPattern(pattern);
  }, [pattern.slug]);

  if (recent.length <= 1) return null;

  const others = recent.filter((p) => p.slug !== pattern.slug);

  return (
    <div className="border-t border-white/10 pt-8 mt-12">
      <p className="text-xs uppercase tracking-[0.22em] text-muted">
        {locale === "es" ? "Vistos recientemente" : "Recently viewed"}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {others.map((p) => (
          <Link
            key={p.slug}
            href={`/${locale === "es" ? "es/" : ""}patterns/${p.slug}`}
            className="border border-white/10 bg-ink px-3 py-2 text-xs text-muted transition hover:border-accent/50 hover:text-paper"
          >
            {p.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
