import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeInView } from "@/components/FadeInView";
import { PatternSidebar } from "@/components/PatternSidebar";
import { PatternVisualExample } from "@/components/PatternVisualExample";
import { ProgressBar } from "@/components/ProgressBar";
import { SeverityMeter } from "@/components/SeverityMeter";
import { getPattern, patterns } from "@/lib/patterns";

type PatternPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  // Static params keep pattern pages fast while content remains plain local data.
  return patterns.map((pattern) => ({ slug: pattern.slug }));
}

export async function generateMetadata({ params }: PatternPageProps) {
  const { slug } = await params;
  const pattern = getPattern(slug);

  if (!pattern) {
    return { title: "Pattern not found" };
  }

  return {
    title: pattern.title,
    description: pattern.summary,
    openGraph: {
      title: `${pattern.title} — ONLY 3 LEFT™`,
      description: pattern.summary,
      type: "article",
    },
    twitter: {
      title: `${pattern.title} — ONLY 3 LEFT™`,
      description: pattern.summary,
    },
  };
}

export default async function PatternPage({ params }: PatternPageProps) {
  const { slug } = await params;
  const pattern = getPattern(slug);

  if (!pattern) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <ProgressBar />

      <nav className="mb-6 text-xs uppercase tracking-[0.2em] text-muted" aria-label="Breadcrumb">
        <Link href="/patterns" className="transition hover:text-paper">Patterns</Link>
        <span className="mx-2">→</span>
        <span className="text-accent">{pattern.category}</span>
      </nav>

      <div className="lg:grid lg:grid-cols-[1fr_14rem] lg:gap-12">
        <article>
          <header className="border-b border-white/10 pb-10">
            <p className="text-xs uppercase tracking-[0.28em] text-accent">{pattern.category}</p>
            <h1 className="mt-4 text-4xl font-black sm:text-6xl">{pattern.title}</h1>
            <p className="mt-6 text-xl leading-9 text-muted">{pattern.summary}</p>
          </header>

          <FadeInView>
            <section className="border-b border-white/10 py-10" aria-labelledby="what-is-it">
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-6 bg-accent" />
                <h2 id="what-is-it" className="text-2xl font-semibold">What is it?</h2>
              </div>
              <p className="mt-4 text-lg leading-8 text-muted">{pattern.description}</p>
            </section>
          </FadeInView>

          <FadeInView>
            <section className="border-b border-white/10 py-10" aria-labelledby="how-it-works">
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-6 bg-accent" />
                <h2 id="how-it-works" className="text-2xl font-semibold">How it works</h2>
              </div>
              <p className="mt-4 text-lg leading-8 text-muted">
                The pattern changes the cost of thinking. It makes the preferred action immediate, emotionally charged, or visually dominant,
                while making the more reflective action slower, duller, or easier to doubt.
              </p>
            </section>
          </FadeInView>

          <FadeInView>
            <section className="border-b border-white/10 py-10" aria-labelledby="visual-example">
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-6 bg-accent" />
                <h2 id="visual-example" className="text-2xl font-semibold">Visual Example</h2>
              </div>
              <p className="mt-4 text-lg leading-8 text-muted">
                A simplified specimen designed to make the pattern recognizable at a glance.
              </p>
              <div className="mt-6">
                <PatternVisualExample pattern={pattern} />
              </div>
            </section>
          </FadeInView>

          <FadeInView>
            <section className="border-b border-white/10 py-10" aria-labelledby="psychology">
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-6 bg-accent" />
                <h2 id="psychology" className="text-2xl font-semibold">Psychology</h2>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {pattern.psychology.map((item) => (
                  <span key={item} className="border border-white/10 bg-surface px-3 py-2 text-sm text-paper transition-colors hover:border-accent/50">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </FadeInView>

          <FadeInView>
            <section className="border-b border-white/10 py-10" aria-labelledby="examples">
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-6 bg-accent" />
                <h2 id="examples" className="text-2xl font-semibold">Real World Example</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {pattern.examples.map((example) => (
                  <li key={example} className="border-l-2 border-accent pl-4 text-lg leading-8 text-muted transition-colors hover:border-l-4">
                    {example}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm uppercase tracking-[0.22em] text-muted">Origin: {pattern.origin}</p>
            </section>
          </FadeInView>

          <FadeInView>
            <section className="border-b border-white/10 py-10" aria-labelledby="alternative">
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-6 bg-accent" />
                <h2 id="alternative" className="text-2xl font-semibold">Ethical Alternative</h2>
              </div>
              <div className="mt-5 border border-emerald-400/40 bg-emerald-400/10 p-5 transition-all duration-300 hover:border-emerald-400/60 hover:shadow-lg hover:shadow-emerald-400/5">
                <p className="text-lg leading-8 text-emerald-100">{pattern.ethicalAlternative}</p>
              </div>
            </section>
          </FadeInView>

          <FadeInView>
            <section className="py-10" aria-labelledby="toxicity">
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-6 bg-accent" />
                <h2 id="toxicity" className="text-2xl font-semibold">Toxicity Meter</h2>
              </div>
              <div className="mt-5">
                <SeverityMeter severity={pattern.severity} />
              </div>
            </section>
          </FadeInView>

          <div className="border-t border-white/10 pt-8">
            <Link href="/patterns" className="text-sm text-muted transition hover:text-paper">
              ← Back to Catalogue
            </Link>
          </div>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <PatternSidebar />
          </div>
        </aside>
      </div>
    </main>
  );
}
