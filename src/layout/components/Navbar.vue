<template>
  <div class="navbar">
    <hamburger class="hamburger-container" />
    <div class="right-menu">
      <!-- 頭像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="require('@/assets/images/avatar1.png')"
          ></el-avatar>
          <i class="el-icon-s-tool"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>首頁</el-dropdown-item>
            </router-link>
            <a target="_blank" href="">
              <el-dropdown-item>外連結</el-dropdown-item>
            </a>
            <el-dropdown-item divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import Hamburger from '@/components/Hamburger'
// import avatarImg from '@/assets/images/avatar1.png'
import {} from 'vue'
</script>
<style lang="scss" scoped>
@import '~@/styles/variables.module.scss';
.navbar{
  height: #{$navBarHeight};
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    // hover 動畫
    transition: background 0.5s;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .right-menu{
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;
    :deep(.avatar-container){
      cursor: pointer;
      .avatar-wrapper{
        position: relative;
        margin-top: 5px;
        .el-avatar {
          --el-avatar-bg-color: none;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
