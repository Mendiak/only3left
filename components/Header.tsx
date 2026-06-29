import Link from "next/link";

const navItems = [
  { href: "/patterns", label: "Patterns" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-ink/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8" aria-label="Main navigation">
        <Link href="/" className="text-sm font-black tracking-[0.24em] text-accent">
          ONLY3LEFT
        </Link>
        <div className="flex items-center gap-3 text-sm text-muted sm:gap-5">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-paper">
              {item.label}
            </Link>
          ))}
          <Link href="/random" className="border border-accent px-3 py-1.5 text-accent transition hover:bg-accent hover:text-ink">
            Random
          </Link>
        </div>
      </nav>
    </header>
  );
}
