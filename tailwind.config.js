module.exports = {
  purge: ['src/**/*.js', 'src/**/*.jsx', 'public/**/*.html'],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000000',
        white: '#FFFFFF',
        primary: '#424242',
        'primary-light': '#757575',
        'primary-dark': '#212121',
        secondary: '#1c9eb2',
        'secondary-light': '#84ffff',
        gray: {
          default: '#ededed',
          light: '#f5f5f5',
          dark: '#bcbcbc',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
