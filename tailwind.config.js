/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        colors: {
            'feldgrau': '#436850',
            'laurelGreen':'#ADBC9F',
            'raisinBlack':'#252525',
            'white': '#FFFFFF',
            'ghostWhite': '#FAFCFE',
            'antiFlashWhite': '#F3F3F3',
          },
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
          },
      extend: {},
    },
    
    
    plugins: [require("daisyui")],
  }