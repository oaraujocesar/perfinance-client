/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: '80px 1fr'
      },
      colors: {
        grey: "#ebebeb",
        darkgrey: "#606060",
        darkestgrey: "#444444",
        white: "#FFF",
      },
      borderRadius: {
        default: "9px",
      },
    },
  },
  plugins: [],
};
