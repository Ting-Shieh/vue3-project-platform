<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :model="loginForm"
      :rules="loginRules"
    >
      <div class="title-container">
        <h3 class="title">登入</h3>
      </div>
      <el-form-item prop="usename">
        <span class="svg-container">
          <el-icon><avatar /></el-icon>
          <!-- <svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon> -->
        </span>
        <el-input v-model="loginForm.username" type="text" name="username" placeholder="用戶名稱" />
      </el-form-item>
      <el-form-item class="this" prop="password">
        <span class="svg-container">
          <el-icon>
            <svg-icon icon="password"></svg-icon>
          </el-icon>
        </span>
        <el-input v-model="loginForm.password" name="password" placeholder="密碼" :type="passwordType" />
        <span class="show-pwd">
          <el-icon>
            <span class="svg-container">
              <svg-icon
              :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
              @click="onChangePwdType"></svg-icon>
            </span>
          </el-icon>
        </span>
      </el-form-item>
      <el-button type="primary" style="width: 100%;margin-bottom: 30px;">登入</el-button>
    </el-form>
  </div>
</template>
<script setup>
import { Avatar } from '@element-plus/icons'
import { validatePassword } from './rules.js'
import { ref } from 'vue'
const loginForm = ref({
  username: 'mstr@it',
  password: '12345678'
})
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用戶名為必填欄位'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})
const passwordType = ref('password')

const onChangePwdType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
</script>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: rgb(204, 197, 197);
$cursor: #fff;

.login-container{
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form{
    width: 520px;
    position: relative;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    :deep(.el-form-item) {
      background: rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    :deep(.el-input) {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        width: 100%;
        background: transparent;
        border: 0px !important;
        border-radius: 0px;
        color: $light_gray;
        padding: 10px 5px 10px 15px;
        height: 43px;
        caret-color: $cursor;
        -webkit-appearance: none;
      }
      .el-input__wrapper {
        width: 300px;
      }
    }
    .title-container{
      position: relative;
      .title{
        color: $light_gray;
        font-size: 26px;
        margin: 0 auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }
    .svg-container{
      color: $dark_gray;
      padding: 6px 5px 6px 15px;
      vertical-align: middle;
      display: inline-block;
    }
    .show-pwd{
      color: $dark_gray;
      position: absolute;
      cursor: pointer;
      user-select: none;
      font-size: 16px;
      right: 10px;
      top: 7px;
    }
  }
}
</style>
