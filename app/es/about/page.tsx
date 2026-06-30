import { FadeInView } from "@/components/FadeInView";

export const metadata = {
  title: "Acerca",
  description:
    "ONLY 3 LEFT™ es una guía de campo educativa que documenta patrones de UX engañosa como especímenes de interfaz.",
  openGraph: {
    locale: "es_ES",
  },
};

export default function SpanishAboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
      <FadeInView>
        <p className="text-xs uppercase tracking-[0.28em] text-accent">Acerca del archivo</p>
        <h1 className="mt-4 text-4xl font-black sm:text-6xl">Una guía de campo, no un altar.</h1>
      </FadeInView>
      <div className="mt-8 space-y-6 text-lg leading-8 text-muted">
        <FadeInView delay={100}>
          <p>
            ONLY 3 LEFT™ documenta patrones de UX engañosa como especímenes de interfaz: nombrados, clasificados, explicados y observados
            con distancia profesional.
          </p>
        </FadeInView>
        <FadeInView delay={200}>
          <p>
            El objetivo es educativo. Desarrolladores, diseñadores, equipos de producto y personas curiosas deberían poder reconocer la
            mecánica, entender por qué funciona y elegir alternativas mejores.
          </p>
        </FadeInView>
        <FadeInView delay={300}>
          <p>
            El tono es seco a propósito, porque la manipulación suele llegar envuelta en microcopy simpático. La crítica es seria; el guiño
            es parte del método de observación.
          </p>
        </FadeInView>
      </div>
    </main>
  );
}
