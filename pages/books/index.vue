<template>
  <v-container>
    <h1 class="d-flex justify-center">Books</h1>
    <v-row class="mt-3" no-gutters>
      <v-col v-for="book in books" :key="book.id" lg="4" md="4" sm="6" xs="12">
        <BookCard
          :title="book.title"
          :author="book.author"
          :description="book.description"
          :image="book.image"
          :pdf="book.pdf"
          @download="downloadBook"
        ></BookCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BookCard from "~/components/BookCard.vue";
export default {
  components: {
    BookCard,
  },
  data() {
    return {
      books: [],
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
    downloadBook(pdfUrl){
      download(pdfUrl);
    }
  }
};
</script>

<style></style>
