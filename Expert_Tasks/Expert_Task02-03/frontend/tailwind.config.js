/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navyblue: '#2F3645',
        offwhite: '#FAFDF2',
        lightpink: '#E6B9A6',
        lightgrey: '#F6FBE9',
      },
    },
  },
  plugins: [],
}