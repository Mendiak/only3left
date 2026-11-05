import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { localizeCategoryData, localizePattern } from "@/lib/i18n";
import type { Category, Pattern } from "@/lib/types";
import { categoryContent } from "@/lib/categoryContent";
import { pillarContent } from "@/lib/pillarContent";
import { referenceUrl } from "@/lib/references";
import { categories } from "@/lib/categories";
import { getPatternsByCategory } from "@/lib/patterns";

export const SITE_URL = "https://only3left.vercel.app";
export const SITE_NAME = "ONLY 3 LEFT™";

// Fixed content revision date: sitemaps should not claim every page changed on every request.
export const CONTENT_UPDATED = new Date("2026-11-05");

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export function localePath(path: string, locale: Locale) {
  if (locale === "en") {
    return path;
  }

  return `/es${path === "/" ? "" : path}`;
}

export function rootMetadata(locale: Locale): Metadata {
  const isEs = locale === "es";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: isEs
        ? "Patrones oscuros: catálogo de UX engañosa"
        : "Dark Patterns Catalogue | A field guide to deceptive UX",
      template: "%s | ONLY 3 LEFT™",
    },
    description: isEs
      ? "Un catálogo interactivo de patrones oscuros y técnicas de UX engañosa: nómbralas, clasifícalas y entiende la manipulación de interfaces."
      : "An interactive catalogue of dark patterns and deceptive UX techniques — name, classify, and understand interface manipulation.",
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "education",
    keywords: isEs
      ? [
          "patrones oscuros",
          "dark patterns",
          "UX engañosa",
          "ejemplos de patrones oscuros",
          "diseño engañoso",
          "manipulación de interfaces",
          "roach motel",
          "confirmshaming",
          "escasez falsa",
          "trampas de suscripción",
        ]
      : [
          "dark patterns",
          "deceptive UX",
          "dark pattern examples",
          "deceptive design",
          "UX manipulation",
          "roach motel",
          "confirmshaming",
          "fake scarcity",
          "subscription traps",
        ],
    verification: {
      google: "YQRsFuAu9kLLD9W473-R49ZQyvsYI7rhe6cfmgxsOvs",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: isEs ? "es_ES" : "en_US",
      siteName: SITE_NAME,
      title: isEs
        ? "ONLY 3 LEFT™ — Una guía de campo sobre UX engañosa"
        : "ONLY 3 LEFT™ — A field guide to deceptive UX",
      description: isEs
        ? "Un catálogo interactivo de patrones de UX engañosa: nómbralos, clasifícalos y entiende la manipulación de interfaces."
        : "An interactive catalogue of deceptive UX patterns — name, classify, and understand interface manipulation.",
    },
    twitter: {
      card: "summary_large_image",
      title: isEs
        ? "ONLY 3 LEFT™ — Una guía de campo sobre UX engañosa"
        : "ONLY 3 LEFT™ — A field guide to deceptive UX",
      description: isEs
        ? "Un catálogo interactivo de patrones de UX engañosa."
        : "An interactive catalogue of deceptive UX patterns.",
    },
  };
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
        url: SITE_URL,
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
        alternateName: "ONLY 3 LEFT",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/icon.svg`,
          caption: SITE_NAME,
        },
        description:
          "An educational field guide documenting deceptive UX patterns as interface specimens.",
        sameAs: ["https://github.com/Mendiak/only3left"],
      },
    ],
  };
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function pillarMetadata(locale: Locale): Metadata {
  const content = pillarContent[locale];
  const path = "/dark-patterns";
  const canonical = localePath(path, locale);

  return {
    title: content.h1,
    description: content.description,
    keywords:
      locale === "es"
        ? ["qué son los patrones oscuros", "patrones oscuros", "dark patterns", "ejemplos", "tipos", "diseño engañoso"]
        : ["what are dark patterns", "dark patterns", "dark pattern examples", "types of dark patterns", "deceptive design"],
    alternates: {
      canonical,
      languages: {
        en: localePath(path, "en"),
        es: localePath(path, "es"),
        "x-default": localePath(path, "en"),
      },
    },
    openGraph: {
      title: content.h1,
      description: content.description,
      url: canonical,
      siteName: SITE_NAME,
      type: "article",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
    twitter: {
      title: content.h1,
      description: content.description,
      card: "summary_large_image",
    },
  };
}

export function pillarJsonLd(locale: Locale) {
  const content = pillarContent[locale];
  const path = "/dark-patterns";
  const url = absoluteUrl(localePath(path, locale));
  const homeName = locale === "es" ? "Inicio" : "Home";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: homeName, item: absoluteUrl(localePath("/", locale)) },
          { "@type": "ListItem", position: 2, name: content.h1, item: url },
        ],
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: content.h1,
        description: content.description,
        inLanguage: locale === "es" ? "es" : "en",
        url,
        dateModified: CONTENT_UPDATED.toISOString().slice(0, 10),
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        citation: content.references.map((id) => referenceUrl(id)),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: content.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}

export function categoryMetadata(category: Category, locale: Locale): Metadata {
  const content = categoryContent[category.slug]?.[locale];
  const localized = localizeCategoryData(category, locale);
  const path = `/categories/${category.slug}`;
  const canonical = localePath(path, locale);

  const title = content?.heading ?? `${localized.title} dark patterns`;
  const description = trimTo(
    content?.intro[0] ??
      `${localized.description} Examples, psychology and the ethical alternative.`,
    158
  );

  return {
    title,
    description,
    keywords:
      locale === "es"
        ? [`${localized.title} patrones oscuros`, "patrones oscuros", "ejemplos", "dark patterns"]
        : [`${localized.title} dark patterns`, "dark patterns", "examples", "deceptive UX"],
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

export function categoryJsonLd(category: Category, locale: Locale) {
  const content = categoryContent[category.slug]?.[locale];
  const localized = localizeCategoryData(category, locale);
  const path = `/categories/${category.slug}`;
  const url = absoluteUrl(localePath(path, locale));
  const collectionUrl = absoluteUrl(localePath("/categories", locale));
  const homeName = locale === "es" ? "Inicio" : "Home";
  const collectionName = locale === "es" ? "Categorías" : "Categories";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: homeName, item: absoluteUrl(localePath("/", locale)) },
          { "@type": "ListItem", position: 2, name: collectionName, item: collectionUrl },
          { "@type": "ListItem", position: 3, name: localized.title, item: url },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${url}#collection`,
        name: content?.heading ?? localized.title,
        description: content?.intro[0] ?? localized.description,
        url,
        inLanguage: locale === "es" ? "es" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: getPatternsByCategory(category.title).map((pattern, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: localizePattern(pattern, locale).title,
            url: absoluteUrl(localePath(`/patterns/${pattern.slug}`, locale)),
          })),
        },
      },
      ...(content
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              mainEntity: content.faq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            },
          ]
        : []),
    ],
  };
}

/** ItemList of every category, used on /categories to declare the taxonomy. */
export function categoriesJsonLd(locale: Locale) {
  const url = absoluteUrl(localePath("/categories", locale));

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    name: locale === "es" ? "Categorías de patrones oscuros" : "Dark pattern categories",
    url,
    inLanguage: locale === "es" ? "es" : "en",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: categories.map((category, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: localizeCategoryData(category, locale).title,
        url: absoluteUrl(localePath(`/categories/${category.slug}`, locale)),
      })),
    },
  };
}
