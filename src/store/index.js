import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        blogs: []
    },
    mutations: {},
    actions: {},
    modules: {},
    getters: {
        blogList: state => {
            return state.blogs;
        }
    }
});