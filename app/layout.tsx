import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LangSetter } from "@/components/LangSetter";
import { SkipLink } from "@/components/SkipLink";
import { LayoutClient } from "@/components/LayoutClient";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://only3left.vercel.app"),
  title: {
    default: "ONLY 3 LEFT™ | A field guide to deceptive UX",
    template: "%s | ONLY 3 LEFT™",
  },
  description:
    "An interactive catalogue of techniques used to influence user decisions online.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ONLY 3 LEFT™",
    title: "ONLY 3 LEFT™ — A field guide to deceptive UX",
    description:
      "An interactive catalogue of techniques used to influence user decisions online.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ONLY 3 LEFT™ — A field guide to deceptive UX",
    description:
      "An interactive catalogue of techniques used to influence user decisions online.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="YQRsFuAu9kLLD9W473-R49ZQyvsYI7rhe6cfmgxsOvs" />
      </head>
      <body className={`${inter.variable} min-h-screen bg-ink font-sans text-paper antialiased`}>
        <LangSetter />
        <SkipLink />
        <Header />
        <LayoutClient>{children}</LayoutClient>
        <Footer />
      </body>
    </html>
  );
}
