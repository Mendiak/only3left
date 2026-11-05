import type { Locale } from "@/lib/i18n";
import { longform } from "@/lib/longform";

/**
 * Deep-dive content for the patterns that already receive impressions in Search
 * Console. Rendered server-side, above the fold of the article body, so the page
 * has enough substance to compete for the head query.
 */
export function LongformSection({ slug, locale }: { slug: string; locale: Locale }) {
  const content = longform[slug]?.[locale];
  if (!content) return null;

  return (
    <div className="border-b border-white/10">
      <p className="border-l-2 border-accent py-1 pl-4 text-lg leading-8 text-paper">{content.intro}</p>

      {content.sections.map((section, index) => (
        <section key={section.heading} className="pt-8" aria-labelledby={`deep-${index}`}>
          <h2 id={`deep-${index}`} className="text-2xl font-semibold">
            {section.heading}
          </h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="mt-4 text-lg leading-8 text-muted">
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      <section className="pt-8" aria-labelledby="sources">
        <h2 id="sources" className="text-sm uppercase tracking-[0.22em] text-muted">
          {locale === "es" ? "Fuentes" : "Sources"}
        </h2>
        <ul className="mt-4 space-y-2">
          {content.sources.map((source) => (
            <li key={source.url}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted underline decoration-white/20 underline-offset-4 transition hover:text-accent hover:decoration-accent"
              >
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
