<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="vue2">
      <template #icon>
        <mail-outlined />
      </template>
      vue2
    </a-menu-item>
    <a-sub-menu>
      <template #icon>
        <setting-outlined />
      </template>
      <template #title>Navigation Three - Submenu</template>
      <a-menu-item-group title="Item 1">
        <a-menu-item key="setting:1">Option 1</a-menu-item>
        <a-menu-item key="setting:2">Option 2</a-menu-item>
      </a-menu-item-group>
      <a-menu-item-group title="Item 2">
        <a-menu-item key="setting:3">Option 3</a-menu-item>
        <a-menu-item key="setting:4">Option 4</a-menu-item>
      </a-menu-item-group>
    </a-sub-menu>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Menu } from 'ant-design-vue'
import { MailOutlined, SettingOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  components: {
    MailOutlined,
    SettingOutlined,
    AMenu: Menu,
    ASubMenu: Menu.SubMenu,
    AMenuItem: Menu.Item,
    AMenuItemGroup: Menu.ItemGroup
  },
  setup() {
    const current = ref<string[]>(['vue2'])
    return {
      current
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
