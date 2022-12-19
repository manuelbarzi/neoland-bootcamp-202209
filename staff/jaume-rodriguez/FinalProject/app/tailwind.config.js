/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./public/*.html",],
  theme: {
    extend: {
      'login-background': "url('/src/img/bg-login.svg')",
    },
    fontFamily: {
      'alata': ['"Alata"'],
    },
    plugins: [
      // ...
      require('tailwind-scrollbar'),
    ],
  },
  plugins: [],
}
