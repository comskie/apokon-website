import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],

  target: "static",

  components: true,

  modules: ["@nuxtjs/tailwindcss"],

  build: {
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
  },
});
