import type { Locale } from "@/lib/i18n";
import { patternFaq } from "@/lib/seo";
import type { Pattern } from "@/lib/types";

type PatternFaqSectionProps = {
  pattern: Pattern;
  locale?: Locale;
};

export function PatternFaqSection({ pattern, locale = "en" }: PatternFaqSectionProps) {
  const faq = patternFaq(pattern, locale);

  return (
    <section className="border-b border-white/10 py-10" aria-labelledby="faq">
      <div className="flex items-center gap-3">
        <div className="h-0.5 w-6 bg-accent" />
        <h2 id="faq" className="text-2xl font-semibold">
          {locale === "es" ? "Preguntas frecuentes" : "Frequently asked questions"}
        </h2>
      </div>
      <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
        {faq.map((item) => (
          <div key={item.question} className="py-5">
            <h3 className="text-lg font-semibold text-paper">{item.question}</h3>
            <p className="mt-2 leading-8 text-muted">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
