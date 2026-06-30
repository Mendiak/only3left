import { FadeInView } from "@/components/FadeInView";
import { PatternCard } from "@/components/PatternCard";
import { ui } from "@/lib/i18n";
import { patterns } from "@/lib/patterns";

export const metadata = {
  title: "Patrones | ONLY 3 LEFT™",
};

export default function SpanishPatternsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <FadeInView>
        <div className="mb-10">
          <div className="h-px w-full editorial-rule-full" />
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Catálogo</p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">Patrones</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{ui.es.catalogueIntro}</p>
        </div>
      </FadeInView>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {patterns.map((pattern, i) => (
          <FadeInView key={pattern.slug} delay={i * 40}>
            <PatternCard pattern={pattern} locale="es" />
          </FadeInView>
        ))}
      </div>
    </main>
  );
}
