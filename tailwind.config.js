const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Avenir", "Helvetica", "Arial", "sans-serif"],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        gray: colors.trueGray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}