/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./layouts/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        "9xl": "1440px",
      },
      colors: {
        custom: {
          darkBackground: "#00040F",
          blue: "#33BBCF",
        },
      },
    },
  },
  plugins: [],
};
