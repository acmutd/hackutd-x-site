module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#F6CC82', //gold
        primaryDark: '#BD8A31', //dark gold
        secondary: '#FFFCF9', //white
        secondaryDark: '#111A31', //dark blue
        complementary: '#4C4950', //gray
        complementaryDark: '#252427',
        tertiary: '#9A4343', //red
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        primary: ['excelsior-script', 'sans-serif'],
        secondary: ['hoefler-text', 'sans-serif'],
      },
      width: {
        '1/8': '12.5%',
        '3/8': '37.5%',
        '5/8': '62.5%',
        '7/8': '87.5%',
        '1/7': '14.29%',
        '6/7': '85.71%',
      },
      height: {
        '9/10': '90%',
      },
      minWidth: {
        64: '16rem',
        56: '14rem',
        '160px': '160px',
        '3/4': '75%',
        '9/10': '90%',
      },
      minHeight: {
        '1/3': '33.33%',
        '9/10': '90%',
        '1/2': '50%',
        '1/4': '25%',
        '5/8': '62.5%',
        16: '4rem',
      },
      backgroundColor: (theme) => ({
        lightBackground: '#F4F4F4',
        aqua: '#D8F8FF',
        darkAqua: '#B0F1FF',
      }),
      backgroundImage: {
        'hero-pattern': `url(${'/assets/bg2.jpeg'})`, // !change
      },
      animation: {
        text: 'text 2s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
