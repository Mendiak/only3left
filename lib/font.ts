import { Inter } from "next/font/google";

// Shared between both root layouts so the font is downloaded once and the
// CSS variable is identical no matter which locale tree is rendering.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
