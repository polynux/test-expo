/** @type {import('tailwindcss').Config} */

const nativewind = require("nativewind/tailwind/native")

module.exports = {
  content: ["./App.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
}
