"use client";

import { usePathname } from "next/navigation";

export function SkipLink() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/es") ? "es" : "en";

  return (
    <a
      href="#main-content"
      className="fixed -top-40 left-3 z-50 bg-accent px-4 py-2 text-sm font-semibold text-ink transition-all focus:top-3 focus:outline-none"
    >
      {locale === "es" ? "Saltar al contenido" : "Skip to content"}
    </a>
  );
}
