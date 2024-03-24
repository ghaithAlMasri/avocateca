/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "background-gradient-1": "radial-gradient(circle, #295c7a, #216288, #176897, #0a6da6, #0072b5)",
        "background-gradient-2": "linear-gradient(360deg, hsla(228, 28%, 20%, 1) 0%, hsla(0, 0%, 0%, 1) 100%)",
        "background-gradient-3":"linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(270deg, #295C7A -1.04%, #0072B5 100%)",
        'hero-image': "url('/cover.jpg')",
      },
      colors: {
        "primary-color": "#D0A144",
        "secondary-color-1": "#FDB602",
        "secondary-color-2":"#784F33",
        "secondary-color-3": "#DBB468",
        "secondary-color-4": "#295C7A",
        "text-color": "#252B42",
        "second-text-color": "#737373",
        "light-text-color": "#FFFFFF",
        "dark-background-color": "#252B42",
        "light-background-color": "#FAFAFA",
        "white-background-color": "#FFFFFF",
        "hover-color": "#2A7CC7",
        "disabled-element-color": "#8EC2F2",
        "muted-color": "#BDBDBD",
        "success-color": "#2DC071",
        "alert-color": "#E77C40",
        "danger-color": "#E74040",
      },
      fontFamily : {
        "martel": "Martel"
      },
      boxShadow:{
        'cards':'rgb(38, 57, 77) 0px 20px 30px -10px',
      },
      screens: {
        '3xl':'2200px'
      },
    },
  },
  plugins: [],
};
