
/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme"
import columns from "@markusantonwolf/tailwind-css-plugin-multi-columns"
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: [
        '"Montserrat", sans-serif',
        ...defaultTheme.fontFamily.sans
      ],
    },
    extend: {
      screens: {
        xs: "476px",
      },
      boxShadow: {
        header: "0 2px 5px rgba(0, 0, 0, 0.2)"
      },
      colors: {
        primary: {
          500: "#2197A9",
          600: "#197988"
        },
        neutral: {
          100: "#ffffff",
          900: "#1a1a1a",
        }
      },
      listStyleType: {
       dashed:  "- " 
      }
    },
  },
  plugins: [columns()],
}

