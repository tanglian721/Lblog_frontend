<template>
  <div class="sign-up">
    <div v-if="success" class="success">
      <h2>Sign Up Successfull!</h2>
    </div>
    <div v-else class="chart">
      <h2>Sign Up</h2>
      <p>username</p>
      <input v-model="username" type="text" />
      <p>password</p>
      <input v-model="password" type="text" />
      <br /><br />
      <button @click="SignUp">SIGN UP</button>
      <button @click="back">Back</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "sign-up",
  data() {
    return {
      username: "",
      password: "",
      success: false,
    };
  },
  methods: {
    SignUp() {
      axios
        .request({
          url: "http://lblog.ml/api/users",
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
          this.success = true;
          setTimeout(() => {
            this.back();
          }, 500);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    back() {
      this.$emit("disappear");
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-up {
  position: relative;
  top: -20vh;
  box-sizing: border-box;
  width: 30vw;
  height: 30vh;
  border-radius: 30px;
  padding: 3vh;
  background-color: #fff;
  .chart {
    height: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
  }
  filter: drop-shadow(0 0 30px rgba(0, 0, 0, 0.801));
}
</style>