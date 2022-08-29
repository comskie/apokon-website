import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css", "@fancyapps/ui/dist/fancybox.css"],

  modules: ["@nuxtjs/tailwindcss"],

  typescript: {
    shim: false,
  },

  tailwindcss: {
    viewer: false,
  },
});
