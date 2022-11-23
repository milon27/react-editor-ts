const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#108aff",
        'primary-dark': "#108aff",
        'primary-light': "#108aff",
        'border': "#ebedf3"
      },
      fontFamily: {
        'poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
