<template>
  <div >
      <FilmList
        :list2='list'
        :type='type'
       
      ></FilmList>
   
  </div>
</template>

<script>
// :key="'film' + list.length"  VUEapi 作用二次唤醒生命周期 
// 这个API 会导致watch的冻结  
import {nowPlayingListData} from '@/api/api'
import FilmList from '@/components/FilmList'
export default {
 
  props:[],
  components: {
   FilmList
  },
  data() {
    return {
        list:[],
        page:1,
        type:1
    };
  },
  
  methods: {},
 
  computed: {},
 
  watch: {},
 
  filters: {},
 
  beforeCreate() {},
 
  created() {
      console.log('nowplaying created') 
           nowPlayingListData().then(res=>{
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