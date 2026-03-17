import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      colors: {
        rose: {
          DEFAULT: '#D4717E',
          light: '#F5D8DC',
          bg: '#FDF0F2',
        },
        bleu: {
          DEFAULT: '#5BA4CF',
          light: '#D8EAF4',
          dark: '#3A7CA8',
          bg: '#EEF6FB',
        },
        gris: {
          DEFAULT: '#4A4D50',
          light: '#F0F1F2',
          mid: '#9A9C9E',
        },
        blanc: '#FAFAFA',
        noir: '#1C1C1E',
        brand: {
          DEFAULT: '#58C1E9',
          dark: '#3aa8d4',
        },
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}

export default config
