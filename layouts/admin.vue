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

          <v-list-item-title>{{ item.text }}</v-list-item-title>
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

      <v-spacer></v-spacer>

      <p class="font-weight-bold">Marko Penava</p>

      <!-- <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/admin/registration">
            <template v-slot:prepend>
              <v-icon icon="mdi-account-plus"></v-icon>
            </template>
            <v-list-item-title>Novi korisnik</v-list-item-title>
          </v-list-item>

          <v-list-item @click="logout()">
            <template v-slot:prepend>
              <v-icon icon="mdi-logout"></v-icon>
            </template>
            <v-list-item-title>Odjava</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
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
    menuItems: [
      { text: "Novi korisnik", path: "/admin/registration", icon: "mdi-account-plus" },
      { text: "Odjava", icon: "mdi-logout" },
    ],
  }),
  methods: {
    logout(){
      signOutUser();
      this.$router.push('/');
    }
  }
};
</script>

<style></style>
