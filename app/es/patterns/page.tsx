import { FadeInView } from "@/components/FadeInView";
import { PatternGrid } from "@/components/PatternGrid";
import { patterns } from "@/lib/patterns";

export const metadata = {
  title: "Patrones",
  description:
    "Un archivo de 40 patrones de UX engañosa — tácticas de interfaz que presionan, ocultan, distraen o preseleccionan en silencio.",
  openGraph: {
    locale: "es_ES",
  },
};

export default function SpanishPatternsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <FadeInView>
        <div className="mb-10">
          <div className="h-px w-full editorial-rule-full" />
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Catálogo</p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">Patrones</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">Un archivo de tácticas de interfaz que presionan, ocultan, distraen o preseleccionan en silencio.</p>
        </div>
      </FadeInView>
      <PatternGrid patterns={patterns} locale="es" />
    </main>
  );
}
