<template>
  <div class="login">
    <h2>Login</h2>
    <p>username</p>
    <input v-model="username" type="text" />
    <p>password</p>
    <input v-model="password" type="text" />
    <br /><br />
    <button @click="login">Login</button>
    <button>Sign Up</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .request({
          url: "http://127.0.0.1:5000/login",
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
          cookies.set("users", response.data)
          cookies.set("loginToken", response.data.token)
          this.$router.push("/")
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: grid;
  align-self: center;
  justify-items: center;
  padding-top: 5vh;
  row-gap: 2vh;
}
</style>