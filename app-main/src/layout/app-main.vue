<template>
  <div id="root" class="app-main">
      main
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class AppMain extends Vue {}
</script>

<style lang="less" scoped>
.app-main {
  width: 100%;
  height: 100%;
  padding-top: 70px;
  box-sizing: border-box;
}
</style>
