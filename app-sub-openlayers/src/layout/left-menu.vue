<template>
  <a-menu v-model:selectedKeys="selectedKeys"
          style="width: 256px"
          :mode="mode"
          :theme="theme">
    <a-menu-item v-for="(item, index) in routes"
                 :key="index + 1">
      {{item.name}}
    </a-menu-item>
  </a-menu>
</template>
<script lang="ts">
import { Menu } from 'ant-design-vue'
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    AMenu: Menu,
    AMenuItem: Menu.Item
  },
  setup() {
    const state = reactive({
      mode: 'inline',
      theme: 'light',
      selectedKeys: [1],
      openKeys: ['sub1']
    })
    const router = useRouter()
    const routes = router.options.routes
    const changeMode = (checked: boolean) => {
      state.mode = checked ? 'vertical' : 'inline'
    }
    const changeTheme = (checked: boolean) => {
      state.theme = checked ? 'dark' : 'light'
    }
    return {
      ...toRefs(state),
      changeMode,
      changeTheme,
      routes
    }
  }
})
</script>

<style lang="less" scoped>
.ant-menu {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
