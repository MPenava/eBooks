<template>
  <v-container>
    <HeadingView title="Books" />
    <BooksTable :data="this.books" @edit="editBook" @delete="deleteBook" />
  </v-container>
</template>

<script>
definePageMeta({
  middleware: ["auth"],
  // or middleware: 'auth'
});
import HeadingView from "~/components/HeadingView.vue";
import BooksTable from "~/components/BooksTable.vue";
export default {
  components: {
    HeadingView,
    BooksTable,
  },
  data() {
    return {
      books: []
    };
  },
  mounted() {
    getBooks()
      .then((result) => {
        this.books = result;
      })
      .catch(console.error.bind(console));
  },
  methods:{
    editBook(){
        console.log("Uređivanje");
    },
    deleteBook(){
        console.log("Brisanje");
    }
  }
};
</script>

<style></style>
