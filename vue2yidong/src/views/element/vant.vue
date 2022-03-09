<template>
  <div>
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="A">A</van-index-anchor>
      <van-cell title="上海" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="B">B</van-index-anchor>
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="C">C</van-index-anchor>
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="D">D</van-index-anchor>
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="E">E</van-index-anchor>
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="F">F</van-index-anchor>
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="G">G</van-index-anchor>
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="H">h</van-index-anchor>
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
    </van-index-bar>
  </div>
</template>

<script>
export default {
  name: "",
  props: [],
  components: {},
  data() {
    return {
      indexList: ["A", "B", "C", "D",'E','F','G'],
    };
  },
  //方法 函数写这里
  methods: {},
  //计算属性
  computed: {},
  //侦听器
  watch: {},
  //过滤器
  filters: {},
  //以下是生命周期
  //组件创建之前
  beforeCreate() {},
  //组件创建之后
  created() {},
  //页面渲染之前
  beforeMount() {},
  //页面渲染之后
  mounted() {},
  //页面视图数据更新之前
  beforeUpdate() {},
  //页面视图数据更新之后
  updated() {},
  //页面销毁之前
  beforeDestroy() {},
  //页面销毁之后
  destroyed() {},
};
</script>


<style   lang="scss"  scoped>
</style>