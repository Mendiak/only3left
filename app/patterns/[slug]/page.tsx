import { notFound } from "next/navigation";
import { PatternVisualExample } from "@/components/PatternVisualExample";
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

  return {
    title: pattern ? `${pattern.title} | ONLY 3 LEFT™` : "Pattern | ONLY 3 LEFT™",
    description: pattern?.summary,
  };
}

export default async function PatternPage({ params }: PatternPageProps) {
  const { slug } = await params;
  const pattern = getPattern(slug);

  if (!pattern) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
      <article>
        <header className="border-b border-white/10 pb-10">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">{pattern.category}</p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">{pattern.title}</h1>
          <p className="mt-6 text-xl leading-9 text-muted">{pattern.summary}</p>
        </header>

        <section className="border-b border-white/10 py-10" aria-labelledby="what-is-it">
          <h2 id="what-is-it" className="text-2xl font-semibold">
            What is it?
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted">{pattern.description}</p>
        </section>

        <section className="border-b border-white/10 py-10" aria-labelledby="how-it-works">
          <h2 id="how-it-works" className="text-2xl font-semibold">
            How it works
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            The pattern changes the cost of thinking. It makes the preferred action immediate, emotionally charged, or visually dominant,
            while making the more reflective action slower, duller, or easier to doubt.
          </p>
        </section>

        <section className="border-b border-white/10 py-10" aria-labelledby="visual-example">
          <h2 id="visual-example" className="text-2xl font-semibold">
            Visual Example
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            A simplified specimen designed to make the pattern recognizable at a glance.
          </p>
          <div className="mt-6">
            <PatternVisualExample pattern={pattern} />
          </div>
        </section>

        <section className="border-b border-white/10 py-10" aria-labelledby="psychology">
          <h2 id="psychology" className="text-2xl font-semibold">
            Psychology
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {pattern.psychology.map((item) => (
              <span key={item} className="border border-white/10 bg-surface px-3 py-2 text-sm text-paper">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="border-b border-white/10 py-10" aria-labelledby="examples">
          <h2 id="examples" className="text-2xl font-semibold">
            Real World Example
          </h2>
          <ul className="mt-5 space-y-3">
            {pattern.examples.map((example) => (
              <li key={example} className="border-l-2 border-accent pl-4 text-lg leading-8 text-muted">
                {example}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm uppercase tracking-[0.22em] text-muted">Origin: {pattern.origin}</p>
        </section>

        <section className="border-b border-white/10 py-10" aria-labelledby="alternative">
          <h2 id="alternative" className="text-2xl font-semibold">
            Ethical Alternative
          </h2>
          <div className="mt-5 border border-emerald-400/40 bg-emerald-400/10 p-5">
            <p className="text-lg leading-8 text-emerald-100">{pattern.ethicalAlternative}</p>
          </div>
        </section>

        <section className="py-10" aria-labelledby="toxicity">
          <h2 id="toxicity" className="text-2xl font-semibold">
            Toxicity Meter
          </h2>
          <div className="mt-5">
            <SeverityMeter severity={pattern.severity} />
          </div>
        </section>
      </article>
    </main>
  );
}
