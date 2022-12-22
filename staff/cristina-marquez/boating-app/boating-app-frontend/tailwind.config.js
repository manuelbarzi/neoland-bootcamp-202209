/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      darkblue: "#1B3C59",
      midblue: "#456173",
      midgreen: "#11BFAE",
      bone: "#F2F2F0",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: colors.green,
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
  corePlugins: {},
};
