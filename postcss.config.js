const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    'postcss-preset-env',
    'tailwindcss/nesting',
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};