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
      transparent: "transparent",
    },
    backgroundImage: {
      "purple-gradient": "linear-gradient(255deg, #7e20fc9e, #598ff1ab)",
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
