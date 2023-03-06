// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  runtimeConfig: {
    // Private config that is only available on the server
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    // Config within public will be also exposed to the client
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    },
  },
});
