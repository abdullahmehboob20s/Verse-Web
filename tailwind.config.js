/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "white",
      black: "#000",
      "purple-light": "#c498ff",
      purple: "#7e20fc",
      "purple-2": "#481986",
      darkPurple: "#2a0b53",
      lightBlue: "#598ff1",
      transparent: "transparent",
      darkGray: "#0d0e12",
      darkGray2: "#363943",
      yellow: "#f1e559",
      orange: "orange",
    },
    backgroundImage: {
      "purple-gradient": "linear-gradient(255deg, #7e20fc9e, #598ff1ab)",
      "purple-gradient-2": "linear-gradient(76deg, #7e20fc, #598ff1);",
      "light-gray-bg":
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
      footer: "linear-gradient(180deg, black, #22014d);",
    },
    screens: {
      xs: "500px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        worksans: "worksans",
        helvetica: "helvetica",
        animo: "animo",
      },
      fontSize: {
        "100px": "100px",
        "40px": "40px",
        "56px": "56px",
      },
      borderWidth: {
        1: "1px",
      },
      spacing: {
        "100px": "100px",
        "500px": "31.25rem",
        "10px": "10px",
      },
      maxWidth: {
        "420px": "420px",
      },
    },
  },
  plugins: [],
};
