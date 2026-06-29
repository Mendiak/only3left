import { redirect } from "next/navigation";
import { patterns } from "@/lib/patterns";

export default function SpanishRandomPage() {
  const pattern = patterns[Math.floor(Math.random() * patterns.length)];

  redirect(`/es/patterns/${pattern.slug}`);
}
