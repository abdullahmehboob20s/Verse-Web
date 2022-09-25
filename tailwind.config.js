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
      "purple-dark": "#150031",
      "purple-2": "#481986",
      "purple-3": "#B463F6",
      darkPurple: "#2a0b53",
      lightBlue: "#598ff1",
      transparent: "transparent",
      darkGray: "#0d0e12",
      darkGray2: "#363943",
      yellow: "#f1e559",
      orange: "orange",
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
      lineHeight: {
        1: "1",
        "1_1": "1.1",
        "1_2": "1.2",
        "1_3": "1.3",
        "1_4": "1.4",
        "1_5": "1.5",
        "1_6": "1.6",
        "1_7": "1.7",
        "1_8": "1.8",
        "1_9": "1.9",
      },
      borderWidth: {
        "1px": "1px",
      },
      spacing: {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "10px": "10px",
        "20px": "20px",
        "50px": "50px",
        "100px": "100px",
        "150px": "150px",
        "200px": "200px",
        "300px": "300px",
        "500px": "31.25rem",
        "530px": "530px",
      },
      maxWidth: {
        "420px": "420px",
        "22em": "22em",
      },
      transitionDuration: {
        ".1s": ".1s",
        ".2s": ".2s",
        ".3s": ".3s",
        ".4s": ".4s",
        ".5s": ".5s",
      },
      borderRadius: {
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "7px": "7px",
        "8px": "8px",
        "9px": "9px",
        "10px": "10px",
      },
      backgroundImage: {
        "purple-gradient": "linear-gradient(255deg, #7e20fc9e, #598ff1ab)",
        "purple-gradient-2": "linear-gradient(76deg, #7e20fc, #598ff1);",
        "light-purple-to-dark": "linear-gradient(242deg, #7e20fc, #3f107e)",
        "light-gray-bg":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
        footer: "linear-gradient(180deg, black, #22014d);",
        page: "linear-gradient(222deg, #22014d, #000000 50%)",
      },
    },
  },
  plugins: [],
};
