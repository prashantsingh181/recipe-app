/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#121212", // Dark Gray
        slate: "#2C2C2C", // Slate Gray
        charcoal: "#363636", // Charcoal

        light: "#D3D3D3", // Light Gray
        cream: "#F9F9F9", // Cream
        offWhite: "#E5E5E5",
      },
      backgroundImage: {
        desktop: "url('/src/assets/desktop-bg.jpg')",
        mobile: "url('/src/assets/mobile-bg.jpg')",
      },
    },
  },
  plugins: [],
};
