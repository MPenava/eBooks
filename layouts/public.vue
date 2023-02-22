<template>
  <v-app>
    <!--Navigation-->
    <v-app-bar color="blue-grey-darken-1">
      <v-app-bar-title>
        <v-icon
          variant="text"
          icon="mdi-book-open-page-variant-outline"
        ></v-icon>
        eBooks
      </v-app-bar-title>
      <v-btn variant="text" icon="mdi-magnify"></v-btn>
      <v-btn variant="text" icon="mdi-account"></v-btn>
      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>

    <!--Main-->
    <v-main class="public-bg">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="80vh"
              rounded="lg"
              class="pa-5"
              height=100%
            >
                <NuxtPage />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!--Footer-->
    <v-footer color="blue-grey-darken-1" height="100x" flat>
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
          {{ new Date().getFullYear() }} —
          <strong class="text-light">eBooks</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
  }),
};
</script>

<style>
.public-bg {
  background-image: url("../assets/images/books-bg.jpg");
  background-size: cover;
  background-color: #e5e5e5;
}
</style>
