module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  purge: {
    enabled: true,
    content: ['./src/**/*.js', './src/**/**/*.js']
  },
  theme: {
    colors: {
      white: '#ffffff',
      blue: {
        medium: '#005c98',
        follow: '#00bfff'
      },
      black: {
        light: '#262626',
        faded: '#00000059'
      },
      gray: {
        base: '#616161',
        background: '#fafafa',
        primary: '#dbdbdb'
      },
      red: {
        primary: '#ed4956'
      }
    }
  }
}