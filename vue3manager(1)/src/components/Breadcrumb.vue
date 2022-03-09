<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item
      v-for="(item, index) in breadcrumbData[1].meta"
      :key="index"
    >
      {{ item }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
// 动态面包屑逻辑
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
//  路由信息 API 小route vue 存储当前路由的信息
const route = useRoute(); // this.$route
const breadcrumbData = ref([]);
const getBreadData = () => {
  console.log(route.matched);
  breadcrumbData.value = route.matched;
  console.log(breadcrumbData.value[1].meta);
};
watch(
  route,
  () => {
    console.log("route发生变化了");
    getBreadData();
  },
  {
    immediate: true,
  }
);
</script>


<style lang='scss' scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  ::v-deep .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
