/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightest-slate': '#ccd6f6',
        '--dark-navy': '#020c1b',
        '--navy': '#0a192f',
        '--light-navy': '#112240',
        '--lightest-navy': '#233554',
        '--navy-shadow': 'rgba(2, 12, 27, 0.7)',
        '--slate': '#8892b0',
        '--light-slate': '#a8b2d1',
        '--lightest-slate': '#ccd6f6',
        '--white': '#e6f1ff',
        '--green-bright': '#64ffda',
        '--green-tint': 'rgba(100, 255, 218, 0.1)'
      },
    },
  },
  plugins: [],
}

