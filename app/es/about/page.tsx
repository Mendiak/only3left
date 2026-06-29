export const metadata = {
  title: "Acerca | ONLY 3 LEFT™",
};

export default function SpanishAboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
      <p className="text-xs uppercase tracking-[0.28em] text-accent">Acerca del archivo</p>
      <h1 className="mt-4 text-4xl font-black sm:text-6xl">Una guía de campo, no un altar.</h1>
      <div className="mt-8 space-y-6 text-lg leading-8 text-muted">
        <p>
          ONLY 3 LEFT™ documenta patrones de UX engañosa como especímenes de interfaz: nombrados, clasificados, explicados y observados
          con distancia profesional.
        </p>
        <p>
          El objetivo es educativo. Desarrolladores, diseñadores, equipos de producto y personas curiosas deberían poder reconocer la
          mecánica, entender por qué funciona y elegir alternativas mejores.
        </p>
        <p>
          El tono es seco a propósito, porque la manipulación suele llegar envuelta en microcopy simpático. La crítica es seria; el guiño
          es parte del método de observación.
        </p>
      </div>
    </main>
  );
}
