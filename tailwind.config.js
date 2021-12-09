module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'flipdish': ['"Kumbh Sans"', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(-30px)',opacity:'0' },
          '100%': {transform: 'translateX(0px)',opacity:'1'}
        }
       },
      animation: {
        'spin-once': 'spin 0.6s ease-in-out 0s 1 alternate',
        'slide-left': 'slideLeft 0.6s ease-in-out 0s 1'
      },
      spacing: {
        '284': '284px',
        '528': '528px',
      }
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
      transitionTimingFunction: ['group-hover'],
      scale: ['group-hover'],
      borderRadius: ['hover'],
      borderWidth: ['hover'],
      ringWidth: ['hover'],
    },
  },
  plugins: [],
};
