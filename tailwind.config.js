/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#c0ff00',
          50: '#f7ffe6',
          100: '#ecffcc',
          200: '#d9ff99',
          300: '#c0ff00',
          400: '#a8d600',
          500: '#8fb300',
          600: '#769900',
          700: '#5d8000',
          800: '#446600',
          900: '#2b4d00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}