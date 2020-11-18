<template>
  <div class="home">
    <div id="loginShow" v-if="loginStatus">
      <h1>L-BLOG</h1>
      <div class="main">
        <new-blog />
        <view-blog />
      </div>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies"
import NewBlog from "../components/newBlog.vue";
import ViewBlog from "../components/viewBlog.vue";

export default {
  name: "Home",
  components: {
    ViewBlog,
    NewBlog,
  },
  data() {
    return {
      loginStatus: false
    }
  },
  methods: {
    checkLogin() {
      console.log(cookies.get("loginToken"))
      if(cookies.get("loginToken") != undefined){
        console.log('1')
        this.loginStatus = true
      } else {
        this.$router.push("/login")
      }
      console.log(this.loginStatus)
    }
  },
  mounted () {
    this.checkLogin();
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  #loginShow {
  height: 100vh;
    h1 {
      box-sizing: border-box;
      width: 100%;
      height: 15%;
      text-align: center;
      padding: 5vh 0;
      font-family: "Merriweather Sans", sans-serif;
    }
    .main {
      height: 85%;
      display: grid;
      grid-template-columns: 1fr 2fr;
      align-items: center;
      justify-items: center;

      .new {
        width: 90%;
        height: 90%;
        box-sizing: border-box;
        border-radius: 30px;
        background: white;
        height: 80%;
      }
    }
  }
}
</style>
