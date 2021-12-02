<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div>vue2{{ text ? "---" + text : "" }}</div>
    <span @click="onTest">test</span>
    <router-view />
  </div>
</template>
<script>
// import actions from "./shared/action";
export default {
  data() {
    return {
      text: "",
    };
  },
  mounted() {
    this.$onGlobalStateChange((props) => {
      console.log("🚀 ~ 父 -> 子", props);
      this.text = props.text;
    });
  },
  methods: {
    onTest() {
      this.$setGlobalState({ text: "123456" });
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
