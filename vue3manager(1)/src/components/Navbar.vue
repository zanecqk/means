<template>
  <div class="navbar">
      <breadcrumb class="breadcrumb-container"></breadcrumb>
      <div class="right-menu">
          <screenful class="right-menu-item hover-effect"> </screenful>
          <!-- 头像 -->
          <el-dropdown class="avatar-container" trigger='click'>
              <div class="avatar-wrapper">
                  <el-avatar
                    shape="square"
                    :size='40'
                    :src="$store.getters.userInfo.data.avatar"
                  >

                  </el-avatar>
                  <i class="el-icon-s-tools"></i>
              </div>
              <!-- 具名插槽  slot ='dropdown'-->
              <template #dropdown>
                  <el-dropdown-menu class="user-dropdown">
                      <router-link to="/">
                          <el-dropdown-item>首页</el-dropdown-item>
                      </router-link>
                      <a target="_blank" href="#">
                          <el-dropdown-item>二选项</el-dropdown-item>
                      </a>
                       <el-dropdown-item @click="logout"  divided>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
              </template>
          </el-dropdown>
      </div>
  </div>
</template>

<script setup>
import screenful from '@/components/screenful'
import breadcrumb from './Breadcrumb.vue'
import {useStore} from 'vuex'
import {ref} from 'vue'

const store = useStore()

const logout = ()=>{
    console.log('准备退出')
    // 尽量把数据流放入 vuex里面 
    store.dispatch('user/logout')
    location.reload('')
}

 
</script>

<style lang="scss" scoped>
  .breadcrumb-container {
    float: left;
  }
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;

    ::v-deep .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>