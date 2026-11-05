import Link from "next/link";
import { FaqBlock } from "@/components/FaqBlock";
import { ReferenceList } from "@/components/ReferenceList";
import { categories } from "@/lib/categories";
import { localizeCategoryData } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { pillarContent } from "@/lib/pillarContent";
import { getPattern } from "@/lib/patterns";
import { jsonLdScript, pillarJsonLd } from "@/lib/seo";

const showcase = ["roach-motel", "fake-scarcity", "confirmshaming", "drip-pricing"];

export function PillarPageView({ locale }: { locale: Locale }) {
  const content = pillarContent[locale];
  const prefix = locale === "es" ? "/es" : "";

  const labels =
    locale === "es"
      ? {
          home: "Inicio",
          catalogue: "Catálogo completo",
          examples: "Ejemplos citados en este catálogo",
          faq: "Preguntas frecuentes",
          read: "Leer",
          references: "Fuentes y lecturas",
        }
      : {
          home: "Home",
          catalogue: "Full catalogue",
          examples: "Examples cited in this catalogue",
          faq: "Frequently asked questions",
          read: "Read",
          references: "Sources and further reading",
        };

  return (
    <main className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(pillarJsonLd(locale)) }}
      />

      <nav className="mb-8 text-xs uppercase tracking-[0.2em] text-muted" aria-label="Breadcrumb">
        <Link href={`${prefix}/`} className="transition hover:text-paper">
          {labels.home}
        </Link>
        <span className="mx-2">→</span>
        <span className="text-accent">{content.h1}</span>
      </nav>

      <article>
        <header className="border-b border-white/10 pb-10">
          <h1 className="text-4xl font-black leading-tight sm:text-5xl">{content.h1}</h1>
          {content.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="mt-5 text-lg leading-8 text-muted">
              {paragraph}
            </p>
          ))}
        </header>

        {content.sections.map((section, index) => (
          <section key={section.heading} className="border-b border-white/10 py-10" aria-labelledby={`s-${index}`}>
            <h2 id={`s-${index}`} className="text-2xl font-semibold">
              {section.heading}
            </h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="mt-4 text-lg leading-8 text-muted">
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-5 space-y-3">
                {section.bullets.map((item) => (
                  <li key={item} className="border-l-2 border-accent pl-4 leading-8 text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="border-b border-white/10 py-10" aria-labelledby="category-index">
          <h2 id="category-index" className="text-2xl font-semibold">
            {labels.examples}
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {showcase.map((slug) => {
              const pattern = getPattern(slug);
              if (!pattern) return null;

              return (
                <Link
                  key={slug}
                  href={`${prefix}/patterns/${slug}`}
                  className="group border border-white/10 bg-surface p-4 transition hover:border-accent/50"
                >
                  <p className="text-[10px] uppercase tracking-widest text-muted/50">{pattern.category}</p>
                  <p className="mt-1 font-semibold text-paper group-hover:text-accent">{pattern.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{pattern.summary}</p>
                </Link>
              );
            })}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`${prefix}/categories/${category.slug}`}
                className="border border-white/10 px-3 py-2 text-sm text-paper transition hover:border-accent hover:text-accent"
              >
                {localizeCategoryData(category, locale).title}
              </Link>
            ))}
          </div>
        </section>

        <FaqBlock items={content.faq.map((item) => ({ question: item.q, answer: item.a }))} title={labels.faq} />

        <ReferenceList ids={content.references} locale={locale} title={labels.references} />

        <div className="pt-8">
          <Link
            href={`${prefix}/patterns`}
            className="inline-block bg-accent px-5 py-3 font-semibold text-ink transition hover:bg-paper"
          >
            {labels.catalogue}
          </Link>
        </div>
      </article>
    </main>
  );
}
