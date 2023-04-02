/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f9ff',
          100: '#dff1ff',
          200: '#b8e5ff',
          300: '#79d0ff',
          400: '#32b9fe',
          500: '#16abf8',
          600: '#0080cd',
          700: '#0065a6',
          800: '#035689',
          900: '#094871',
          950: '#062d4b',
        },
      },
    },
  },
}
