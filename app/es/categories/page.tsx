import { categories } from "@/lib/categories";
import { FadeInView } from "@/components/FadeInView";
import { localizeCategoryData, localePath, localizePattern } from "@/lib/i18n";
import { getPatternsByCategory } from "@/lib/patterns";

export const metadata = {
  title: "Categorías",
  description:
    "10 categorías de patrones de UX engañosa — desde Urgencia y escasez hasta Abuso de confianza y autoridad.",
  openGraph: {
    locale: "es_ES",
  },
};

export default function SpanishCategoriesPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <FadeInView>
        <div className="mb-10">
          <div className="h-px w-full editorial-rule-full" />
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Taxonomía</p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">Categorías</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            Un mapa de museo para pequeños mecanismos persuasivos que hacen las interfaces menos honestas de lo que parecen.
          </p>
        </div>
      </FadeInView>

      <div className="space-y-5">
        {categories.map((category, i) => {
          const displayCategory = localizeCategoryData(category, "es");
          const categoryPatterns = getPatternsByCategory(category.title);

          return (
            <FadeInView key={category.slug} delay={i * 80}>
              <section id={category.slug} className="scroll-mt-24 border border-white/10 bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <h2 className="text-2xl font-semibold">{displayCategory.title}</h2>
                    <p className="mt-3 max-w-2xl leading-7 text-muted">{displayCategory.description}</p>
                  </div>
                  <span className="text-sm uppercase tracking-[0.22em] text-accent">{categoryPatterns.length} patrones</span>
                </div>
                {categoryPatterns.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {categoryPatterns.map((pattern) => (
                      <a key={pattern.slug} href={localePath("es", `/patterns/${pattern.slug}`)} className="border border-white/10 px-3 py-2 text-sm text-paper transition-all duration-200 hover:scale-105 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                        {localizePattern(pattern, "es").title}
                      </a>
                    ))}
                  </div>
                )}
              </section>
            </FadeInView>
          );
        })}
      </div>
    </main>
  );
}
