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
      },
      animation: {
        "slow-pulse": "slow-pulse 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
