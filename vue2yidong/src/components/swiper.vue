<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
       <!-- 插槽 外面遍历数据动态插入 -->
       <slot></slot>
    </div>
  </div>
</template>

<script>
// 引入swiper的JS
import Swiper from 'swiper'
// 引入swiper css 
import 'swiper/swiper-bundle.min.css' 
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

  mounted() {
      
      this.$nextTick(()=>{
          var swiper = new Swiper('.swiper-container',{
              slidesPerView: 4,
                
          })
      })
  },

  beforeUpdate() {},

  updated() {},

  beforeDestroy() {},

  destroyed() {},
};
</script>


<style  lang='scss'>
</style>