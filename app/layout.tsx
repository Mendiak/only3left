import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ONLY 3 LEFT™ | A field guide to deceptive UX",
  description:
    "An interactive catalogue of techniques used to influence user decisions online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen bg-ink font-sans text-paper antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
