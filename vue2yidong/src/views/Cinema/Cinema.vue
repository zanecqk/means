<template>
  <div>
    <citycinemaSearch> </citycinemaSearch>
    <ul class="cinemalist">
      <li v-for="(item, index) in this.$store.state.globalCinemaList" :key="index">
        <div class="info">
          <p class="cinemaname">
            {{ item.name }}
          </p>
          <p class="address">
            {{ item.address }}
          </p>
        </div>
        <div class="price">{{ item.lowPrice  | price}} 起</div>
        <div>
          {{ item.Distance  | distance}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import citycinemaSearch from "@/components/CityCinemaSearch";
import { cinemaListData } from "@/api/api";
export default {
  props: [],
  components: {
    citycinemaSearch,
  },
  data() {
    return {
      cinemalist: [],
    };
  },

  methods: {},

  computed: {},

  watch: {},

  filters: {
      price(value) {
          return parseFloat(value/100)
      },
      distance(value) {
          return value.toFixed(1) +'km'
      }
  },

  beforeCreate() {
      
  },

  created() {
    // cinemaListData(this.$store.state.cityid).then((res) => {
    //   console.log("res 城市电影院列表", res);
    //   this.cinemalist = res.data.data.cinemas;
    // });

    this.$store.dispatch('getNewCinemaList',this.$store.state.cityid)
  },

  beforeMount() {},

  mounted() {},

  beforeUpdate() {},

  updated() {},

  beforeDestroy() {},

  destroyed() {},
};
</script>


<style  lang='scss' scoped>
.cinemalist {
  margin-top: 24px;
  li {
    position: relative;
    background-color: #fff;
    padding: 15px;
  }
  .info {
    width: calc(100% - 65px);
    text-align: left;
    padding-right: 15px;
    p {
      display: block;
      max-width: 80%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .cinemaname {
      color: #191a1b;
      font-size: 15px;
    }
    .address {
      color: #797d82;
      font-size: 12px;
      margin-top: 5px;
    }
  }
  .price {
    font-size: 15px;
    color: #ff5f16;
    float: right;
    margin-top: -40px;
    .rmb {
      margin-right: 5px;
    }
    .upon {
      font-size: 10px;
    }
    .postiton {
      font-weight: 400;
      display: block;
      margin-top: 5px;
      font-size: 11px;
      color: #797d82;
      text-align: center;
    }
  }
}
</style>