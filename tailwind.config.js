module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'flipdish': ['"Kumbh Sans"', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      animation: {
        'spin-once': 'spin 0.6s ease-in-out 0s 1 alternate',
      },
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
