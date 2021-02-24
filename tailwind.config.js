module.exports = {
  purge: ['src/**/*.js', 'src/**/*.jsx', 'public/**/*.html'],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      primary: {
        default: '#424242',
        light: '#757575',
        dark: '#212121',
      },
      secondary: {
        default: '#1c9eb2',
        light: '#84ffff',
      },
      gray: {
        default: '#ededed',
        light: '#f5f5f5',
        dark: '#bcbcbc',
      },
    },
  },
  variants: {},
  plugins: [],
};
