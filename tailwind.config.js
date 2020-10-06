const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  prefix: "",
  important: false,
  separator: ":",
  purge: ["./src/**/*.vue"],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans JP", ...defaultTheme.fontFamily.sans],
        serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
        mono: [
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace"
        ]
      }
    },
    colors: {
      emiyablue: "#1E44A9",
      emiyagold: "#FBD77B",
      emiyablack: "#414141"
    }
  }
};
