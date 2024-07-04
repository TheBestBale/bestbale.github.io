const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/main.scss";
        `
      }
    }
  },
  // publicPath: process.env.NODE_ENV === "production" ? "/test/" : "/",
  publicPath: process.env.NODE_ENV === "/",
})