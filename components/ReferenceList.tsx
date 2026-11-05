import { getReference, type ReferenceId } from "@/lib/references";
import type { Locale } from "@/lib/i18n";

export function ReferenceList({
  ids,
  locale,
  title,
  className = "border-b border-white/10 py-10",
  headingLevel = 2,
}: {
  ids: ReferenceId[];
  locale: Locale;
  title?: string;
  className?: string;
  headingLevel?: 2 | 3;
}) {
  if (ids.length === 0) return null;

  const heading = title ?? (locale === "es" ? "Fuentes y lecturas" : "Sources and further reading");
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <section className={className} aria-labelledby="references">
      <div className="flex items-center gap-3">
        <div className="h-0.5 w-6 bg-accent" />
        <Heading id="references" className="text-sm uppercase tracking-[0.22em] text-muted">
          {heading}
        </Heading>
      </div>
      <ul className="mt-4 space-y-3">
        {ids.map((id) => {
          const reference = getReference(id);

          return (
            <li key={id} className="leading-7">
              <a
                href={reference.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-paper underline decoration-accent/40 underline-offset-4 transition hover:text-accent hover:decoration-accent"
              >
                {reference.label}
                <span aria-hidden="true"> ↗</span>
                <span className="sr-only"> ({locale === "es" ? "se abre en una pestaña nueva" : "opens in a new tab"})</span>
              </a>
              <span className="ml-2 text-xs uppercase tracking-[0.14em] text-muted/60">{reference.publisher}</span>
              {reference.note && <p className="mt-1 text-xs text-muted/50">{reference.note}</p>}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
