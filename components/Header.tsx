"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { localePath, ui } from "@/lib/i18n";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const locale: Locale = pathname.startsWith("/es") ? "es" : "en";
  const copy = ui[locale];
  const alternatePath = locale === "es" ? pathname.replace(/^\/es/, "") || "/" : `/es${pathname === "/" ? "" : pathname}`;

  const navItems = [
    { href: localePath(locale, "/patterns"), label: copy.patterns },
    { href: localePath(locale, "/categories"), label: copy.categories },
    { href: localePath(locale, "/about"), label: copy.about },
  ];

  // Close the mobile panel after every navigation so it never stays open over
  // the next page.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-ink/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8" aria-label="Main navigation">
        <Link href={localePath(locale, "/")} className="text-sm font-black tracking-[0.24em] text-accent">
          ONLY3LEFT
        </Link>

        <div className="hidden items-center gap-3 text-sm text-muted sm:flex sm:gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`link-underline transition hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${isActive(item.href) ? "text-paper" : ""}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={localePath(locale, "/random")}
            className="border border-accent px-3 py-1.5 text-accent transition-all duration-200 hover:scale-105 hover:bg-accent hover:text-ink active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            {copy.random}
          </Link>
          <Link
            href={alternatePath}
            className="text-xs uppercase tracking-[0.18em] text-muted transition hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            {locale === "es" ? "EN" : "ES"}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? (locale === "es" ? "Cerrar menú" : "Close menu") : locale === "es" ? "Abrir menú" : "Open menu"}
          className="grid size-11 place-items-center border border-white/15 text-muted transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:hidden"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-white/10 px-5 pb-5 sm:hidden">
          <div className="flex flex-col pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`border-b border-white/5 py-3 text-sm transition hover:text-paper ${isActive(item.href) ? "text-paper" : "text-muted"}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={localePath(locale, "/random")}
              className="mt-3 border border-accent px-3 py-2.5 text-center text-sm text-accent transition hover:bg-accent hover:text-ink"
            >
              {copy.random}
            </Link>
            <Link
              href={alternatePath}
              className="mt-3 py-2 text-center text-xs uppercase tracking-[0.18em] text-muted transition hover:text-paper"
            >
              {locale === "es" ? "English version" : "Versión en español"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
