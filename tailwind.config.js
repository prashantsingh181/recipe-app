/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        slate: "#2C2C2C",
        charcoal: "#363636",
        light: "#D3D3D3",
        cream: "#F9F9F9",
        offWhite: "#E5E5E5",
        highlight: "#F2613F",
        highlightHover: "#9B3922",
      },
      fontFamily: {
        primary: ["Montserrat", "Times New Roman"],
        secondary: ["Lato", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      outline: ["focus-within"],
    },
  },
  plugins: [],
};
