/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./projects.html",
    "./contact.html",
    "./js-task/**/*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Interr', 'ui-sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

