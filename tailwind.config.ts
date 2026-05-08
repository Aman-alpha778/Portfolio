/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f6f3ee",
        secondary: "#6f647c",
        tertiary: "#ffffff",
        "black-100": "#f1e9df",
        "black-200": "#e8dece",
        "white-100": "#5f566d",
      },
      boxShadow: {
        card: "0px 24px 80px -24px rgba(110, 92, 132, 0.28)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
