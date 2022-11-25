<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>
<script setup>
import {} from 'vue'
</script>
<style lang="scss" scoped>
@import '~@/styles/variables.module.scss';
.app-main{
  min-height: calc(100vh - #{$navBarHeight});
  width: 100%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding: 61px 20px 20px 20px;
}
</style>
