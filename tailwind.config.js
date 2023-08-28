/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height:{
        'screen-4/5': '80vh',
        'screen-3/5': '60vh',
        'screen-2/5': '40vh',
        'screen-1/5': '20vh',
        "screen-2": "200vh",

        
      },
      colors: {
        backgroundWhite: '#FFF',
        darkBlue: '#01156B',
        lightBlue: '#0B1E6D',
        accentColor: '#F0F436',
        whiteText2: "#F4F4F4",
        grayCard:"#353535",
        lightColor: "#ffffff"
      },
      spacing:{
        "1/8": "12.5%",
        "2/8": "25%",
        "3/8": "37.5%",
        "4/8": "50%",
        "5/8": "62.5%",
        "6/8": "75%",
        "7/8": "87.5%",
        
        // 1/16
        "1/16": "6.25%",
      },
      rotate:{
        "37": "37deg",
        
      }
    },
  },
  plugins: [],
}
