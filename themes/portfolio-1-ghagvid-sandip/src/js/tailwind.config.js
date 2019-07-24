const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1240px',
      xll: '1400px',
    },
    fontFamily: {
      header: ['Righteous', 'cursive'],
      body: ['Poppins', 'sans-serif'],
    },
    colors: {
      'base-color': 'var(--text-color)',
      'primary-text': 'var(--primary-color)',
      'primary-bg': "var(--primary-bg-color)",
    },
  },
  variants: {},
  plugins: []
};
