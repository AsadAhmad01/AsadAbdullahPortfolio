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
        midnight: {
          DEFAULT: "#0A0F1E",
          50: "#0d1428",
          100: "#111827",
          200: "#1a2540",
          300: "#243058",
        },
        glass: {
          DEFAULT: "rgba(255,255,255,0.05)",
          border: "rgba(255,255,255,0.10)",
          hover: "rgba(255,255,255,0.08)",
        },
        neon: {
          blue: "#3B82F6",
          cyan: "#06B6D4",
          purple: "#8B5CF6",
          "blue-light": "#60A5FA",
          "cyan-light": "#22D3EE",
          "purple-light": "#A78BFA",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-hero": "linear-gradient(135deg, #0A0F1E 0%, #0d1428 50%, #111827 100%)",
        "neon-blue-glow": "radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)",
        "neon-purple-glow": "radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        "neon-blue": "0 0 20px rgba(59,130,246,0.4), 0 0 40px rgba(59,130,246,0.2)",
        "neon-cyan": "0 0 20px rgba(6,182,212,0.4), 0 0 40px rgba(6,182,212,0.2)",
        "neon-purple": "0 0 20px rgba(139,92,246,0.4), 0 0 40px rgba(139,92,246,0.2)",
        glass: "0 8px 32px rgba(0,0,0,0.4)",
        "glass-lg": "0 20px 60px rgba(0,0,0,0.5)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "typewriter-blink": "blink 1s step-end infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s infinite",
        "slide-in-left": "slideInLeft 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59,130,246,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(59,130,246,0.6), 0 0 80px rgba(59,130,246,0.3)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
