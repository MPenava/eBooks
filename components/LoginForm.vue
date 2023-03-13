<template>
  <v-sheet width="400" class="mx-auto mt-5">
    <h2 class="mb-2 text-center">Login</h2>
    <v-form ref="form">
      <v-alert
        class="mb-3"
        density="compact"
        type="error"
        v-model="errorMessage"
        >{{ errorMessage }}</v-alert
      >

      <v-text-field v-model="email" label="Email" required></v-text-field>

      <v-text-field
        v-model="password"
        :counter="6"
        label="Password"
        type="password"
        required
      ></v-text-field>

      <div class="d-flex flex-column">
        <v-btn class="save-btn mt-4" color="primary" @click="login">
          Confirm
        </v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: null,
    };
  },
  methods: {
    login() {
      console.log(this.email + " - " + this.password);
      if (this.email === "" || this.password === "") {
        this.errorMessage = "You must insert all data!";
      } else if (this.password.length < 6) {
        this.errorMessage = "Password must have 6 chars!";
      } else {
        signInUser(this.email, this.password);
        if(initUser()){
          this.$router.push('/admin');
        }else{
          this.$router.push('/login');
        }
      }
    },
  },
};
</script>

<style></style>
