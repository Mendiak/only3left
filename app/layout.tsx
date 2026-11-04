import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LangSetter } from "@/components/LangSetter";
import { SkipLink } from "@/components/SkipLink";
import { LayoutClient } from "@/components/LayoutClient";
import { SITE_NAME, SITE_URL, jsonLdScript, websiteJsonLd } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dark Patterns Catalogue | A field guide to deceptive UX",
    template: "%s | ONLY 3 LEFT™",
  },
  description:
    "An interactive catalogue of dark patterns and deceptive UX techniques — name, classify, and understand interface manipulation.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "education",
  keywords: [
    "dark patterns",
    "deceptive UX",
    "dark pattern examples",
    "deceptive design",
    "UX manipulation",
    "roach motel",
    "confirmshaming",
    "fake scarcity",
    "subscription traps",
  ],
  verification: {
    google: "YQRsFuAu9kLLD9W473-R49ZQyvsYI7rhe6cfmgxsOvs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: "ONLY 3 LEFT™ — A field guide to deceptive UX",
    description:
      "An interactive catalogue of deceptive UX patterns — name, classify, and understand interface manipulation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ONLY 3 LEFT™ — A field guide to deceptive UX",
    description:
      "An interactive catalogue of deceptive UX patterns — name, classify, and understand interface manipulation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen bg-ink font-sans text-paper antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(websiteJsonLd("en")) }}
        />
        <LangSetter />
        <SkipLink />
        <Header />
        <LayoutClient>{children}</LayoutClient>
        <Footer />
      </body>
    </html>
  );
}
