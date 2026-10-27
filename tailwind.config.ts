import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FAF7F2",
          warm: "#F3EDE2",
          border: "#E5DEC9",
        },
        forest: {
          DEFAULT: "#12352B",
          deep: "#0B241D",
          muted: "#234E40",
        },
        sage: {
          DEFAULT: "#2D6A4F",
          light: "#E6F0EC",
          accent: "#40916C",
        },
        marigold: {
          DEFAULT: "#E09F3E",
          hover: "#C98929",
          soft: "#FDF4E3",
        },
        ink: {
          DEFAULT: "#18221E",
          muted: "#4A5853",
          subtle: "#71807A",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        editorial: "0 12px 32px -8px rgba(18, 53, 43, 0.07)",
        card: "0 4px 20px -2px rgba(18, 53, 43, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
