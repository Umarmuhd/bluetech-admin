module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: { 15: "3.8rem", 18: "4.5rem" },
      width: { "9/20": "45%" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
