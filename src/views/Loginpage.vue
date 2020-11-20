<template>
  <div class="login">
    <h2>Login</h2>
    <p>username</p>
    <input v-model="username" type="text" />
    <p>password</p>
    <input v-model="password" type="text" />
    <br /><br />
    <button @click="login">Login</button>
    <button @click="signUpShow">Sign Up</button>
    <sign-up @disappear="signUpShow" v-if="signUp_appear" />
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import signUp from "../components/signUp.vue";
export default {
  components: { signUp },
  data() {
    return {
      username: "",
      password: "",
      signUp_appear: false,
    };
  },
  methods: {
    login() {
      axios
        .request({
          url: "http://lblog.ml/api/login",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            username: this.username,
            password: this.password,
          },
        })
        .then((response) => {
          console.log(response.data);
          cookies.set("users", response.data);
          cookies.set("loginToken", response.data.token);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    signUpShow() {
      this.signUp_appear =! this.signUp_appear
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  top: 10vh;
  display: grid;
  align-self: center;
  justify-items: center;
  padding-top: 5vh;
  row-gap: 2vh;
}
</style>