import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand palette
        brand: {
          50: "#f0f0ff",
          100: "#e0e1ff",
          200: "#c5c7fe",
          300: "#a5a3fc",
          400: "#8b7ff8",
          500: "#7c5ff2",
          600: "#6d40e6",
          700: "#5c2fcb",
          800: "#4b27a4",
          900: "#3e2582",
          950: "#25155a",
        },
        // Accent
        accent: {
          cyan: "#06b6d4",
          violet: "#8b5cf6",
          fuchsia: "#d946ef",
          amber: "#f59e0b",
        },
        // Dark surface
        surface: {
          DEFAULT: "#0c0c14",
          50: "#f8f8fc",
          100: "#f0f0f8",
          200: "#e1e0f0",
          300: "#c8c7e4",
          400: "#9e9cca",
          500: "#7a78b0",
          600: "#5e5c96",
          700: "#4c4a7c",
          800: "#3f3d66",
          900: "#1a1a2e",
          950: "#0c0c14",
        },
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.25" }],
      },
      spacing: {
        "18": "4.5rem",
        "112": "28rem",
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "glow-sm": "0 0 20px -5px rgba(124, 95, 242, 0.3)",
        "glow": "0 0 40px -10px rgba(124, 95, 242, 0.4)",
        "glow-lg": "0 0 60px -15px rgba(124, 95, 242, 0.5)",
        "glow-cyan": "0 0 40px -10px rgba(6, 182, 212, 0.4)",
        "card": "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
        "card-lg": "0 10px 40px -15px rgba(0,0,0,0.3)",
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-gradient":
          "radial-gradient(at 40% 20%, hsla(260, 70%, 60%, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(200, 80%, 50%, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(280, 60%, 50%, 0.2) 0px, transparent 50%)",
        "hero-gradient":
          "linear-gradient(135deg, #0c0c14 0%, #1a1a2e 50%, #0d0d20 100%)",
        "brand-gradient": "linear-gradient(135deg, #6d40e6 0%, #2563eb 100%)",
        "brand-gradient-radial":
          "radial-gradient(circle, #7c5ff2 0%, #2563eb 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-down": "fadeDown 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "gradient-shift": "gradientShift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 15s linear infinite",
        "marquee": "marquee 25s linear infinite",
        "marquee2": "marquee2 25s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "count-up": "countUp 2s ease-out forwards",
        "bounce-soft": "bounceSoft 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px -5px rgba(124, 95, 242, 0.3)" },
          "50%": { boxShadow: "0 0 60px -5px rgba(124, 95, 242, 0.7)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        countUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backdropBlur: {
        xs: "2px",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;
