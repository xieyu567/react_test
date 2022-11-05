/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{ts,js,tsx,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      ...colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
