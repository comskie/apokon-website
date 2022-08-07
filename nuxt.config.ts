import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],

  ssr: false,

  modules: ["@nuxtjs/tailwindcss"],

  typescript: {
    shim: false
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: false
  }
});
