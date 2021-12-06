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
    this.text = SharedModule.getShared().text;
    // actions.onGlobalStateChange((props) => {
    //   console.log("🚀 ~ 子", props);
    //   this.text = props.text;
    // });
  },
  computed: {
    ptext() {
      const text = SharedModule.getShared().text;
      return text || "xxx";
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
      console.log("🚀 ~ shared", SharedModule.getShared());
      // 使用 shared 获取 text
      console.log("🚀 ~ text", this.ptext);
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
  padding: 0.4rem;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
