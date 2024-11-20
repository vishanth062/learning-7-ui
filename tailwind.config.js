/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        black: ['Black', 'Montserrat'],
        semibold: ['SemiBold', 'Montserrat'],
        bold: ['Bold', 'Montserrat'],
        light: ['Light', 'Montserrat'],
        medium: ['Medium', 'Montserrat'],
        normal: ['Regular', 'Montserrat'],
        thin: ['Thin', 'Montserrat'],
        nunitoBlack: ['Black', 'Nunito'], // Updated to distinguish Nunito variants
        nunitoSemiBold: ['SemiBold', 'Nunito'],
        nunitoBold: ['Bold', 'Nunito'],
        nunitoLight: ['Light', 'Nunito'],
        nunitoMedium: ['Medium', 'Nunito'],
        nunitoNormal: ['Regular', 'Nunito'],
        nunitoThin: ['Thin', 'Nunito'],
      },
      
    },
  },
  plugins: [],
}

