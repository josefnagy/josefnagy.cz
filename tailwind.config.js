module.exports = {
  mode: 'jit',
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Darker Grotesque', 'sans-serif'],
        heading: ['Raleway', 'sans-serif'],
        project: ['Times New Roman', 'sans-serif']
      },
      colors: {
        background: '#191113',
        prBg: '#FFF7F0',
        white: '#FCFCFC',
        primary: '#65743A',
        lg: '#E5E5E5',
        dg: '#664E54',
        text: "#888888",
        warning: '#FC3434',
      },
      ringColor: {
        warning: '#FC3434',
      },
      fontSize: {
        'header': ['10vw'],
        'menuHeader': '12vw',
        'projectHeader': '4vw',
        'prStats': '1.5vw',
      },
      spacing: {
        'p4': '4vw',
        'p5': '5vw',
        'p6': '6vw',
        'p7': '7vw',
        'p8': '8vw',
        'p9': '9vw',
        'p10': '10vw'
      },
      lineHeight: {
        'heading': '11.5rem'
      },
      inset: {
        'rp': '-8vw',
        'tp': '6vw',
        't1': '1vw',
        't2': '2vw',
        't3': '3vw',
        't4': '4vw',
        't5': '5vw',
        't6': '6vw',
        't7': '7vw',
      },
      width: {
        '47': '47%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
