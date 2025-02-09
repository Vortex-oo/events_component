import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        misteri: ["Misteri Caps", "sans-serif"],
        ameda: ["Ameda-Regular", "sans-serif"], // Added Ameda font
      },
    },
  },
  plugins: [],
} satisfies Config;


