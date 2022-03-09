<template>
  <div class="aside">
      <div class="logo-container">
          <el-avatar
            size='45'
            shape='square'
            :src="$store.getters.userInfo.data.avatar"
          >

          </el-avatar>
          <h1 class="logo-title">XX 公司管理平台</h1>
      </div>

    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      text-color="#fff"
      unique-opened="true"
      default-active='/menu/one'
 
    >
      <el-submenu
        v-for="(item, idx) in $store.state.user.userInfo.rights"
        :key="idx"
        :index="String(idx)"
      >
        <!-- 具名插槽 -->
        <template #title>
          <i :class="iconlist[item.authName]"></i>
          <span>{{ item.authName }}</span>
        </template>
        <!-- 匿名插槽 -->
        <el-menu-item
          v-for="(item2 ) in item.children"
          :key="item2"
          :index="item2.path"
          @click="$router.push({path:item2.path})"
        >
          <template #title> 
                 <i :class="iconlist[item2.authName]"></i>
                 <span>{{item2.authName}}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from "vue";
// 数据源
const iconlist = ref({
  个人相关: "iconfont icon-wode2",
  个人中心: "iconfont icon-wode1",
  用户: "iconfont icon-quanxianguanli",
  员工管理: "iconfont icon-shangpinguanli",
  角色管理: "iconfont icon-dingdanguanli",
  权限列表: "iconfont icon-shujutongji",
  文章: "iconfont icon-yonghuliebiao",
  文章排名: "iconfont icon-role-list",
  创建文章: "iconfont icon-permissions-list",
  工资管理: "iconfont icon-ic_money_whole24px",
  员工工资: "iconfont icon-quanbu",
  高管工资: "iconfont icon-fenleigongnengleimu",
  人事管理: "iconfont icon-yonghuliebiao",
  秘书管理: "iconfont icon-jianshen-nvxing-meinv",
  前台管理: "iconfont icon-qiantai",
  用户管理: "iconfont icon-Management",
  用户信息: "iconfont icon-yuedu",
  销售: "iconfont icon-wode2",
  车辆管理: "iconfont icon-wode2",
});
</script>

<style lang="scss" scoped>
.iconfont {
    margin-right:10px;
}

.logo-container {
    height: 45px; 
    padding: 10px 0 22px 0 ;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo-title  {
        margin-left: 10px; 
        color: #fff;
        font-weight: 600;
        line-height: 50px;
        font-size: 16px;
        
    }
}

</style>