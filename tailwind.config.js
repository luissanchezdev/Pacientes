/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2460c2',
        secondary: '#4092a0',
        blueLight: '#509df7',
        grayLight: '#dee1e8',
        greenLight: '#5fc290',
        blueDark: '#1b55c6',
        black: '#111111'
      }
    },
  },
  plugins: [],
}

