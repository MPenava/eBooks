<template>
  <v-app app>
    <!--Navigation-->
    <v-navigation-drawer v-model="drawer" color="grey-darken-3">
      <v-list>
        <v-list-item
          v-for="item in links"
          :key="item"
          :value="item"
          :to="item.path"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="grey-darken-3">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-icon
          variant="text"
          icon="mdi-book-open-page-variant-outline"
        ></v-icon>
        <span class="font-weight-bold"> eBooks - Administration</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      { text: "Home", path: "/admin", icon: "mdi-home" },
      { text: "Books", path: "/admin/books", icon: "mdi-bookshelf" },
      { text: "Users", path: "/admin/users", icon: "mdi-account-group" },
    ],
  }),
};
</script>

<style></style>
