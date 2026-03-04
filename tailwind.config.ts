import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants.tsx",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        muted: 'var(--color-muted)',
        high: 'var(--color-high)',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Ovo', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
