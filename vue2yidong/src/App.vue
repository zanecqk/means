<template>
  <div id="app">
     
    <router-view/>
    <FooterNav v-if="is_show"> </FooterNav>

  </div>
</template>

<script>
import axios from 'axios'
 import FooterNav from './components/FooterNav.vue'

export default {
 
  props:[],
  components: {
   FooterNav
  },
  data() {
    return {
      is_show:true
    };
  },
  
  methods: {},
 
  computed: {},
 
  watch: {},
 
  filters: {},
 
  beforeCreate() {},
 
  created() {
     if(this.$store.state.token) {
        axios({
          method:'get',
          url:'http://127.0.0.1:3000/userinfo',
          params:{
            token:this.$store.state.token
          }
        }).then((res)=>{
          console.log('res 每次刷新页面都校验token是否合法 ',res)
          if(res.data.code == '888') {
            this.$message('获取用户信息失败')
            localStorage.removeItem('_token')
            return 
          } 

          this.$store.commit('usermobile',res.data.info2.mobile)
          
        })
     }


  },
 
  beforeMount() {},
 
  mounted() {
     this.eventbus.$on('footnav',(flag)=>{
        this.is_show = flag
     })


      
  },
 
  beforeUpdate() {},
 
  updated() {},
 
  beforeDestroy() {},
 
  destroyed() {},
}
</script>




<style lang="scss">
 @import "./assets/scss/reset.scss";
</style>
