import type { Config } from "tailwindcss";

export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        merriweather: ['"Merriweather Sans"', "sans-serif"],
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
} satisfies Config;
