import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0b",
        surface: "#141414",
        accent: "#ffe44d",
        paper: "#f5f5f5",
        muted: "#888888",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "slow-pulse": {
          "0%, 100%": { opacity: "0.72", transform: "translateY(0)" },
          "50%": { opacity: "1", transform: "translateY(-2px)" },
        },
        "glow-pulse": {
          "0%, 100%": { textShadow: "0 0 8px rgba(255,228,77,0.2)" },
          "50%": { textShadow: "0 0 24px rgba(255,228,77,0.6), 0 0 48px rgba(255,228,77,0.2)" },
        },
        "dot-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        "stock-drop": {
          "0%": { width: "0%" },
          "100%": { width: "var(--stock-width)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.97)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "card-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255,228,77,0)" },
          "50%": { boxShadow: "0 0 20px -8px rgba(255,228,77,0.3)" },
        },
      },
      animation: {
        "slow-pulse": "slow-pulse 5s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "dot-blink": "dot-blink 1.2s ease-in-out infinite",
        "stock-drop": "stock-drop 1.5s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out",
        shimmer: "shimmer 1.5s ease-in-out infinite",
        "card-glow": "card-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
