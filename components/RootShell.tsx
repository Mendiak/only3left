import type { ReactNode } from "react";
import { inter } from "@/lib/font";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SkipLink } from "@/components/SkipLink";
import { LayoutClient } from "@/components/LayoutClient";
import { jsonLdScript, websiteJsonLd } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

/**
 * Both locale trees need their own root layout to server-render the correct
 * <html lang>. Route groups make that possible without duplicating the shell.
 */
export function RootShell({ lang, children }: { lang: Locale; children: ReactNode }) {
  return (
    <html lang={lang}>
      <body className={`${inter.variable} min-h-screen bg-ink font-sans text-paper antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(websiteJsonLd(lang)) }}
        />
        <SkipLink />
        <Header />
        <LayoutClient>{children}</LayoutClient>
        <Footer />
      </body>
    </html>
  );
}
