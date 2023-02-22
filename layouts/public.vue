<template>
  <v-app app>
    <!--Navigation-->
    <v-app-bar color="blue-grey-darken-3">
      <v-container class="d-flex align-center py-0">
        <v-app-bar-title style="cursor: pointer" @click="$router.push('/')">
          <v-icon
            variant="text"
            icon="mdi-book-open-page-variant-outline"
          ></v-icon>
          <span class="font-weight-bold"> eBooks</span>
        </v-app-bar-title>
        <v-btn variant="text" icon="mdi-magnify"></v-btn>
        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-container>
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
    <v-footer color="blue-grey-darken-3" height="100x" flat>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link.text"
          :to="link.path"
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
        >
          {{ link.text }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          <v-icon
            variant="text"
            icon="mdi-book-open-page-variant-outline"
          ></v-icon> <strong class="text-light">eBooks - {{ new Date().getFullYear() }}</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [{text: 'Home', path: '/'},{text: 'Books', path: '/books'}, {text: 'About Us', path: '/about-us'}, {text: 'Administracija', path: '/admin'}]
  }),
};
</script>

<style>
* {
  margin: 0;

  padding: 0;

}

body {
  font-family: cursive;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}


.public-bg {
  background-image: url("../assets/images/books-bg.jpg");
  background-size: cover;
  background-color: #e5e5e5;
}
</style>
