/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center:true,
      padding:'16px'
    },
    
    extend: {
      colors:{
        'dark': '#0C0B14',
        'sea': '#11132F',
        'sea-light': '#105568',
        'leaf' : '#B5ED4F',
        'taro' : '#A270E2'
      },
    
    },
  },
  plugins: [],
}