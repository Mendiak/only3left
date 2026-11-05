import { notFound } from "next/navigation";
import { CategoryPageView } from "@/components/CategoryPageView";
import { categories, getCategory } from "@/lib/categories";
import { categoryMetadata } from "@/lib/seo";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return { title: "Category not found" };
  }

  return categoryMetadata(category, "en");
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  if (!getCategory(slug)) {
    notFound();
  }

  return <CategoryPageView slug={slug} locale="en" />;
}
