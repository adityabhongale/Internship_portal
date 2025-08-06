/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#4338ca',
        primaryLight: '#6366f1',
        'light-gray': '#f9fafb',
        'text-dark': '#1f2937',
      }
    },
  },
  plugins: [],
}