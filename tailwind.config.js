/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['38px', '48px'],
      '5xl': ['50px', '65px'],
      '7xl':['70px', '75px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        caudex: ['Caudex', 'serif'],   
      },
      blur:{
        xs: '2px',
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        'primary-orange': '#FF7D00',
        'primary-maroon': '#A12800',
        'primary-white': '#FFFFFF',
        'beige':'#FFF8F1',
        'primary-one':'#fffbf5',
        'primary-blue':'#112A46',
        'dark-red':'#6E1B00',
        'secondary-blue':"#f5fdff",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('/assets/images/pic1.jpeg')",
        'second-hero': "url('/assets/images/pic3.jpeg')",
        'third-hero': "url('/assets/images/bagyaji.jpeg')",
        'background-pastel': "url('/assets/images/background.svg')",
        'massprayer': "url('/assets/images/chant.jpg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}