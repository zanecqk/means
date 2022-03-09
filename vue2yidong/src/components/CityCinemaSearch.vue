<template>
  <div class="wrap">
      <div class="text1" @click="gocity">
          {{this.$store.state.city}}
      </div>
      <div class="film">
          电影
      </div>
      <div>
          <i class="iconfont icon-search1"></i>
      </div>
  </div>
</template>

<script>
 

export default {
 
  props:[],
  components: {
   
  },
  data() {
    return {
     
    };
  },
  
  methods: {
      gocity(){
          this.$router.push('/city')
      }
  },
 
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
}
</script>


<style  lang='scss' scoped>
.wrap {
    position: fixed;
    z-index: 1000;
    margin-bottom: 30px;
    background-color: white;
    width: 100%;
    top: 0;
  display: flex;
  flex-direction: row ;
  align-items: center;
  justify-content: space-between;
}
.film {
  color: orange;
}

.icon-search1 {
  font-size: 22px;
  margin-right: 10px;
}

.text1 {
  font-size: 16px;
}
</style>