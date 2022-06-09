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
          accent: "#ff3d24",
          neutral: "#3D161A",
          black: "#000000",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
