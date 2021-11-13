module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
      transitionTimingFunction: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [],
}
