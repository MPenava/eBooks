<template>
  <v-card max-width="300px">
    <v-img height="200px" :src="image"></v-img>
    <v-card-title class="d-flex justify-center">{{ title }}</v-card-title>
    <v-card-subtitle>
      <span text-color="secondary">by </span>{{ author }}
    </v-card-subtitle>
    <v-card-text> {{ description }}</v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn
        variant="outlined"
        color="blue"
        prepend-icon="mdi-book-open-variant"
        :href="pdf"
        target="blank"
        >
        Read Book
      </v-btn>
      <v-btn
        variant="outlined"
        color="error"
        prepend-icon="mdi-download"
        @click="$emit('download', pdf)"
        >
        Download
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: ["title", "author", "description", "image","pdf"],
    emits: ["download-book"],
    computed: {
      title() {
        return this.title.length > 24 ? this.title.substring(0,24)+".." : this.title;
      },
      description() {
        return this.description.length > 35 ? this.description.substring(0,35)+".." : this.description;
      }
    }

};
</script>

<style></style>
