import { CategoryCard } from "@/components/CategoryCard";
import { CookieSimulator } from "@/components/CookieSimulator";
import { FadeInView } from "@/components/FadeInView";
import { FakeCountdown } from "@/components/FakeCountdown";
import { Hero } from "@/components/Hero";
import { PatternCard } from "@/components/PatternCard";
import { PricingTrap } from "@/components/PricingTrap";
import { categories } from "@/lib/categories";
import { getFeaturedPatterns } from "@/lib/patterns";

export default function HomePage() {
  const featuredPatterns = getFeaturedPatterns();

  return (
    <main>
      <Hero />

      <FadeInView>
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8" aria-labelledby="featured-patterns">
          <div className="mb-8 flex flex-col gap-3">
            <div className="h-px w-full editorial-rule-full" />
            <p className="text-xs uppercase tracking-[0.28em] text-accent">Exhibit A</p>
            <h2 id="featured-patterns" className="text-3xl font-semibold sm:text-4xl">
              Featured Patterns
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {featuredPatterns.map((pattern, i) => (
              <FadeInView key={pattern.slug} delay={i * 80}>
                <PatternCard pattern={pattern} />
              </FadeInView>
            ))}
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="border-y border-white/10 bg-surface/70" aria-labelledby="interactive-specimens">
          <div className="mx-auto grid max-w-6xl gap-5 px-5 py-16 sm:px-8 lg:grid-cols-3">
            <div className="lg:col-span-3">
              <p className="text-xs uppercase tracking-[0.28em] text-accent">Interactive Specimens</p>
              <h2 id="interactive-specimens" className="mt-3 text-3xl font-semibold">
                Small manipulations, politely mounted.
              </h2>
            </div>
            <FakeCountdown />
            <CookieSimulator />
            <PricingTrap />
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8" aria-labelledby="categories">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div className="h-px w-full editorial-rule-full" />
              <p className="text-xs uppercase tracking-[0.28em] text-accent">Taxonomy</p>
              <h2 id="categories" className="mt-3 text-3xl font-semibold">
                Categories
              </h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, i) => (
              <FadeInView key={category.slug} delay={i * 60}>
                <CategoryCard category={category} />
              </FadeInView>
            ))}
          </div>
        </section>
      </FadeInView>
    </main>
  );
}
