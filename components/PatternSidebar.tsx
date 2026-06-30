"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { ui } from "@/lib/i18n";

type Section = { id: string; key: keyof typeof ui.en };

const sections: Section[] = [
  { id: "what-is-it", key: "whatIsIt" },
  { id: "how-it-works", key: "howItWorks" },
  { id: "visual-example", key: "visualExample" },
  { id: "psychology", key: "psychology" },
  { id: "examples", key: "realWorldExample" },
  { id: "alternative", key: "ethicalAlternative" },
  { id: "toxicity", key: "toxicityMeter" },
];

type PatternSidebarProps = {
  locale?: Locale;
};

export function PatternSidebar({ locale = "en" }: PatternSidebarProps) {
  const [activeId, setActiveId] = useState("");
  const t = ui[locale];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label={locale === "es" ? "Secciones" : "Sections"}>
      <p className="mb-4 text-xs uppercase tracking-[0.22em] text-muted">
        {locale === "es" ? "En esta página" : "On this page"}
      </p>
      <ul className="space-y-2">
        {sections.map(({ id, key }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block border-l-2 py-1 pl-3 text-sm transition-all duration-200 ${
                activeId === id
                  ? "border-accent text-paper"
                  : "border-white/10 text-muted hover:border-white/30 hover:text-paper"
              }`}
            >
              {(t as Record<string, string>)[key]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
