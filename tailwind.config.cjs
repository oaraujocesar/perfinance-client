/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        grey: "#ebebeb",
        darkGrey: "#606060",
        darkestGrey: "#444444",
        white: "#FFF",
      },
      borderRadius: {
        default: "9px",
      },
    },
  },
  plugins: [],
};
