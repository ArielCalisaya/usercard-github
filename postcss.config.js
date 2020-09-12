module.exports = {
    plugins: [
      require("tailwindcss"),
      require("autoprefixer"),
  
      // ----- Remove all content of purgecss and cssnano if need build tailwind css
        // require("cssnano")({
        //   preset: "default",
        // }),
  
        // require("@fullhuman/postcss-purgecss")({
        //   content: ["./src/**/*.js", "./public/index.html"],
        //   defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
        // }),
      // ...
    ],
  };
  