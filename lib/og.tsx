import { ImageResponse } from "next/og";
import type { Locale } from "@/lib/i18n";

// Variable Inter from the Google Fonts repository: satori needs real font
// binaries, so the previous version (which passed the CSS response body as font
// data) produced a broken image at request time.
const FONT_URL =
  "https://raw.githubusercontent.com/google/fonts/main/ofl/inter/Inter%5Bopsz,wght%5D.ttf";

let cachedFont: ArrayBuffer | null = null;

async function loadFont(): Promise<ArrayBuffer> {
  if (cachedFont) {
    return cachedFont;
  }

  const buffer = await fetch(FONT_URL).then((response) => response.arrayBuffer());
  cachedFont = buffer;
  return buffer;
}

const copy = {
  en: {
    alt: "ONLY 3 LEFT™ — A field guide to deceptive UX",
    subtitle: "A field guide to deceptive UX",
    footer: "An interactive catalogue of manipulative interface patterns",
  },
  es: {
    alt: "ONLY 3 LEFT™ — Una guía de campo sobre UX engañosa",
    subtitle: "Una guía de campo sobre UX engañosa",
    footer: "Un catálogo interactivo de patrones de interfaz manipuladores",
  },
} as const;

export function ogAlt(locale: Locale) {
  return copy[locale].alt;
}

export async function renderOgImage(locale: Locale, size: { width: number; height: number }) {
  const text = copy[locale];
  const font = await loadFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b0b0b",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: "#ffe44d" }} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 80px" }}>
          <div style={{ fontSize: 96, fontWeight: 900, color: "#f5f5f5", letterSpacing: "0.02em", lineHeight: 1 }}>
            ONLY 3 LEFT™
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 34,
              fontWeight: 700,
              color: "#ffe44d",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            {text.subtitle}
          </div>
          <div
            style={{
              marginTop: 48,
              fontSize: 20,
              color: "#888888",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            {text.footer}
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 6, background: "#ffe44d" }} />
      </div>
    ),
    {
      width: size.width,
      height: size.height,
      fonts: [{ name: "Inter", data: font, weight: 400, style: "normal" }],
    }
  );
}
