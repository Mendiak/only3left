import { ogAlt, renderOgImage } from "@/lib/og";

export const runtime = "edge";

export const alt = ogAlt("es");
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage("es", size);
}
