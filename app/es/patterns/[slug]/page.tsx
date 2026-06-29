import { notFound } from "next/navigation";
import { PatternVisualExample } from "@/components/PatternVisualExample";
import { SeverityMeter } from "@/components/SeverityMeter";
import { localizePattern, ui } from "@/lib/i18n";
import { getPattern, patterns } from "@/lib/patterns";

type PatternPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return patterns.map((pattern) => ({ slug: pattern.slug }));
}

export async function generateMetadata({ params }: PatternPageProps) {
  const { slug } = await params;
  const pattern = getPattern(slug);
  const displayPattern = pattern ? localizePattern(pattern, "es") : undefined;

  return {
    title: displayPattern ? `${displayPattern.title} | ONLY 3 LEFT™` : "Patrón | ONLY 3 LEFT™",
    description: displayPattern?.summary,
  };
}

export default async function SpanishPatternPage({ params }: PatternPageProps) {
  const { slug } = await params;
  const pattern = getPattern(slug);

  if (!pattern) {
    notFound();
  }

  const displayPattern = localizePattern(pattern, "es");

  return (
    <main className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
      <article>
        <header className="border-b border-white/10 pb-10">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">{displayPattern.category}</p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">{displayPattern.title}</h1>
          <p className="mt-6 text-xl leading-9 text-muted">{displayPattern.summary}</p>
        </header>

        <section className="border-b border-white/10 py-10">
          <h2 className="text-2xl font-semibold">{ui.es.whatIsIt}</h2>
          <p className="mt-4 text-lg leading-8 text-muted">{displayPattern.description}</p>
        </section>

        <section className="border-b border-white/10 py-10">
          <h2 className="text-2xl font-semibold">{ui.es.howItWorks}</h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            El patrón cambia el coste de pensar: hace que la acción preferida sea inmediata, emocional o visualmente dominante, mientras
            vuelve la alternativa más lenta, discreta o fácil de dudar.
          </p>
        </section>

        <section className="border-b border-white/10 py-10">
          <h2 className="text-2xl font-semibold">{ui.es.visualExample}</h2>
          <p className="mt-4 text-lg leading-8 text-muted">{ui.es.visualExampleIntro}</p>
          <div className="mt-6">
            <PatternVisualExample pattern={pattern} />
          </div>
        </section>

        <section className="border-b border-white/10 py-10">
          <h2 className="text-2xl font-semibold">{ui.es.psychology}</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {displayPattern.psychology.map((item) => (
              <span key={item} className="border border-white/10 bg-surface px-3 py-2 text-sm text-paper">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="border-b border-white/10 py-10">
          <h2 className="text-2xl font-semibold">{ui.es.realWorldExample}</h2>
          <ul className="mt-5 space-y-3">
            {displayPattern.examples.map((example) => (
              <li key={example} className="border-l-2 border-accent pl-4 text-lg leading-8 text-muted">
                {example}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm uppercase tracking-[0.22em] text-muted">
            {ui.es.origin}: {displayPattern.origin}
          </p>
        </section>

        <section className="border-b border-white/10 py-10">
          <h2 className="text-2xl font-semibold">{ui.es.ethicalAlternative}</h2>
          <div className="mt-5 border border-emerald-400/40 bg-emerald-400/10 p-5">
            <p className="text-lg leading-8 text-emerald-100">{displayPattern.ethicalAlternative}</p>
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-2xl font-semibold">{ui.es.toxicityMeter}</h2>
          <div className="mt-5">
            <SeverityMeter severity={pattern.severity} locale="es" />
          </div>
        </section>
      </article>
    </main>
  );
}
