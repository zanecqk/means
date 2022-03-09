<template>
  <div    >
     <nav>
         <ul>
             <router-link to='/film/nowplaying' tag="li">
                <span>正在热映</span>
             </router-link>
               <router-link to='/film/comingsoon' tag="li">
                <span>即将上映</span>
             </router-link>
         </ul>
     </nav>
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
}
</script>

<style  lang='scss' scoped>
nav {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  ul {
    display: flex;
    text-align: center;
    li {
      flex: 1;
      display: flex;
      justify-content: center;
    }
  }
}

.router-link-exact-active span {
  display: block;
  width: 60%;
  color: #fe5100;
  border-bottom: 2px solid red;
}
</style>