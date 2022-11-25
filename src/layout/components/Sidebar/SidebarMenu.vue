<template>
  <!--
    [一級 menu 菜單]
    router: 路由跳轉問題
    :default-active 默認激活項
    collapse 側邊攔窩放
  -->
  <el-menu
    :unique-opened="true"
    :collapse="!$store.getters.sidebarOpened"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    :default-active="activeMenu"
    router
  >
    <sidebar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></sidebar-item>
    <!-- 子級 menu 菜單 -->
    <!-- <el-sub-menu index="1">
      <template #title>
        <el-icon :size="20">
          <Location />
        </el-icon>
        <span>菜單1</span>
      </template>
      <el-menu-item index="1-1">菜單1-選項(1)</el-menu-item>
      <el-menu-item index="1-2">菜單1-選項(2)</el-menu-item>
    </el-sub-menu> -->
    <!-- 具體菜單項 -->
    <!-- <el-menu-item index="2">
      <el-icon :size="20">
        <Setting />
      </el-icon>
      <template #title>菜單4</template>
    </el-menu-item> -->
  </el-menu>
</template>
<script setup>
import SidebarItem from './SidebarItem.vue'
import { computed } from 'vue'
import { filterRouters, generateMenus } from '@/utils/route.js'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
console.log('得到返回數據(未處理): ', router.getRoutes())
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  console.log('filterRoutes(處理Ing): ', filterRoutes)
  return generateMenus(filterRoutes)
})

console.log('路由數據處理後: ', JSON.stringify(routes.value))
// 計算高亮 menu 方法
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>
<style lang="scss" scoped></style>
