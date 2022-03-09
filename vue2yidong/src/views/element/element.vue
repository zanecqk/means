<template>
  <div>
    <el-button>默认按钮</el-button>
    <el-button :type="a">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>

    <hr>
    <el-button2 >默认按钮</el-button2>
    <el-button2 icon='icon-search1' type="success">成功按钮</el-button2>
    <el-button2  :circle='true' type="danger">危险按钮</el-button2>
  </div>
</template>

<script>
import elButton2 from '@/components/elButton2'
export default {
  props: [],
  components: {elButton2},
  data() {
    return {
        a:'primary'
    };
  },

  methods: {},

  computed: {},

  watch: {},

  filters: {},

  beforeCreate() {},

  created() {},

  beforeMount() {},

  mounted() {},

  beforeUpdate() {},

  updated() {},

  beforeDestroy() {},

  destroyed() {},
};
</script>


<style  lang='scss'>
</style>