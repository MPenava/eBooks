<template>
  <v-sheet width="500" class="mx-auto mt-3">
    <h2 class="mb-2 text-center">Adding new User</h2>
    <v-form ref="form">
      <v-alert class="mb-3" density="compact" type="success" v-model="successMessage">
        {{ successMessage }}
      </v-alert>

      <v-alert class="mb-3" density="compact" type="error" v-model="errorMessage">{{ errorMessage }}</v-alert>

      <v-text-field
        v-model="fullname"
        label="Name and Surname"
        required
      ></v-text-field>

      <v-text-field v-model="email" label="Email" required></v-text-field>

      <v-text-field
        v-model="password"
        :counter="6"
        label="Password"
        type="password"
        required
      ></v-text-field>

      <v-text-field
        v-model="confPassword"
        :counter="6"
        label="Confirm Password"
        type="password"
        required
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <div class="d-flex flex-column">
        <v-btn
          class="save-btn mt-4"
          :class="checkbox ? 'active' : 'non-active'"
          :disabled="!checkbox"
          @click="saveUser"
        >
          Save
        </v-btn>

        <v-btn color="error" class="mt-4" block @click="reset">
          Reset Form
        </v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>

<script>

export default {
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
      confPassword: "",
      successMessage: null,
      errorMessage: null,
      checkbox: false,
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
      this.successMessage = null;
      this.errorMessage = null;
    },
    saveUser() {
      console.log(this.fullname + " - " + this.email + " - " + this.password);
      if(this.fullname === "" || this.email === "" || this.password === "" || this.confPassword === ""){
        this.errorMessage = 'You must insert all data!';
      }else if(this.password.length < 6){
        this.errorMessage = 'Password must have 6 chars!';
      }else if(this.password !== this.confPassword){
        this.errorMessage = 'Passwords are not the same!';
      }else{
          try {
            createUser(this.email, this.password);
            writeUserData(this.fullname, this.email);
            this.successMessage = 'You have successfully registered.';
          } catch (error) {
            this.errorMessage = error;
          }
      }
    },
  },
};
</script>

<style>
.active {
  background-color: #1e88e5;
  color: white;
  display: block;
}

.non-active {
  background-color: #eceff1;
  color: black;
}
</style>
