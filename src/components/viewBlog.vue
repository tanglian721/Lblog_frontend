<template>
  <div class="view">
      <single-blog v-for="blog in blogs" :key="blog[3]" :blog="blog" />
  </div>
</template>

<script>
import singleBlog from './singleBlog.vue';
import axios from "axios";
export default {
  components: { singleBlog },
  name: "view-blog",
  data() {
      return {
          blogs: []
      }
  },
  props:{
      blog:{
          type: Array,
          requried: true
      }
  },
  methods: {
      ViewBlog() {
          axios.request({
              url: "http://127.0.0.1:5000/blog",
              method: "GET"
          }).then((response) => {
              console.log(response.data);
                this.blogs = response.data
          }).catch((error) => {
              console.log(error)
          })
          
      }
  },
  mounted () {
      this.ViewBlog();
  },
};
</script>

<style lang="scss" scoped>
.view{
    box-sizing: border-box;
    width: 90%;
    height: 90%;
    overflow-y: scroll;
    background-color: bisque;
    &::-webkit-scrollbar{
        display: none;
    }
    display: grid;
    row-gap: 3vh;
    justify-items: center;
    padding-top: 5vh;
}
</style>