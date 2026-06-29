import Link from "next/link";
import type { Category } from "@/lib/types";

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories#${category.slug}`} className="border border-white/10 bg-surface p-5 transition hover:border-accent">
      <p className="text-xs uppercase tracking-[0.22em] text-accent">Category</p>
      <h3 className="mt-4 text-xl font-semibold">{category.title}</h3>
      <p className="mt-3 leading-7 text-muted">{category.description}</p>
    </Link>
  );
}
