/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-dark': '#09090b',
        'card-dark': '#121215',
        'bg-light': '#fafafa',
        'card-light': '#ffffff',
      },
      fontFamily: {
        'sans': ['"Hanken Grotesk"', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-blur': 'fadeInBlur 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInBlur: {
          '0%': { opacity: '0', filter: 'blur(8px)', transform: 'translateY(12px)' },
          '100%': { opacity: '1', filter: 'blur(0)', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
