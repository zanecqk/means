<template>
  <div class="app-wrapper">
    <!-- 左侧menu -->
    <Sidebar 
    id="guide-sidebar" 
    class="sidebar-container"
    :style="{backgroundColor:variables.menuBg}"
    ></Sidebar>
    <div class="main-container">
        <div class="fixed-header">
            <!-- 后台管理的顶部 -->
            <Navbar> </Navbar>
        </div>

        <!-- 内容区域 -->
        <AppMain></AppMain>
    </div>
  </div>
</template>

<script setup>
 import variables from '@/styles/variables.scss'
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import AppMain from "@/components/AppMain";
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>