/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Work Sans", "system-ui", "sans-serif"],
      serif: ["Cormorant", "ui-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
