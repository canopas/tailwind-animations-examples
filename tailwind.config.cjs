/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.vue', './src/**/*.ts'],
  theme: {
    extend: {
      keyframes: {
        // progress dots
        progress: {
          '0%, 60%': {
            transform: 'translateY(0px)'
          },
          '30%': {
            transform: 'translateY(-30px)'
          },
        },
        // three bounce
        "three-bounce": {
          '0%, 100%': {
            transform: 'scale(0.5)',
            opacity: 0.5
          },
          '50%': {
            transform: 'scale(2)',
            opacity: 1
          },
        },
        // rotate dot
        circle: {
          '0%': {
            transform: 'rotate(-360deg)translate(25px)rotate(360deg)'
          },
          '100%': {
            transform: 'rotate(0deg)translate(25px)rotate(0deg)'
          },
        },
        // rotate two dot in
        "rotate-in": {
          '0%, 100%': {
            transform: 'scale(2)',
            opacity: 1
          },
          '50%': {
            transform: 'scale(1)',
            opacity: 0.5
          },
        },
        // rotate two dot out
        "rotate-out": {
          '0%, 100%': {
            transform: 'rotate(-360deg)translate(24px)rotate(0deg)scale(1.5)',
            opacity: 1
          },
          '50%': {
            transform: 'rotate(0deg)translate(24px)rotate(-360deg)scale(1)',
            opacity: 0.5
          },
        },
      },
      animation: {
        "progress": 'progress 1s linear infinite', // progres dots
        "three-bounce": 'three-bounce 1s ease-in-out infinite', //three-bounce
        "circle": 'circle 2s ease-in-out infinite', // rotate dot animation
        "rotate-in": 'rotate-in 2s ease-in-out infinite', // rotate two dot in 
        "rotate-out": 'rotate-out 2s ease-in-out infinite', // rotate two dot out
      }
    },
  },
  plugins: [],
}
