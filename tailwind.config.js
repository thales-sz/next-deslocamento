import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
      primary: "#EEEEEE",
      secondary: "#00ADB5",
      tertiary: "#393E46",
      quaternary: "#222831"
    },
    extend: {
      backgroundImage: {},

    },
  },
  plugins: [],
}
