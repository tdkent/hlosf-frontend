/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          "url('https://res.cloudinary.com/do28aglgy/image/upload/v1670286082/hlsf/us-mint-logo_qig2cs.jpg')",
      },
    },
    fontFamily: {
      sans: ['Work Sans', 'system-ui', 'sans-serif'],
      serif: ['Cormorant', 'ui-serif'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
