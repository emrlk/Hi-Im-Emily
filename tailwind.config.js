import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem #29c26f',
      },
      
    },
    colors: {
      primary: {
        200: '#FFFFFF',
        400: '#C6F4F6',
        500: '#54686B',
        600: '#8FB6BA',
      },
      grayscale: {
        50: '#ffffff',
        100: '#efefef',
        200: '#FDFDFF',
        950: '#16161b',
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
