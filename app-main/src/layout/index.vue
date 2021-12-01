<template>
  <left-nav />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import LeftNav from './left-nav.vue'

@Options({
  components: {
    LeftNav
  }
})
export default class Home extends Vue {}
</script>
