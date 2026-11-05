import Link from "next/link";
import { notFound } from "next/navigation";
import { PatternCard } from "@/components/PatternCard";
import { FaqBlock } from "@/components/FaqBlock";
import { ReferenceList } from "@/components/ReferenceList";
import { categories, getCategory } from "@/lib/categories";
import { categoryContent, categoryReferences } from "@/lib/categoryContent";
import { localizeCategoryData, localizePsychology } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getPatternsByCategory, patterns } from "@/lib/patterns";
import { categoryJsonLd, jsonLdScript } from "@/lib/seo";

export function CategoryPageView({ slug, locale }: { slug: string; locale: Locale }) {
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const content = categoryContent[category.slug]?.[locale];
  const localized = localizeCategoryData(category, locale);
  const items = getPatternsByCategory(category.title);
  const prefix = locale === "es" ? "/es" : "";

  const psychology = Array.from(
    new Set(items.flatMap((pattern) => pattern.psychology.map((item) => localizePsychology(item, locale))))
  );

  const labels =
    locale === "es"
      ? {
          home: "Inicio",
          categories: "Categorías",
          patterns: "Patrones en esta categoría",
          spot: "Cómo detectarlo",
          why: "Por qué funciona",
          legal: "Qué dice la ley",
          others: "Otras categorías",
          all: `Ver los ${patterns.length} patrones`,
          faq: "Preguntas frecuentes",
          sources: "Fuentes y normativa",
        }
      : {
          home: "Home",
          categories: "Categories",
          patterns: "Patterns in this category",
          spot: "How to spot it",
          why: "Why it works",
          legal: "What the law says",
          others: "Other categories",
          all: `Browse all ${patterns.length} patterns`,
          faq: "Frequently asked questions",
          sources: "Sources and regulation",
        };

  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(categoryJsonLd(category, locale)) }}
      />

      <nav className="mb-8 text-xs uppercase tracking-[0.2em] text-muted" aria-label="Breadcrumb">
        <Link href={`${prefix}/`} className="transition hover:text-paper">
          {labels.home}
        </Link>
        <span className="mx-2">→</span>
        <Link href={`${prefix}/categories`} className="transition hover:text-paper">
          {labels.categories}
        </Link>
        <span className="mx-2">→</span>
        <span className="text-accent">{localized.title}</span>
      </nav>

      <header className="max-w-3xl border-b border-white/10 pb-10">
        <p className="text-xs uppercase tracking-[0.28em] text-accent">{labels.categories}</p>
        <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
          {content?.heading ?? localized.title}
        </h1>
        {(content?.intro ?? [localized.description]).map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="mt-5 text-lg leading-8 text-muted">
            {paragraph}
          </p>
        ))}
      </header>

      <section className="py-10" aria-labelledby="patterns-in-category">
        <div className="flex items-center gap-3">
          <div className="h-0.5 w-6 bg-accent" />
          <h2 id="patterns-in-category" className="text-2xl font-semibold">
            {labels.patterns}
          </h2>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((pattern) => (
            <PatternCard key={pattern.slug} pattern={pattern} locale={locale} />
          ))}
        </div>
      </section>

      {content && (
        <>
          <section className="border-t border-white/10 py-10" aria-labelledby="how-to-spot">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-6 bg-accent" />
              <h2 id="how-to-spot" className="text-2xl font-semibold">
                {labels.spot}
              </h2>
            </div>
            <ul className="mt-5 max-w-3xl space-y-3">
              {content.howToSpot.map((item) => (
                <li key={item} className="border-l-2 border-accent pl-4 text-lg leading-8 text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-white/10 py-10" aria-labelledby="why-it-works">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-6 bg-accent" />
              <h2 id="why-it-works" className="text-2xl font-semibold">
                {labels.why}
              </h2>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {psychology.map((item) => (
                <span key={item} className="border border-white/10 bg-surface px-3 py-2 text-sm text-paper">
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="border-t border-white/10 py-10" aria-labelledby="legal-context">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-6 bg-accent" />
              <h2 id="legal-context" className="text-2xl font-semibold">
                {labels.legal}
              </h2>
            </div>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{content.legal}</p>
          </section>

          <FaqBlock items={content.faq.map((item) => ({ question: item.q, answer: item.a }))} title={labels.faq} />

          <ReferenceList ids={categoryReferences[category.slug] ?? []} locale={locale} title={labels.sources} />
        </>
      )}

      <section className="py-10" aria-labelledby="other-categories">
        <div className="flex items-center gap-3">
          <div className="h-0.5 w-6 bg-accent" />
          <h2 id="other-categories" className="text-2xl font-semibold">
            {labels.others}
          </h2>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {categories
            .filter((item) => item.slug !== category.slug)
            .map((item) => (
              <Link
                key={item.slug}
                href={`${prefix}/categories/${item.slug}`}
                className="border border-white/10 bg-surface px-3 py-2 text-sm text-paper transition hover:border-accent hover:text-accent"
              >
                {localizeCategoryData(item, locale).title}
              </Link>
            ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={`${prefix}/patterns`}
            className="bg-accent px-5 py-3 font-semibold text-ink transition hover:bg-paper"
          >
            {labels.all}
          </Link>
          <Link
            href={`${prefix}/categories`}
            className="border border-white/20 px-5 py-3 font-semibold text-paper transition hover:border-accent hover:text-accent"
          >
            {labels.categories}
          </Link>
        </div>
      </section>
    </main>
  );
}
