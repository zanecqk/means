<template>
  <div class="detail">
    <div class="img">
      <img :src="filmdetail.poster" alt="" />
    </div>
    <div>
      <div>{{ filmdetail.name }}</div>
      <div>剧情 | 喜剧</div>
      <div>上映时间 {{ filmdetail.premiereAt | timeright }}</div>
      <div>中国大陆 | 0分钟</div>
      <div>
        {{ filmdetail.synopsis }}
      </div>
    </div>

  <!-- 这里写swiper  -->
     <div class="swiper">
        <swiper :key="'actors' + actors.length"> 
             <div 
             class="swiper-slide" 
             v-for="(item,index) in actors" 
             :key="index">
                <div>
                   <img v-lazy="item.avatarAddress" alt="">
                </div>
             </div>
        </swiper>
     </div>


    <div class="ticket">购票</div>
     <div @click="back" class="back">
         <i class="iconfont icon-fanhui1"></i>
    </div>
  </div>
</template>

<script>
import swiper from '@/components/swiper'
import { movieDetailData } from "@/api/api";
import moment from "moment";
export default {
  props: [],
  components: {swiper},
  data() {
    return {
      filmdetail: {},
      actors:[]
    };
  },

  methods: {
     back(){
          console.log('进入back里面了')
          this.$router.go(-1)
      }
  },

  computed: {},

  watch: {},

  filters: {
    timeright: function (value) {
      console.log("时间戳过滤");
      //  Y year  M month  D  day
      return moment(value * 1000).format("YYYY-MM-DD");
    },
  },

  beforeCreate() {},

  created() {
    console.log("detail created");
    console.log(this.$route);
    movieDetailData(this.$route.params.filmid).then((res) => {
      console.log("电影详情数据res", res);
      this.filmdetail = res.data.data.film;
      this.actors = res.data.data.film.actors
    });
  },

  beforeMount() {},

  mounted() {
    // 发射一个事件  事件名  footnav  带的参数 false
    this.eventbus.$emit("footnav", false);
  },

  beforeUpdate() {},

  updated() {},

  beforeDestroy() {},

  destroyed() {
    // 发射一个事件  事件名  footnav  带的参数 false
    this.eventbus.$emit("footnav", true);
  },
};
</script>


<style  lang='scss' scoped>
.detail {
  .swiper-slide {
    img {
      width: 80px;
    }
  }
  .img {
    width: 100%;
    height: 260px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.ticket {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: orangered;
  color: whitesmoke;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
}

.back {
  position: fixed;
  top: 0;
  left: 0;
}
.icon-fanhui1 {
  color: orangered;
}
</style>