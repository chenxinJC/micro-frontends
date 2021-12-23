<template>
  <a-menu v-model:selectedKeys="current"
          mode="horizontal"
          @click="handleClick">
    <a-menu-item v-for="item in routes"
                 :key="item.name">
      {{item.name}}
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, ref, watch, watchEffect } from 'vue'
import { Menu } from 'ant-design-vue'
import apps from '../../shared/apps'
import { useRoute, useRouter } from 'vue-router'
import { ObjectType } from 'qiankun'
export default defineComponent({
  components: {
    AMenu: Menu,
    AMenuItem: Menu.Item
  },
  setup() {
    const current = ref<string[]>([''])
    const route = useRoute()
    const routes = apps
    const router = useRouter()

    watch(
      () => route.path,
      (path) => {
        current.value[0] = path.split('/')[1]
      }
    )
    const handleClick = (item: ObjectType) => {
      current.value[0] = item.key
      router.push(`/${item.key}`)
    }
    return {
      current,
      routes,
      route,
      handleClick
    }
  }
})
</script>

<style scoped>
.ant-menu-horizontal {
  border: 0;
  background: none;
}
.ant-menu-horizontal /deep/ .ant-menu-item-selected::after {
  border: 0;
}
</style>
