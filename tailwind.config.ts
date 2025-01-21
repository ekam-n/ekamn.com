import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Display", "sans-serif"], // Add Clash Display
      },
    },
  },
  plugins: [],
} satisfies Config;
