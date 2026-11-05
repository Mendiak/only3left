import { ogAlt, renderOgImage } from "@/lib/og";

export const runtime = "edge";

export const alt = ogAlt("en");
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage("en", size);
}
