import { categories } from "@/lib/categories";
import { getPatternsByCategory } from "@/lib/patterns";

export const metadata = {
  title: "Categories | ONLY 3 LEFT™",
};

export default function CategoriesPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.28em] text-accent">Taxonomy</p>
        <h1 className="mt-4 text-4xl font-black sm:text-6xl">Categories</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          A museum map for the persuasive little mechanisms that make interfaces less honest than they look.
        </p>
      </div>

      <div className="space-y-5">
        {categories.map((category) => {
          const categoryPatterns = getPatternsByCategory(category.title);

          return (
            <section id={category.slug} key={category.slug} className="scroll-mt-24 border border-white/10 bg-surface p-5">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                  <p className="mt-3 max-w-2xl leading-7 text-muted">{category.description}</p>
                </div>
                <span className="text-sm uppercase tracking-[0.22em] text-accent">{categoryPatterns.length} patterns</span>
              </div>
              {categoryPatterns.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {categoryPatterns.map((pattern) => (
                    <a key={pattern.slug} href={`/patterns/${pattern.slug}`} className="border border-white/10 px-3 py-2 text-sm text-paper transition hover:border-accent hover:text-accent">
                      {pattern.title}
                    </a>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}
