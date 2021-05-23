module.exports = {
  mode: 'jit',
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Darker Grotesque', 'sans-serif'],
        heading: ['Raleway', 'sans-serif'],
      },
      colors: {
        background: '#191113',
        white: '#FCFCFC',
        primary: '#65743A',
        lg: '#E5E5E5',
        dg: '#664E54',
        text: "#888888",
        warning: '#FC3434',
      },
      fontSize: {
        'header': '10rem'
      },
      lineHeight: {
        'heading': '11.5rem'
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
