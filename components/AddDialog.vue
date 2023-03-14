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
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Title*"
                placeholder="Harry Potter: Prisoner of Azkaban"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Author*"
                placeholder="J. K. Rowling"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Description*"
                placeholder="Some about books..."
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-file-input
                label="Image"
                variant="filled"
                accept="image/png, image/jpeg, image/bmp"
                prepend-icon="mdi-camera"
              ></v-file-input>
            </v-col>
            <v-col cols="6">
              <v-file-input
                label="PDF"
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
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
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
  }),
};
</script>

<style></style>
