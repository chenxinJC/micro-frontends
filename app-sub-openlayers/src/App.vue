<template>
  <div id="app">
    <!-- <LeftMenu /> -->
    <!-- <router-view /> -->
    123
  </div>
</template>

<script lang="ts" setup>
// import LeftMenu from '@/layout/left-menu.vue'
</script>

<style lang="less">
html,
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
