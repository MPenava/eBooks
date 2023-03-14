<template>
  <v-container>
    <HeadingView title="Books" />
    <BooksTable 
        :data="data"
        @edit="editBook"
        @delete="deleteBook"
    />
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
      data: [
        {
          title: "title 1",
          author: "author 1",
          description: "description 1",
        },
        {
          title: "title 2",
          author: "author 2",
          description: "description 2",
        },
      ],
    };
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
