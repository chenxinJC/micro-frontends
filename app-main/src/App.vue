<template>
  <Layout />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Layout from '@/layout/index.vue'

@Options({
  components: {
    Layout
  }
})
export default class Home extends Vue {}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
