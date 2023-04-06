/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter, sans-serif"
      },
      backgroundColor: {
        "button-primary": "#03C988",
        "button-primary-h": "#01b87b",
        accent: "#03C988",
        footer: "#263238",
        "budget-end": "#0047FF",
        "budget-end-h": "#003eda",
      },
      textColor: {
        "button-primary": "#fff",
        "title-p" : "#0047FF",
        "title-s" : "#03C988",
        "accent" : "#03C988",
      }
    },
  },
  plugins: [],
}