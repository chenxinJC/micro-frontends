<template>
  <div class="header">
    <div class="header-nav">
      <top-nav />
    </div>
    <div class="header-other">
      <a-input v-model:value="text" @input="onInput" style="width: 200px" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Input } from 'ant-design-vue'
import actions from '../shared/action'
import TopNav from './compontents/top-nav.vue'
import shared from '../shared'

@Options({
  components: {
    TopNav,
    AInput: Input
  }
})
export default class AppHeader extends Vue {
  text = ''

  mounted() {
    this.$nextTick(() => {
      actions.onGlobalStateChange((props) => {
        console.log('🚀 ~ 主', props)
        this.text = props.text
      })
    })
    setTimeout(() => {}, 1000)
  }

  onInput(e: any) {
    const text = e.target.value
    console.log('🚀 ~ text', text)
    // actions.setGlobalState({ text })
    shared.setText(text)
  }
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  position: absolute;
  z-index: 1000;
  background: #ccc;
}
</style>
