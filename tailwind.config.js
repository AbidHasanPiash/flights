/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ec008c',
        'secondary': '#cf4191',
        'primary-light': '#ff3baf',
        'primary-dark': '#b2006a',
        'night': '#333333',
        'day': '#e1e3d8',
      },
    },
  },
  plugins: [],
}
