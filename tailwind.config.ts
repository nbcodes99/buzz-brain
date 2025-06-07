import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px (default)
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "4rem", // 64px
      },
      letterSpacing: {
        tight: "-1px",
        normal: "0",
        wide: "1px",
        wider: "2px",
        widest: "5px",
      },
      colors: {
        accent: "#065f46", // Dark Green
        light: "#f9fafb", // Light Gray/White
        link: "#2563eb", // Bright Blue
      },
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(0.1)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        zoomOut: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.1)", opacity: "0" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "50%": { transform: "scale(1.2)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-20px)", opacity: "0" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        zoomIn: "zoomIn 0.3s ease forwards",
        zoomOut: "zoomOut 0.3s ease forwards",
        slideInLeft: "slideInLeft 1.5s ease forwards",
        slideInRight: "slideInRight 1.5s ease forwards",
        fadeIn: "fadeIn 0.5s ease forwards",
        fadeOut: "fadeOut 1s ease forwards",
        bounceIn: "bounceIn 0.7s ease forwards",
        slideIn: "slideIn 1s ease-out forwards",
        slideOut: "slideOut 1s ease-in forwards",
        bounceSlow: "bounceSlow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
