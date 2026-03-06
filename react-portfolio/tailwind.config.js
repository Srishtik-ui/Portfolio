/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0A0F',
        'bg-secondary': '#12121A',
        'card-bg': '#1A1A25',
        'rose-gold': '#C9747A',
        'rose-gold-light': '#E8B4B8',
        'text-primary': '#F5F5F5',
        'text-secondary': '#B8B8C5',
        'border-color': '#2A2A3A',
      },
      fontFamily: {
        'heading': ['"Cormorant Garamond"', 'serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      letterSpacing: {
        'wider-2': '0.1em',
        'wider-3': '0.15em',
      },
    },
  },
  plugins: [],
}
