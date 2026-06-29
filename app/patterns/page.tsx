import { PatternCard } from "@/components/PatternCard";
import { patterns } from "@/lib/patterns";

export const metadata = {
  title: "Patterns | ONLY 3 LEFT™",
};

export default function PatternsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.28em] text-accent">Catalogue</p>
        <h1 className="mt-4 text-4xl font-black sm:text-6xl">Patterns</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          A working archive of interface tactics that pressure, obscure, distract, or quietly preselect.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {patterns.map((pattern) => (
          <PatternCard key={pattern.slug} pattern={pattern} />
        ))}
      </div>
    </main>
  );
}
