/** @type {import('tailwindcss').Config} */
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
      purple: "#7e20fc",
      darkPurple: "#2a0b53",
      lightBlue: "#598ff1",
      transparent: "transparent",
    },
    backgroundImage: {
      "purple-gradient": "linear-gradient(255deg, #7e20fc9e, #598ff1ab)",
      "purple-gradient-2": "linear-gradient(76deg, #7e20fc, #598ff1);",
    },
    extend: {
      fontFamily: {
        worksans: "worksans",
        helvetica: "helvetica",
        animo: "animo",
      },
    },
  },
  plugins: [],
};
