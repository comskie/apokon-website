import { defineNuxtConfig } from "nuxt";

const lifecycle = process.env.npm_lifecycle_event;

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
