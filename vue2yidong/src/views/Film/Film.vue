<template>
  <div >
       <FilmListTopNav> </FilmListTopNav>
      <router-view></router-view>
  </div>
</template>

<script>
// @ = src 
 import FilmListTopNav from '@/components/FilmListTopNav'

export default {
 
  props:[],
  components: {
   FilmListTopNav
  },
  data() {
    return {
        fixed:false
    };
  },
  
  methods: {},
 
  computed: {},
 
  watch: {},
 
  filters: {},
 
  beforeCreate() {},
 
  created() {},
 
  beforeMount() {},
 
  mounted() {
      window.addEventListener('scroll',(e)=>{
          let top = document.documentElement.scrollTop
          if(top>130) {
              this.fixed = true 
          }else {
              this.fixed = false
          }
      },true)
  },
 
  beforeUpdate() {},
 
  updated() {},
 
  beforeDestroy() {},
 
  destroyed() {},
}
</script>


<style  lang='scss' scoped>
 
</style>