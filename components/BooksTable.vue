<template>
  <v-table fixed-header table-border="solid">
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Desription</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="d in data" :key="d.title">
        <td>{{ d.title }}</td>
        <td>{{ d.author }}</td>
        <td>{{ d.description }}</td>
        <td>
          <v-btn
            class="mr-2"
            color="success"
            size="small"
            icon="mdi-book-edit-outline"
            @click="$emit('edit', id)"
          ></v-btn>

          <v-btn
            color="error"
            size="small"
            icon="mdi-delete"
            @click="$emit('delete', d.id)"
          ></v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  props: ["data"],
  emits: ["edit", "delete"],
};
</script>

<style></style>
