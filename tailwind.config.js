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
        "senary-color": "#F4F4F4",
        "septenary-color": "#1A1A1A",
        // brown palette
        "brown-primary-color": "#E5C697",
        "brown-secondary-color": "#F5E7D1",
        "brown-tertiary-color": "#BF8427",
        "brown-quaternary-color": "#FFF8ED",
        //other-colors
        "green-primary-color": "#73C851",
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
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        beat: "beat 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
        beat: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.125)" },
        },
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
    extend: {
      animation: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};
