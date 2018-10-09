<template>
  <div id="app">
      <Header/>
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
  color: #2c3e50;
}
body {
  background-color: #d5dae654
}

// https://murmuring-sierra-54649.herokuapp.com
</style>


