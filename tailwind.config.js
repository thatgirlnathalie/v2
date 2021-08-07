module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-color": "#2D2D2D",
        "secondary-color": "#AAAAAA",
        "tertiary-color": "#222222",
        "quaternary-color": "#EEEEEE",
        dim: "#1a1a1a",
      },
      fontFamily: {
        "ny-medium": "'New York Medium', serif",
        "metro-regular": "Metropolis-Regular, sans-serif",
        "metro-extralight": "Metropolis-ExtraLight, sans-serif",
        "metro-semibold": "Metropolis-SemiBold, sans-serif",
      },
      height: {
        425: "425px",
        380: "380px",
        320: "320px",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "900px",
        xl: "1100px",
        "2xl": "1100px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
