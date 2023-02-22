<template>
    <v-app>
      <!--Navigation-->
      <v-app-bar color="blue-grey-darken-1">
          <v-app-bar-title>
              <v-icon variant="text" icon="mdi-book-open-page-variant-outline"></v-icon>
              eBooks
          </v-app-bar-title>
          <v-btn variant="text" icon="mdi-magnify"></v-btn>
          <v-btn variant="text" icon="mdi-account"></v-btn>
          <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>
  
      <!--Main-->
      <v-main>
          <v-container>
              <Nuxt />
          </v-container>
      </v-main>
  
      <!--Footer-->
      <v-footer color="blue-grey-darken-1" height="100x" app>
          <v-row justify="center" no-gutters>
          <v-btn
              v-for="link in links"
              :key="link"
              color="white"
              variant="text"
              class="mx-2"
              rounded="xl"
          >
              {{ link }}
          </v-btn>
          <v-col class="text-center mt-4" cols="12">
              {{ new Date().getFullYear() }} — <strong class="text-light">eBooks</strong>
          </v-col>
          </v-row>
      </v-footer>
    </v-app>
  </template>
  
  <script>
  export default {
      data: () => ({
        links: [
          'Home',
          'About Us',
          'Team',
          'Services',
          'Blog',
          'Contact Us',
        ],
      }),
  };
  </script>
  
  <style></style>
  