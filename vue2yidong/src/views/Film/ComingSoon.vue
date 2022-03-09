<template>
  <div >
      <FilmList   :list2='list'>  </FilmList>
  </div>
</template>

<script>
 import FilmList from '@/components/FilmList'
import {comingSoonListData} from '@/api/api'
export default {
 
  props:[],
  components: {
   FilmList
  },
  data() {
    return {
        list:[]
    };
  },
  
  methods: {},
 
  computed: {},
 
  watch: {},
 
  filters: {},
 
  beforeCreate() {},
 
  created() {
      console.log('commingsoon vue created') 
      comingSoonListData().then((res)=>{
          this.list = res.data.data.films
      })
  },
 
  beforeMount() {},
 
  mounted() {},
 
  beforeUpdate() {},
 
  updated() {},
 
  beforeDestroy() {},
 
  destroyed() {},
}
</script>


<style  lang='scss'>

</style>