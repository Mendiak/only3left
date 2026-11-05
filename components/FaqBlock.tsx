type FaqItem = { question: string; answer: string };

export function FaqBlock({
  items,
  title,
  id = "faq",
  className = "border-b border-white/10 py-10",
}: {
  items: FaqItem[];
  title: string;
  id?: string;
  className?: string;
}) {
  if (items.length === 0) return null;

  return (
    <section className={className} aria-labelledby={id}>
      <div className="flex items-center gap-3">
        <div className="h-0.5 w-6 bg-accent" />
        <h2 id={id} className="text-2xl font-semibold">
          {title}
        </h2>
      </div>
      <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
        {items.map((item) => (
          <div key={item.question} className="py-5">
            <h3 className="text-lg font-semibold text-paper">{item.question}</h3>
            <p className="mt-2 leading-8 text-muted">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
