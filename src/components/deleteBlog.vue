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
      type: Array,
      requried: true,
    },
  },
  methods: {
    deleteBlog() {
        console.log(this.blog[3])
      axios
        .request({
          url: "http://127.0.0.1:5000/blog",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            blog_id: this.blog[3],
            token: cookies.get("loginToken")
          },
        })
        .then((response) => {
          console.log(response.data);
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