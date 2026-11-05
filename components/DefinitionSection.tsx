import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { patterns } from "@/lib/patterns";
import { ExternalLink } from "@/components/ExternalLink";

/**
 * The homepage is the strongest URL on the site, so it has to answer the head
 * query in prose instead of only showcasing the catalogue. The paragraphs carry
 * the outbound citations, which is what makes the definition verifiable.
 */
export function DefinitionSection({ locale }: { locale: Locale }) {
  const prefix = locale === "es" ? "/es" : "";

  const copy =
    locale === "es"
      ? {
          eyebrow: "Definición",
          heading: "¿Qué son los patrones oscuros?",
          read: "Leer la guía completa",
          browse: `Ver los ${patterns.length} patrones`,
        }
      : {
          eyebrow: "Definition",
          heading: "What are dark patterns?",
          read: "Read the full guide",
          browse: `Browse all ${patterns.length} patterns`,
        };

  return (
    <section className="border-y border-white/10 bg-surface/40" aria-labelledby="definition">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <div className="h-px w-full editorial-rule-full" />
            <p className="mt-4 text-xs uppercase tracking-[0.28em] text-accent">{copy.eyebrow}</p>
            <h2 id="definition" className="mt-3 text-3xl font-semibold sm:text-4xl">
              {copy.heading}
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`${prefix}/dark-patterns`}
                className="bg-accent px-5 py-3 text-sm font-semibold text-ink transition hover:bg-paper"
              >
                {copy.read}
              </Link>
              <Link
                href={`${prefix}/patterns`}
                className="border border-white/20 px-5 py-3 text-sm font-semibold text-paper transition hover:border-accent hover:text-accent"
              >
                {copy.browse}
              </Link>
            </div>
          </div>

          <div className="space-y-5 text-lg leading-8 text-muted">
            {locale === "es" ? (
              <>
                <p>
                  Un patrón oscuro es una decisión de diseño de interfaz que empuja a la persona usuaria hacia una opción que
                  no habría elegido si la alternativa se hubiera presentado con la misma claridad. El término lo acuñó{" "}
                  <ExternalLink refId="brignull">Harry Brignull</ExternalLink> en 2010 y hoy aparece en la{" "}
                  <ExternalLink refId="ucpd">normativa europea</ExternalLink>, en las guías de la{" "}
                  <ExternalLink refId="ftc">FTC</ExternalLink> y en los equipos de producto que intentan evitarlos.
                </p>
                <p>
                  Funcionan porque actúan antes del razonamiento: un contador que no se detiene, una casilla ya marcada, un enlace
                  de cancelación escondido. Cada uno mueve el coste de decidir fuera de la vista, y la decisión se mueve con él.
                </p>
                <p>
                  Este catálogo documenta {patterns.length} patrones con nombre, agrupados en diez categorías. Cada ficha explica el mecanismo, los
                  ejemplos reales, la palanca psicológica y la alternativa ética que produce el mismo resultado de negocio sin la
                  trampa.
                </p>
              </>
            ) : (
              <>
                <p>
                  A dark pattern is an interface design choice that steers a person toward an option they would not have picked if
                  the alternative had been presented with the same clarity. The term was coined by{" "}
                  <ExternalLink refId="brignull">Harry Brignull</ExternalLink> in 2010 and now appears in{" "}
                  <ExternalLink refId="ucpd">European regulation</ExternalLink>, in{" "}
                  <ExternalLink refId="ftc">FTC guidance</ExternalLink>, and in product teams trying to avoid them.
                </p>
                <p>
                  They work because they arrive before reasoning does: a countdown that does not stop, a box that is already
                  ticked, a cancellation link placed three screens deep. Each one moves the cost of deciding out of sight, and the
                  decision moves with it.
                </p>
                <p>
                  This catalogue documents {patterns.length} named patterns across ten categories. Every entry explains the mechanism, real
                  examples, the psychological lever, and the ethical alternative that produces the same business outcome without
                  the trick.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
