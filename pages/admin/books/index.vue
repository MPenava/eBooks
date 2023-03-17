<template>
  <v-container>
    <HeadingView title="Books" />
    <BooksTable :data="this.books" @edit="editBook" @delete="del" />
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
    del(bookId){
      deleteBook(bookId);
      router.reload();
    }
    
  }
};
</script>

<style></style>
