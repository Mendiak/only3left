import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../globals.css";
import { RootShell } from "@/components/RootShell";
import { rootMetadata } from "@/lib/seo";

export const metadata: Metadata = rootMetadata("es");

export default function SpanishRootLayout({ children }: { children: ReactNode }) {
  return <RootShell lang="es">{children}</RootShell>;
}
