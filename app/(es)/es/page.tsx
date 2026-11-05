import { CategoryCard } from "@/components/CategoryCard";
import { CookieSimulator } from "@/components/CookieSimulator";
import { DefinitionSection } from "@/components/DefinitionSection";
import { FadeInView } from "@/components/FadeInView";
import { FakeCountdown } from "@/components/FakeCountdown";
import { Hero } from "@/components/Hero";
import { PatternCard } from "@/components/PatternCard";
import { PricingTrap } from "@/components/PricingTrap";
import { categories } from "@/lib/categories";
import { ui } from "@/lib/i18n";
import { getFeaturedPatterns } from "@/lib/patterns";
import { staticPageMetadata } from "@/lib/seo";

export const metadata = staticPageMetadata({
  path: "/",
  locale: "es",
  title: "Patrones oscuros: guía de UX engañosa",
  description:
    "Un catálogo interactivo de patrones oscuros y UX engañosa — nombra, clasifica y entiende las tácticas de interfaz usadas para influir en tus decisiones.",
  keywords: [
    "patrones oscuros",
    "dark patterns",
    "UX engañosa",
    "patrones de diseño engañosos",
    "ejemplos de patrones oscuros",
  ],
});

export default function SpanishHomePage() {
  const featuredPatterns = getFeaturedPatterns();

  return (
    <main>
      <Hero locale="es" />

      <DefinitionSection locale="es" />

      <FadeInView>
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8" aria-labelledby="featured-patterns">
          <div className="mb-8 flex flex-col gap-3">
            <div className="h-px w-full editorial-rule-full" />
            <p className="text-xs uppercase tracking-[0.28em] text-accent">Exhibición A</p>
            <h2 id="featured-patterns" className="text-3xl font-semibold sm:text-4xl">
              {ui.es.featuredPatterns}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {featuredPatterns.map((pattern, i) => (
              <FadeInView key={pattern.slug} delay={i * 80}>
                <PatternCard pattern={pattern} locale="es" />
              </FadeInView>
            ))}
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="border-y border-white/10 bg-surface/70" aria-labelledby="interactive-specimens">
          <div className="mx-auto grid max-w-6xl gap-5 px-5 py-16 sm:px-8 lg:grid-cols-3">
            <div className="lg:col-span-3">
              <p className="text-xs uppercase tracking-[0.28em] text-accent">Especímenes interactivos</p>
              <h2 id="interactive-specimens" className="mt-3 text-3xl font-semibold">
                Pequeñas manipulaciones, educadamente enmarcadas.
              </h2>
            </div>
            <FakeCountdown locale="es" />
            <CookieSimulator locale="es" />
            <PricingTrap locale="es" />
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8" aria-labelledby="categories">
          <div className="mb-8">
            <div className="h-px w-full editorial-rule-full" />
            <p className="text-xs uppercase tracking-[0.28em] text-accent">Taxonomía</p>
            <h2 id="categories" className="mt-3 text-3xl font-semibold">
              Categorías
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, i) => (
              <FadeInView key={category.slug} delay={i * 60} className="h-full">
                <CategoryCard category={category} locale="es" />
              </FadeInView>
            ))}
          </div>
        </section>
      </FadeInView>
    </main>
  );
}
