/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        light: "#F6F6F8",
        dark: "#334756"
      }
    },
    fontFamily: {
      "sans": ["Roboto", "Arial", "sans-serif"]
    }
  },
  plugins: [],
  darkMode: "class"
}

