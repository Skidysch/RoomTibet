/** @type {import('tailwindcss').Config} */
export default {
  content: [".index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#18121e",
      white: "#fdfdfd",
      whiteGlass: {
        200: 'rgba(253, 253, 253, .2)',
        300: 'rgba(253, 253, 253, .3)',
        400: 'rgba(253, 253, 253, .4)',
      },
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },
      primary: {
        main: "#1a3e3e",
        dark: "#132e2e",
        light: "#375e5e",
      },
      secondary: {
        main: "#f2be22",
        dark: "#e7a31a",
        light: "#f9d46a",
      },
    },
  },
  plugins: [],
};
