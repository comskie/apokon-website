// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css", "@fancyapps/ui/dist/fancybox.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
  ],

  typescript: {
    shim: false,
  },

  tailwindcss: {
    viewer: false,
  },
});
