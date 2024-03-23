/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '200px',
      'tablet': '800px',
      'desktop': '1280px'
    },
    container: {
      padding: {
        DEFAULT: '20px',
        sm: '20px',
        lg: '100px',
        xl: '100px',
        '2xl': '100px',
      },
      center: true
    },
    extend: {},
  },
  plugins: [],
}