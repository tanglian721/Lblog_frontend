<template>
    <div class="new">
        <h2>New Blog</h2>
        <p class="title">Title</p>
        <input v-model="title" type="text" />
        <p class="title">Content</p>
        <textarea name="" id="textarea" cols="30" rows="10" v-model="content"></textarea>
        <!-- <p class="title">User ID</p>
        <input id="user" v-model="user_id" type="text" /> -->
        <br>
        <br>
        <button @click="NewBlog">submit</button>
    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies"
    export default {
        name: "new-blog",
        data() {
            return {
                title:"",
                content: "",
                user_id: "",
                newBlog: "",
            }
        },
        methods: {
            NewBlog() {
                axios.request({
                    url: "http://lblog.ml/api/blog",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: {
                        title:this.title,
                        content: this.content,
                        token: cookies.get("loginToken")
                    }
                }).then((response) => {
                    console.log(response.data)
                    this.newBlog = response.data
                    this.$store.commit("fakeAdd", this.newBlog)
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        
    }
</script>

<style lang="scss" scoped>
.new{
    padding: 5% 8%;
    h2{
        box-sizing:border-box;
        text-align: center;
        height: 10%;
    }
    .title{
        width: 100%;
        font-size: 1.2rem;
        margin: 0.5rem 0;
    }
    #textarea{
        width: 100%;
        height: 50%;
    }
}


</style>