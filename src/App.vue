<template>
  <div id="app">
    <div id="nav">
      <Header></Header>
    </div>
    <router-view class="body"/>
  </div>
</template>

<script>
import Header from "@/cmps/Header.vue";

export default {
  components: {
    Header
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
#nav {
  // a {
  //   // font-weight: bold;
  //   // color: #2c3e50;
  //   &.router-link-exact-active {
  //     background-color: #122143;
  //     color: white;
  //     text-decoration: none;
  //   }
  // }
}
</style>
