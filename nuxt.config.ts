import { defineNuxtConfig } from "nuxt";

const lifecycle = process.env.npm_lifecycle_event;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Apokon Elementary School` : 'Apokon Elementary School';
    },
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  css: ["@/assets/css/main.css", "element-plus/dist/index.css"],

  target: "static",

  components: true,

  modules: ["@nuxtjs/tailwindcss"],

  build: {
    transpile:
      lifecycle === "build" || lifecycle === "generate" ? ["element-plus"] : [],
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
  },
});
