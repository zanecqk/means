<template>
  <div>
    <van-index-bar :index-list="indexList" highlight-color='red'>
        <template v-for="(item,index) in dataList">
            <van-index-anchor
                :index='item.index'
                :key="index"
                style="background:#ccc"
            />
            <van-cell
                v-for="(sub ) in item.data"
                :title='sub.name'
                :key="sub.name"
                @click="changecity(sub)"
            />
        </template>
    </van-index-bar>
  </div>
</template>

<script>
import {cityListData} from '@/api/api'
export default {
  name: "",
  props: [],
  components: {},
  data() {
    return {
      indexList: [ ],
      dataList:[]
    };
  },
  //方法 函数写这里
  methods: {
      changecity(sub) {
          console.log('sub',sub)
          this.$store.commit('cityinfo',sub)
          this.$router.push('/cinema')
      }
  },
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
  beforeMount() {
    
  },
  //页面渲染之后
  async mounted() {
      console.log('city mounted')
      var result = await cityListData()
      console.log('result',result)
      this.indexList = result[1]
      this.dataList = result[0]
  },
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