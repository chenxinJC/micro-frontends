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
import SharedModule from "./shared";
export default {
  data() {
    return {
      text: "",
    };
  },
  mounted() {
    // actions.onGlobalStateChange((props) => {
    //   console.log("🚀 ~ 子", props);
    //   this.text = props.text;
    // });
  },
  computed: {
    ptext() {
      const text = SharedModule.text;
      return text;
    },
  },
  watch: {
    ptext(val) {
      console.log("🚀 ~ ptext", val);
      this.text = val;
    },
  },
  methods: {
    onTest() {
      const shared = SharedModule.getShared();
      console.log("🚀 ~ shared", shared);
      // 使用 shared 获取 text
      this.text = shared.getText();
      console.log("🚀 ~ text", this.text);
      // this.$setGlobalState({ text: "123456" });
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
