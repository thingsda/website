const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    inset: {
      '0': 0,
      auto: 'auto',
      '12': defaultTheme.spacing['12'],
      '16': defaultTheme.spacing['16'],
    },
  },
}
