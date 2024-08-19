/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
    backgroundImage:{
      'background':"url('../public/img/background-image.jpg')"
    },
    fontFamily:{
      'roboto':['Roboto'],
      'roboto-condensed':['Roboto Condensed'],
      'ubuntu':['Ubuntu'],
      'ubuntu-condensed':['Ubuntu Condensed']
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin'),
  ],
}