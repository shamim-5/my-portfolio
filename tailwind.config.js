module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "4rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      extend: {},
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#66B0FB",
          secondary: "#636363",
          warning: "#ffb400",
          accent: "#8b8b8b",
          neutral: "#111111",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
