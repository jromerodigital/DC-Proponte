/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        proponte: {
          yellow: 'var(--proponte-yellow)',
          gold: 'var(--proponte-gold)',
          orangeGold: 'var(--proponte-orange-gold)',
          charcoal: 'var(--proponte-charcoal)',
          black: 'var(--proponte-black)',
          silver: 'var(--proponte-silver)',
          bgWarm: 'var(--proponte-bg-warm)',
          white: 'var(--proponte-white)',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}
