module.exports = {
  plugins: [],
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      'phone-min': '360px',
      // => @media (min-width: 360px) { ... }

      'tablet-min': '769px',
      // => @media (min-width: 768px) { ... }

      'laptop-min': '1025px',
      // => @media (min-width: 1024px) { ... }

      'desktop-min': '1440px',
      // => @media (min-width: 1440px) { ... }

      'phone-max': {'max': '360px'},
      // => @media (max-width: 360px) { ... }

      'tablet-max': {'max': '769px'},
      // => @media (max-width: 768px) { ... }

      'laptop-max': {'max': '1025px'},
      // => @media (max-width: 1024px) { ... }

      'desktop-max': {'max': '1440px'},
      // => @media (max-width: 1440px) { ... }

    },
    extend: {
      colors: {
          "main": "#58A0A3",
          "mainHover": "#477480",
          "mainActive": "#325058",

          "error": "#E70000",

          "success": "#41B15A",

          "white": "#FFFFFF",
      }
    },
  },
}