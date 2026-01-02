/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B88E2F',
        'primary-light': '#FCF8F3',
        dark: {
          DEFAULT: '#333333',
          100: '#3A3A3A',
        },
        gray: {
          DEFAULT: '#9F9F9F',
          100: '#F4F5F7',
          200: '#E8E8E8',
          300: '#D9D9D9',
          400: '#B0B0B0',
          500: '#9F9F9F',
          600: '#898989',
          700: '#666666',
          800: '#333333',
        },
        accent: {
          teal: '#2EC1AC',
          red: '#E97171',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
