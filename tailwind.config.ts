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
      },
      animation: {
        "slow-pulse": "slow-pulse 5s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "dot-blink": "dot-blink 1.2s ease-in-out infinite",
        "stock-drop": "stock-drop 1.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
