import { redirect } from "next/navigation";
import { patterns } from "@/lib/patterns";

export default function RandomPage() {
  // Randomization happens on the route to avoid client/server hydration drift in shared navigation.
  const pattern = patterns[Math.floor(Math.random() * patterns.length)];

  redirect(`/patterns/${pattern.slug}`);
}
