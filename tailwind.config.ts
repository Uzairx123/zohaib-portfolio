import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0a0b",
          900: "#101012",
          800: "#17171a",
          700: "#1f1f23",
          600: "#2a2a30",
          500: "#3a3a42",
        },
        cream: {
          50: "#faf7f2",
          100: "#f5f1eb",
          200: "#e8e2d8",
          300: "#c9c2b5",
          400: "#9a9489",
        },
        signal: {
          // Electric lime — the "GO / approved / land the job" accent
          50: "#f4ffd9",
          100: "#e8ffb3",
          200: "#d4ff66",
          300: "#c4ff33",
          400: "#b8ff14",
          500: "#a3e600",
          600: "#7fb800",
        },
        amber: {
          accent: "#f5b942",
        },
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "display-1": ["clamp(3.5rem, 9vw, 8rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-2": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-3": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "marquee": "marquee 30s linear infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "blink": "blink 1.2s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
