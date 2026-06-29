"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { ui } from "@/lib/i18n";

export function Footer() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/es") ? "es" : "en";

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>{ui[locale].built}</p>
        <p className="uppercase tracking-[0.22em]">ONLY 3 LEFT™</p>
      </div>
    </footer>
  );
}
