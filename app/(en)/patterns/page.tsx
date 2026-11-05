import { FadeInView } from "@/components/FadeInView";
import { PatternGrid } from "@/components/PatternGrid";
import { patterns } from "@/lib/patterns";
import { staticPageMetadata } from "@/lib/seo";

export const metadata = staticPageMetadata({
  path: "/patterns",
  locale: "en",
  title: "Dark Pattern Examples: The Full Catalogue",
  description:
    "A working archive of 40 dark patterns — interface tactics that pressure, obscure, distract, or quietly preselect. Examples, psychology, and ethical fixes.",
  keywords: [
    "dark pattern examples",
    "list of dark patterns",
    "deceptive design patterns",
    "dark patterns catalogue",
  ],
});

export default function PatternsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <FadeInView>
        <div className="mb-10">
          <div className="h-px w-full editorial-rule-full" />
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Catalogue</p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">Patterns</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            A working archive of interface tactics that pressure, obscure, distract, or quietly preselect.
          </p>
        </div>
      </FadeInView>
      <PatternGrid patterns={patterns} />
    </main>
  );
}
