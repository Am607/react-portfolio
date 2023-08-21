/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontWeight: {
      thin: "100",

      extralight: "200",
      light: "300",
      normal: "400",
      custom: "420",
      medium: "500",
      semibold: "600",
      bold: "700",

      extrabold: "800",
      black: "900",
    },
  },
  plugins: [],
};
