<template>
  <!-- 支持渲染多層級 menu 菜單 -->
  <el-sub-menu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <menu-item :title="route.meta.title" :icon="route.meta.icon"/>
    </template>
    <!-- 子級 -->
    <sidebar-item
      v-for="c_route in route.children"
      :key="c_route.path"
      :route="c_route"
    ></sidebar-item>
  </el-sub-menu>
  <!-- 單一層級 item 項 -->
  <el-menu-item v-else :index="route.path">
    <menu-item :title="route.meta.title" :icon="route.meta.icon"/>
  </el-menu-item>
</template>
<script setup>
import MenuItem from './MenuItem.vue'
import { defineProps } from 'vue'
defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>
<style lang="scss" scoped>
</style>
