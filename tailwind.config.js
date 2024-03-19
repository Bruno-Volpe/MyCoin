/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#393E46",
        tertiary: "#FFD369",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#EEEEEE",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};