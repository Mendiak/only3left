"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { localePath, ui } from "@/lib/i18n";

export function Header() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/es") ? "es" : "en";
  const copy = ui[locale];
  const alternatePath = locale === "es" ? pathname.replace(/^\/es/, "") || "/" : `/es${pathname === "/" ? "" : pathname}`;

  const navItems = [
    { href: localePath(locale, "/patterns"), label: copy.patterns },
    { href: localePath(locale, "/categories"), label: copy.categories },
    { href: localePath(locale, "/about"), label: copy.about },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-ink/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8" aria-label="Main navigation">
        <Link href={localePath(locale, "/")} className="text-sm font-black tracking-[0.24em] text-accent">
          ONLY3LEFT
        </Link>
        <div className="flex items-center gap-3 text-sm text-muted sm:gap-5">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-paper">
              {item.label}
            </Link>
          ))}
          <Link href={localePath(locale, "/random")} className="border border-accent px-3 py-1.5 text-accent transition hover:bg-accent hover:text-ink">
            {copy.random}
          </Link>
          <Link href={alternatePath} className="text-xs uppercase tracking-[0.18em] text-muted transition hover:text-paper">
            {locale === "es" ? "EN" : "ES"}
          </Link>
        </div>
      </nav>
    </header>
  );
}
