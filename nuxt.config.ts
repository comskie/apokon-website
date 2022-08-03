import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css", "element-plus/dist/index.css"],

  target: "static",

  components: true,

  modules: ["@nuxtjs/tailwindcss"],

  build: {
    transpile: ["element-plus"],
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
  },
});
