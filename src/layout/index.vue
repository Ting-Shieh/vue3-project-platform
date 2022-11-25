<template>
  <div
    class="app-wrapper"
    :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']"
  >
    <!-- 左側 Menu -->
    <p-sidebar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: $store.getters.cssVar.menuBg }"
    />
    <!-- 右側 -->
    <div class="main-container">
      <div class="fixed-header">
        <!-- 頂部 navbar -->
        <p-navbar />
      </div>
      <!-- 內容區 -->
      <app-main />
    </div>
  </div>
</template>
<script setup>
import variables from '@/styles/variables.module.scss'
import PNavbar from './components/Navbar.vue'
import PSidebar from './components/Sidebar'
import AppMain from './components/AppMain.vue'
import {} from 'vue'
console.log('color:', variables.menuBg)
</script>
<style lang="scss" scoped>
@import '~@/styles/variables.module.scss';
@import '~@/styles/mixin.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;
  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
    width: calc(100% - #{$sideBarWidth});
    // 側邊攔收縮動畫
    transition: width 0.28s;
  }
}
// 側邊攔收縮
.hideSidebar .fixed-header {
    width: calc(100% - #{$hideSideBarWidth});
  }
</style>
