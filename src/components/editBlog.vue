<template>
  <div>
    <br />
    <div>
      <p>content</p>
      <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
      <br />
      <br />
      <button @click="EditBlog">submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "edit-blog",
  data() {
    return {
      content: "",
    };
  },
  props: {
    blog: {
      type: Array,
      requried: true,
    },
  },
  methods: {
    EditBlog() {
      axios
        .request({
          url: "http://127.0.0.1:5000/blog",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            content: this.content,
            user_id: this.blog[5],
            blog_id: this.blog[3],
          },
        })
        .then((response) => {
          console.log(response.data);
          this.newBlog = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="sass" scoped>
</style>