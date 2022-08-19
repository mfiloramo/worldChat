/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ['./build/*.{js,jsx,ts,tsx,html}'],
  theme: {
    // colors: {
    //   'bg-dark-blue': '#141b2e',
    //   'bg-lite-blue': '#1e2e4d',
    // },
    extend: {},
  },
  plugins: [
    {
      tailwindCSS: {},
      autoprefixer: {},
    }
  ],
}
