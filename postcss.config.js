module.exports = {
  plugins: [
    require("stylelint")({
      configFile: "sytlelint.config.js",
    }),
    require("postcss-extend"),
    require("precss"),
    require("postcss-preset-env"),
    require("postcss-nested"),
    require("autoprefixer")(),
    require("postcss-reporter"),
    require("tailwindcss")("tailwind.config.js"),
    require("autoprefixer"),
  ],
};
