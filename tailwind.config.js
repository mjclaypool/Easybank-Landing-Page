/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "pubSans": ["Public Sans", "sans-serif"],
      },
      colors: {
        "p-dark-blue": "hsl(233, 26%, 24%)",
        "p-lime-green": "hsl(136, 65%, 51%)",
        "p-bright-cyan": "hsl(192, 70%, 51%)",
        "n-grey-blue": "hsl(233, 8%, 62%)",
        "n-light-grey-blue": "hsl(220, 16%, 96%)",
        "n-light-grey": "hsl(0, 0%, 98%)",
        "n-white": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
}

