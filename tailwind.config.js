module.exports = {
  // mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "3/10": "30%",
      full: "100%",
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans Condensed", "sans-serif"],
      },
      transitionDuration: {
        0: "0ms",
        "6s": "6s",
      },
      transitionTimingFunction: {
        expand: "cubic-bezier(0.25, 0.45, 0.45, 0.95)",
      },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
