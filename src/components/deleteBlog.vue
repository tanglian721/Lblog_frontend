<template>
  <div>
    <button @click="deleteBlog">Delete</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"

export default {
  name: "delete-blog",
  props: {
    blog: {
      type: Object,
      requried: true,
    },
  },
  methods: {
    deleteBlog() {
        console.log(this.blog.id)
      axios
        .request({
          url: "http://lblog.ml/api/blog",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            blog_id: this.blog.id,
            token: cookies.get("loginToken")
          },
        })
        .then((response) => {
          console.log(response.data);
          for(let i = 0; i < this.$store.state.blogs.length; i++){
            if (this.$store.state.blogs[i].id == this.blog.id){
              this.$store.state.blogs.splice(i, 1)
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
button {
      padding: 5px;
    }
</style>