/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btnBg: '#EB3079',
        txt: '#666666',
        ctaBg: '#5C46FF'
      },
      fontFamily: {
        raleway: "Raleway"
      }
    },
  },
  plugins: [],
}
