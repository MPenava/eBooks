<template>
  <registration-form></registration-form>
</template>

<script>
definePageMeta({
  middleware: ["auth"],
  // or middleware: 'auth'
});
import RegistrationForm from '~~/components/RegistrationForm.vue';
export default {
  components:{
    RegistrationForm
  }
};
</script>

<style></style>
