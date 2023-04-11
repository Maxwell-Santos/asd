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
        "aside-mobile": "#03C988",
        "button-primary": "#03C988",
        "button-primary-h": "#01b87b",
        accent: "#03C988",
        footer: "#263238",
        "budget-end": "#038bfa",
        "budget-end-h": "#0047FF",
      },
      textColor: {
        "button-primary": "#fff",
        "title-p" : "#038bfa",
        "title-s" : "#03C988",
        "accent" : "#03C988",
      }
    },
  },
  plugins: [],
}