/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A192F",
        surface: "#112240",
        accent: "#64ffda",
        primaryText: "#CCD6F6",
        secondaryText: "#8892B0",
      },
      fontFamily: {
        sans: ["Lora", serif],
      },
    },
  },
  plugins: [],
};
