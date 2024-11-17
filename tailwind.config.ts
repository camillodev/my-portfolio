/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        DEFAULT: '#FCBE30 !important', // Yellow as default text color
      },
      colors: {
        primary: '#FCBE30', // Yellow as primary color
        secondary: '#000000', // Black as secondary color
        surface: {
          background: '#000000', // Black background
          primary: '#171717', // Darker shade of black
          secondary: '#242424', // Slightly lighter shade of black
        },
        text: {
          primary: '#FCBE30', // Yellow primary text
          secondary: '#FFFF80', // Lighter yellow for secondary text
        },
      },
      fontFamily: {
        sans: ['Heebo', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
