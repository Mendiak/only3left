import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { localizePattern } from "@/lib/i18n";
import type { Pattern } from "@/lib/types";

export const SITE_URL = "https://only3left.vercel.app";
export const SITE_NAME = "ONLY 3 LEFT™";

// Fixed content revision date: sitemaps should not claim every page changed on every request.
export const CONTENT_UPDATED = new Date("2026-11-04");

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export function localePath(path: string, locale: Locale) {
  if (locale === "en") {
    return path;
  }

  return `/es${path === "/" ? "" : path}`;
}

export function staticPageMetadata({
  path,
  locale,
  title,
  description,
  keywords,
}: {
  path: string;
  locale: Locale;
  title: string;
  description: string;
  keywords?: string[];
}): Metadata {
  const canonical = localePath(path, locale);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: {
        en: localePath(path, "en"),
        es: localePath(path, "es"),
        "x-default": localePath(path, "en"),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
    },
  };
}

export function patternMetadata(pattern: Pattern, locale: Locale): Metadata {
  const display = localizePattern(pattern, locale);
  const path = `/patterns/${pattern.slug}`;
  const canonical = localePath(path, locale);

  const title =
    locale === "es"
      ? `${display.title}: patrón oscuro, ejemplos y definición`
      : `${display.title} Dark Pattern: Examples & Definition`;

  const description = buildDescription(display, locale);

  const keywords =
    locale === "es"
      ? [
          display.title,
          "patrón oscuro",
          "dark pattern",
          `qué es ${display.title.toLowerCase()}`,
          `ejemplos de ${display.title.toLowerCase()}`,
          "UX engañosa",
          display.category,
        ]
      : [
          display.title,
          `${display.title} dark pattern`,
          `${display.title} examples`,
          `what is ${display.title.toLowerCase()}`,
          "dark patterns",
          "deceptive UX",
          display.category,
        ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: {
        en: localePath(path, "en"),
        es: localePath(path, "es"),
        "x-default": localePath(path, "en"),
      },
    },
    openGraph: {
      title: `${title} — ${SITE_NAME}`,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "article",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
    twitter: {
      title: `${title} — ${SITE_NAME}`,
      description,
      card: "summary_large_image",
    },
  };
}

function buildDescription(pattern: Pattern, locale: Locale) {
  const base = pattern.description.trim();
  const suffix =
    locale === "es"
      ? " Ejemplos, psicología y la alternativa ética."
      : " Examples, psychology, and the ethical alternative.";

  const lead = base.length < 90 ? `${base} ${pattern.summary}`.trim() : base;
  const withSuffix = `${lead}${suffix}`;

  if (withSuffix.length <= 158) {
    return withSuffix;
  }

  if (lead.length <= 158) {
    return lead;
  }

  return trimTo(lead, 158);
}

function trimTo(text: string, max: number) {
  if (text.length <= max) {
    return text;
  }

  return `${text.slice(0, max).replace(/[\s,;:.]+$/, "")}…`;
}

export type PatternFaq = {
  question: string;
  answer: string;
};

export function patternFaq(pattern: Pattern, locale: Locale): PatternFaq[] {
  const display = localizePattern(pattern, locale);
  const psychology = display.psychology.join(", ");

  if (locale === "es") {
    return [
      { question: `¿Qué es ${display.title}?`, answer: display.description },
      {
        question: `¿Qué ejemplos hay de ${display.title}?`,
        answer: display.examples.join(" "),
      },
      {
        question: `¿Por qué funciona ${display.title}?`,
        answer: `Se apoya en ${psychology} para que la acción preferida parezca más rápida, segura o normal que la alternativa.`,
      },
      {
        question: `¿Dónde aparece ${display.title}?`,
        answer: display.origin,
      },
      {
        question: `¿Cuál es la alternativa ética a ${display.title}?`,
        answer: display.ethicalAlternative,
      },
    ];
  }

  return [
    { question: `What is ${display.title}?`, answer: display.description },
    {
      question: `What are examples of ${display.title}?`,
      answer: display.examples.join(" "),
    },
    {
      question: `Why does ${display.title} work?`,
      answer: `It leans on ${psychology} to make the preferred action feel faster, safer, or more normal than the alternative.`,
    },
    {
      question: `Where does ${display.title} appear?`,
      answer: display.origin,
    },
    {
      question: `What is the ethical alternative to ${display.title}?`,
      answer: display.ethicalAlternative,
    },
  ];
}

export function patternJsonLd(pattern: Pattern, locale: Locale) {
  const display = localizePattern(pattern, locale);
  const path = `/patterns/${pattern.slug}`;
  const url = absoluteUrl(localePath(path, locale));
  const collectionUrl = absoluteUrl(localePath("/patterns", locale));
  const faq = patternFaq(pattern, locale);

  const homeName = locale === "es" ? "Inicio" : "Home";
  const collectionName = locale === "es" ? "Patrones" : "Patterns";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: homeName,
            item: absoluteUrl(localePath("/", locale)),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: collectionName,
            item: collectionUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: display.title,
            item: url,
          },
        ],
      },
      {
        "@type": "DefinedTerm",
        "@id": `${url}#term`,
        name: display.title,
        description: display.description,
        url,
        inDefinedTermSet: {
          "@type": "DefinedTermSet",
          name:
            locale === "es"
              ? "Catálogo de patrones oscuros de ONLY 3 LEFT"
              : "ONLY 3 LEFT dark pattern catalogue",
          url: collectionUrl,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        alternateName: "ONLY 3 LEFT",
        url: absoluteUrl(localePath("/", locale)),
        description:
          locale === "es"
            ? "Un catálogo interactivo de patrones de UX engañosa."
            : "An interactive catalogue of deceptive UX patterns.",
        inLanguage: locale === "es" ? "es" : "en",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        description:
          "An educational field guide documenting deceptive UX patterns as interface specimens.",
      },
    ],
  };
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
