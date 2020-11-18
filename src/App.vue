<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&family=Merriweather+Sans&display=swap");
* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100vh;
  background: linear-gradient(119.57deg, #01c2ff 2.03%, #08ba8f 101%);

  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
button {
  padding: 5px;
  border-radius: 10px;
  border: none;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.726));
  &:hover {
    filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.726));
  }
  &:active{
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.726));
  }
}
</style>
