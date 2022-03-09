<template>
  <div class="nav">
    <ul>
      <router-link to="/film" tag="li" active-class="active">
        <i class="iconfont icon-dianying1"></i>
        <p>影片</p>
      </router-link>
      <router-link to="/cinema" tag="li" active-class="active">
        <i class="iconfont icon-yingyuan"></i>
        <p>影院</p>
      </router-link>
      <router-link to="/zixun" tag="li" active-class="active">
        <i class="iconfont icon-zixun"></i>
        <p>资讯</p>
      </router-link>
       <router-link to="/center" tag="li" active-class="active">
        <i class="iconfont icon-wode2"></i>
        <p>我的</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: [],
  components: {},
  data() {
    return {};
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


<style  lang='scss' scoped>
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #ccc;
  height: 50px;
  text-align: center;
  background: #fff;
  color: #7a7e83;
  width: 100%;

  ul {
    display: flex;
    align-items: center;
    li {
      margin-top: 5px;
      flex: 1;
      height: 43px;
     
      p {
        margin-top: 2px;
      }
      i {
        font-size: 20px;
      }
    }
    .active {
      color: #fe5100;
    }
  }
}
</style>
</style>