<template>
  <div class="single">
    <div class="title">
      <p class="tit-title">Title:</p>
      <p class="tit-con">{{ blog[0] }}</p>
    </div>
    <div class="content">
      <p class="con-con">{{ blog[1] }}</p>
    </div>
    <div class="user">
      <p class="user-title">Writer :</p>
      <p class="user-con">{{ blog[4] }}</p>
    </div>
    <div class="time">
      <p class="time-title">Created at :</p>
      <p class="time-con">{{ blog[2] }}</p>
    </div>
    <div class="modify" v-if="if_owener">
      <button @click="IfEdit">edit</button>
      <div class="delete">
        <delete-blog :blog="blog" />
      </div>
      <br />
      <edit-blog v-if="if_edit" :blog="blog" />
    </div>
  </div>
</template>

<script>
import DeleteBlog from "./deleteBlog.vue";
import editBlog from "./editBlog.vue";
import cookies from "vue-cookies";
export default {
  components: { editBlog, DeleteBlog },
  name: "single-blog",
  data() {
    return {
      if_edit: false,
      if_owener: false,
    };
  },
  props: {
    blog: {
      type: Array,
      requried: true,
    },
  },
  methods: {
    IfEdit() {
      this.if_edit = !this.if_edit;
    },
    checkOwener(){
      if(cookies.get('users').user_id == this.blog[5]){
        this.if_owener = true
      }
    }
  },
  mounted () {
    this.checkOwener();
  },
};
</script>

<style lang="scss" scoped>
.single {
  box-sizing: border-box;
  width: 90%;
  border-radius: 50px;
  background-color: white;
  padding: 3% 5%;
  display: grid;
  row-gap: 2vh;
  font-family: "Comfortaa", cursive;
  filter: drop-shadow(1px 1px 10px rgb(0, 0, 0));
  p {
    display: inline-block;
  }
  .title {
    font-size: 1.2rem;
    font-weight: 1000;
    text-transform: uppercase;
    .tit-con {
      margin-left: 1vw;
    }
  }
  .content {
    font-size: 1rem;
  }
  .time {
    margin-top: -1vh;
    font-size: 0.8rem;
  }
  .user {
    font-size: 0.8rem;
  }
  .modify {
    div {
      display: inline-block;
      margin-left: 1vw;
    }
  
  }
}
</style>