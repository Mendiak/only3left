import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeInView } from "@/components/FadeInView";
import { PatternSidebar } from "@/components/PatternSidebar";
import { PatternViewTracker } from "@/components/PatternViewTracker";
import { PatternVisualExample } from "@/components/PatternVisualExample";
import { ManipulationMeter } from "@/components/ManipulationMeter";
import { ProgressBar } from "@/components/ProgressBar";
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

  if (!pattern) {
    return { title: "Patrón no encontrado" };
  }

  const displayPattern = localizePattern(pattern, "es");

  return {
    title: displayPattern.title,
    description: displayPattern.summary,
    openGraph: {
      title: `${displayPattern.title} — ONLY 3 LEFT™`,
      description: displayPattern.summary,
      type: "article",
      locale: "es_ES",
    },
    twitter: {
      title: `${displayPattern.title} — ONLY 3 LEFT™`,
      description: displayPattern.summary,
    },
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
    <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <ProgressBar />

      <nav className="mb-6 text-xs uppercase tracking-[0.2em] text-muted" aria-label="Navegación">
        <Link href="/es/patterns" className="transition hover:text-paper">Patrones</Link>
        <span className="mx-2">→</span>
        <span className="text-accent">{displayPattern.category}</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_14rem] lg:gap-12">
        <article>
          <header className="border-b border-white/10 pb-10">
            <p className="text-xs uppercase tracking-[0.28em] text-accent">{displayPattern.category}</p>
            <h1 className="mt-4 text-4xl font-black sm:text-6xl">{displayPattern.title}</h1>
            <p className="mt-6 text-xl leading-9 text-muted">{displayPattern.summary}</p>
          </header>

          <FadeInView>
            <section className="border-b border-white/10 py-10">
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-6 bg-accent" />
                <h2 className="text-2xl font-semibold">{ui.es.whatIsIt}</h2>
              </div>
              <p className="mt-4 text-lg leading-8 text-muted">{displayPattern.description}</p>
            </section>
          </FadeInView>

          <FadeInView>
            <section className="border-b border-white/10 py-10">
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-6 bg-accent" />
                <h2 className="text-2xl font-semibold">{ui.es.howItWorks}</h2>
              </div>
              <p className="mt-4 text-lg leading-8 text-muted">
                El patrón cambia el coste de pensar: hace que la acción preferida sea inmediata, emocional o visualmente dominante, mientras
                vuelve la alternativa más lenta, discreta o fácil de dudar.
              </p>
            </section>
          </FadeInView>

          <FadeInView>
            <section className="border-b border-white/10 py-10">
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-6 bg-accent" />
                <h2 className="text-2xl font-semibold">{ui.es.visualExample}</h2>
              </div>
              <p className="mt-4 text-lg leading-8 text-muted">{ui.es.visualExampleIntro}</p>
              <div className="mt-6">
                <PatternVisualExample pattern={pattern} locale="es" />
              </div>
            </section>
          </FadeInView>

          <FadeInView>
            <section className="border-b border-white/10 py-10">
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-6 bg-accent" />
                <h2 className="text-2xl font-semibold">{ui.es.psychology}</h2>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {displayPattern.psychology.map((item) => (
                  <span key={item} className="border border-white/10 bg-surface px-3 py-2 text-sm text-paper transition-colors hover:border-accent/50">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </FadeInView>

          <FadeInView>
            <section className="border-b border-white/10 py-10">
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-6 bg-accent" />
                <h2 className="text-2xl font-semibold">{ui.es.realWorldExample}</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {displayPattern.examples.map((example) => (
                  <li key={example} className="border-l-2 border-accent pl-4 text-lg leading-8 text-muted transition-colors hover:border-l-4">
                    {example}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm uppercase tracking-[0.22em] text-muted">
                {ui.es.origin}: {displayPattern.origin}
              </p>
            </section>
          </FadeInView>

          <FadeInView>
            <section className="border-b border-white/10 py-10">
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-6 bg-accent" />
                <h2 className="text-2xl font-semibold">{ui.es.ethicalAlternative}</h2>
              </div>
              <div className="mt-5 border border-emerald-400/40 bg-emerald-400/10 p-5 transition-all duration-300 hover:border-emerald-400/60 hover:shadow-lg hover:shadow-emerald-400/5">
                <p className="text-lg leading-8 text-emerald-100">{displayPattern.ethicalAlternative}</p>
              </div>
            </section>
          </FadeInView>

          <FadeInView>
            <section className="py-10">
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-6 bg-accent" />
                <h2 className="text-2xl font-semibold">{ui.es.toxicityMeter}</h2>
              </div>
              <div className="mt-5">
                <SeverityMeter severity={pattern.severity} locale="es" />
              </div>
              <div className="mt-6">
                <ManipulationMeter category={pattern.category} severity={pattern.severity} locale="es" />
              </div>
            </section>
          </FadeInView>

          <div className="border-t border-white/10 pt-8">
            <Link href="/es/patterns" className="text-sm text-muted transition hover:text-paper">
              ← Volver al catálogo
            </Link>
          </div>
          <PatternViewTracker pattern={{ slug: pattern.slug, title: localizePattern(pattern, "es").title, category: localizePattern(pattern, "es").category }} locale="es" />
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <PatternSidebar locale="es" />
          </div>
        </aside>
      </div>
    </main>
  );
}
