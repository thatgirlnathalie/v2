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
        "quinary-color": "#333333",
        dim: "#1a1a1a",
      },
      fontFamily: {
        "ny-medium": "NewYorkExtraLarge_Medium, serif",
        "metro-regular": "Metropolis_Regular, sans-serif",
        "metro-extralight": "Metropolis_ExtraLight, sans-serif",
        "metro-semibold": "Metropolis_SemiBold, sans-serif",
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
