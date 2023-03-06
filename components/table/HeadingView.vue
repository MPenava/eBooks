<template>
  <v-row class="mx-0">
    <v-col
      cols="8"
      md="6"
      style="padding-left: 0px; padding-top: 10px; padding-bottom: 10px"
    >
      <span class="headline font-weight-light"
        >{{ title }}
        <v-icon
          slot="divider"
          @click="reloadAllData()"
          style="padding-bottom: 2px"
          >mdi-refresh</v-icon
        >
      </span>
      <v-breadcrumbs
        :items="breadcrumbs"
        style="padding-left: 0; padding-bottom: 0"
      >
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style></style>
