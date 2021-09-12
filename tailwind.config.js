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
        "brown-quinary-color": "#FFFAF1",
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
        525: "525px",
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
      screens: {
        "3xl": { min: "1520px", max: "1920px" },
        "4xl": { min: "1921px" },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "3xl": "6rem",
        "4xl": "8rem",
      },
      screens: {
        lg: "900px",
        xl: "1100px",
        "2xl": "1100px",
        "3xl": "1520px",
        "4xl": "1920px",
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
