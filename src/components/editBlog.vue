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
import cookies from "vue-cookies"
export default {
  name: "edit-blog",
  data() {
    return {
      content: "",
    };
  },
  props: {
    blog: {
      type: Object,
      requried: true,
    },
  },
  methods: {
    EditBlog() {
      axios
        .request({
          url: "http://lblog.ml/api/blog",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            content: this.content,
            blog_id: this.blog.id,
            token: cookies.get("loginToken")
          },
        })
        .then((response) => {
          console.log(response.data);
          this.newBlog = response.data;
          for(let i = 0; i < this.$store.state.blogs.length; i++){
            if (this.$store.state.blogs[i].id == this.blog.id){
              // this.$store.state.blogs[i].content == this.content
              this.$set(this.$store.state.blogs[i], 'content', this.content)
            }
          }
          this.$emit('editShow', false)
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