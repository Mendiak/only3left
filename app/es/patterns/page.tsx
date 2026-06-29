import { PatternCard } from "@/components/PatternCard";
import { ui } from "@/lib/i18n";
import { patterns } from "@/lib/patterns";

export const metadata = {
  title: "Patrones | ONLY 3 LEFT™",
};

export default function SpanishPatternsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.28em] text-accent">Catálogo</p>
        <h1 className="mt-4 text-4xl font-black sm:text-6xl">Patrones</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{ui.es.catalogueIntro}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {patterns.map((pattern) => (
          <PatternCard key={pattern.slug} pattern={pattern} locale="es" />
        ))}
      </div>
    </main>
  );
}
