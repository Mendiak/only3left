import Link from "next/link";
import { getPattern, patterns } from "@/lib/patterns";
import { localizeCategory, localizePattern } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { slugify } from "@/lib/utils";

/**
 * Deterministic and server-rendered so crawlers always see the internal links.
 * Suggestions are ranked by topical proximity: same category first, then by the
 * number of shared psychological levers, with the slug as a stable tie-breaker.
 */
export function AlsoLike({ currentSlug, locale = "en" }: { currentSlug: string; locale?: Locale }) {
  const current = getPattern(currentSlug);
  const prefix = locale === "es" ? "/es" : "";

  if (!current) return null;

  const ranked = patterns
    .filter((p) => p.slug !== currentSlug)
    .map((p) => {
      const sharedPsychology = p.psychology.filter((item) => current.psychology.includes(item)).length;
      const sameCategory = p.category === current.category ? 1 : 0;

      return { pattern: p, score: sameCategory * 10 + sharedPsychology };
    })
    .sort((a, b) => b.score - a.score || a.pattern.slug.localeCompare(b.pattern.slug))
    .slice(0, 6)
    .map(({ pattern }) => localizePattern(pattern, locale));

  if (ranked.length === 0) return null;

  const categorySlug = slugify(current.category);

  return (
    <div className="mt-14 border-t border-white/10 pt-8">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-0.5 w-6 bg-accent" />
          <p className="text-sm uppercase tracking-[0.22em] text-muted">
            {locale === "es" ? "Patrones relacionados" : "Related patterns"}
          </p>
        </div>
        <Link
          href={`${prefix}/categories/${categorySlug}`}
          className="text-xs uppercase tracking-[0.18em] text-accent transition hover:text-paper"
        >
          {locale === "es" ? "Ver categoría" : "See category"} → {localizeCategory(current.category, locale)}
        </Link>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ranked.map((p) => (
          <Link
            key={p.slug}
            href={`${prefix}/patterns/${p.slug}`}
            className="group border border-white/10 bg-ink p-4 transition hover:border-accent/40 hover:bg-accent/5"
          >
            <p className="text-[10px] uppercase tracking-widest text-muted/40">{p.category}</p>
            <p className="mt-1.5 text-sm font-bold text-paper group-hover:text-accent transition">{p.title}</p>
            <p className="mt-1.5 text-xs text-muted/60 line-clamp-2">{p.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
