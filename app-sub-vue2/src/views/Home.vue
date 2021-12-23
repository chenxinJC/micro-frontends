<template>
  <div class="home1">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <div>vue2{{ text ? "---" + text : "" }}</div> -->
    <!-- <span @click="onTest">test</span> -->
    vue2
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
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
}
</script>
