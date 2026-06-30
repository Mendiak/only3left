import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localePath, localizeCategoryData } from "@/lib/i18n";
import type { Category } from "@/lib/types";

type CategoryCardProps = {
  category: Category;
  locale?: Locale;
};

export function CategoryCard({ category, locale = "en" }: CategoryCardProps) {
  const displayCategory = localizeCategoryData(category, locale);

  return (
    <Link href={`${localePath(locale, "/categories")}#${category.slug}`} className="block border border-white/10 bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/5">
      <p className="text-xs uppercase tracking-[0.22em] text-accent">{locale === "es" ? "Categoría" : "Category"}</p>
      <h3 className="mt-4 text-xl font-semibold">{displayCategory.title}</h3>
      <p className="mt-3 leading-7 text-muted">{displayCategory.description}</p>
    </Link>
  );
}
