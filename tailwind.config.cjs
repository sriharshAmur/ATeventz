/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        eventBgFrom0: "#12C63A",
        eventBgTo0: "#C53E3E",
        eventBgFrom1: "#C53E3E",
        eventBgTo1: "#513EC5",
        eventBgFrom2: "#71C53E",
        eventBgTo2: "#3EACC5",
        eventBgFrom3: "#73FFC4",
        eventBgTo3: "#B028C6",
        eventBgFrom4: "#E47916",
        eventBgTo4: "#2DA1D2",
        eventBgFrom5: "#3EACC5",
        eventBgTo5: "#C5B73E",
      },
    },
  },
  plugins: [],
};
