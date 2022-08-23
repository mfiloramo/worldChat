/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ['./build/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {},
  },
  plugins: [
    {
      tailwindCSS: {},
      autoprefixer: {},
    }
  ],
}
