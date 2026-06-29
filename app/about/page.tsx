export const metadata = {
  title: "About | ONLY 3 LEFT™",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
      <p className="text-xs uppercase tracking-[0.28em] text-accent">About the archive</p>
      <h1 className="mt-4 text-4xl font-black sm:text-6xl">A field guide, not a shrine.</h1>
      <div className="mt-8 space-y-6 text-lg leading-8 text-muted">
        <p>
          ONLY 3 LEFT™ documents deceptive UX patterns as interface specimens: named, classified, explained, and kept at a professional
          distance.
        </p>
        <p>
          The goal is educational. Developers, designers, product teams, and curious readers should be able to recognize the mechanics,
          understand why they work, and choose better alternatives.
        </p>
        <p>
          The tone is deliberately dry because manipulation often arrives in cheerful microcopy. The critique is serious; the wink is
          evidence handling.
        </p>
      </div>
    </main>
  );
}
