<template>
  <app-header />
  <app-main/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import AppHeader from './app-header.vue'
import AppMain from './app-main.vue'

@Options({
  components: {
    AppHeader,
    AppMain
  }
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped></style>
