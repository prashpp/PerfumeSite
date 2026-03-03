/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-gold': '#C5A059',
        'cream-light': '#F9F1C0',
        'charcoal': '#0D0D0E',
        'charcoal-light': '#161618',
        'border-gold': 'rgba(197, 160, 89, 0.2)',
        'primary': '#1142d4',
        'background-dark': '#101522',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.4em',
        'wide-lg': '0.2em',
      },
    },
  },
  plugins: [],
}
