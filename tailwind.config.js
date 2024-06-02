/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
        'p': '#FFFFFF',
        's': '#001845',
        't': '#85EBFF'
    },
    fontFamily: {
      highlight: ['Righteous', 'serif'],
      header: ['Concert One', 'serif'],
      general: ['Nunito', 'sans-serif'],
    },
    extend: {
      spacing: {
        '5': '1rem',
        '10': '2rem',
        '20': '4rem',
        '40': '8rem',
        '80': '16rem',
        '100': '32rem',
      },
    }
  },
  plugins: [],
};
