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
        <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
          <p>{ui[locale].built}</p>
          <p>
            {locale === "es" ? "Hecho por" : "Built by"}{" "}
            <a
              href="https://mendiak.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white"
            >
              Mikel Aramendia
            </a>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Mendiak/only3left"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-white"
          >
            GitHub
          </a>
          <p className="uppercase tracking-[0.22em]">ONLY 3 LEFT™</p>
        </div>
      </div>
    </footer>
  );
}
