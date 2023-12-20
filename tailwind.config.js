/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        'primary':{
          1:'#6200EE',
          2:'#7928EE',
          3:'#914FEE',
          4:'#A877EE',
          5:'#BF9FEE',
          6:'#D7C6EE',
        },
        dark: '#171717',
        gading: '#f3f5f8',
        neonyellow: '#FFE900',
      },
      fontSize: {
        'besar': ['1.9rem','2.30rem'],
      },
      fontFamily: {
        'jakarta': ['Plus Jakarta Sans', 'monospace'],
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

