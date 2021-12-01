module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: "#4361ee",
        dark: "#242424",
        secondary: "#5e60ce",
        alternative: "#22b0db",
      },
    },
  },
  variants: {
    extend: {
      padding: ["first", "last"],
    },
  },
  plugins: [],
};
