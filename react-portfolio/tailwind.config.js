/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#080608',
        'bg-secondary': '#100D12',
        'card-bg': '#141018',
        'sage-green': '#B8860B',
        'sage-light': '#E8D5B0',
        'text-primary': '#FDF8F0',
        'text-secondary': '#9B8B7A',
        'border-color': '#2A2020',
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
