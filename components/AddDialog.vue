<template>
  <v-dialog v-model="dialog" persistent width="1024">
    <template v-slot:activator="{ props }">
      <div class="d-flex justify-space-between">
        <h2>Books</h2>
        <v-btn color="blue" prepend-icon="mdi-plus" v-bind="props">Add </v-btn>
      </div>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Book Details</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col md="12" sm="12">
              <v-alert
                density="compact"
                icon="$warning"
                type="error"
                v-model="errorMessage"
                >{{ errorMessage }}</v-alert
              >
              <v-alert
                density="compact"
                type="success"
                v-model="successMessage"
                >{{ successMessage }}</v-alert
              >
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Title*"
                v-model="title"
                placeholder="Harry Potter: Prisoner of Azkaban"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Author*"
                v-model="author"
                placeholder="J. K. Rowling"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Description*"
                v-model="description"
                placeholder="Some about books..."
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-file-input
                label="Image"
                v-model="image"
                variant="filled"
                accept="image/png, image/jpeg, image/bmp"
                prepend-icon="mdi-camera"
              ></v-file-input>
            </v-col>
            <v-col cols="6">
              <v-file-input
                label="PDF"
                v-model="pdf"
                variant="filled"
              ></v-file-input>
            </v-col>
          </v-row>
        </v-container>
        <small color="error">*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="submitData()">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    successMessage: null,
    errorMessage: null,
    bookData: null,
    title: "",
    author: "",
    description: "",
    image: "",
    imageUrl: "",
    pdf: "",
  }),
  methods: {
    submitData() {
      // if(this.title === "" || this.author === "" || this.description === "" ){
      //   this.errorMessage = "Molimo unesite sve podatke!"
      // }else if(this.image === "" || this.pdf === ""){
      //   this.errorMessage = "Slika ili dokument nisu dodani!"
      // }else{
      // }

      // uploadFile("images", this.image)
      //   .then((result) => {
      //     console.log("Rez:", result);
      //   })
      //   .catch(console.error.bind(console));
      var imageUrl;
      getPathOfFile("images", this.image)
        .then((result) => {
          imageUrl =  result;
        })
        .catch(console.error.bind(console));
      console.log(imageUrl);

      //Radi
      // var bookData = {
      //   title: this.title,
      //   author: this.author,
      //   description: this.description
      // }
      // addBookToDb(bookData);
      // this.dialog = false;
      // this.successMessage = "Uploading successfully";
    },
  },
};
</script>

<style></style>
