<template>
  <div class="list scroll" :style="{ height: height + 'px' }">
    <loading2 v-if="flag"></loading2>
    <!-- 数据出来之后要渲染电影列表页面 -->
    <div v-if="!flag">
      <div
        class="item"
        v-for="(item, index) in watchfilmlist"
        :key="index"
        @click="godetail(item.filmId)"
      >
        <div class="left">
          <!-- <img :src="item.poster" alt=""> -->
          <img v-lazy="item.poster" alt="" />
        </div>
        <div class="middle">
          <div>{{ item.name }}</div>
          <div v-if="type == 1">观众评分</div>
          <span class="grade">{{ item.grade ? item.grade : "暂无数据" }}</span>
          <div>主演:{{ item.actors | parseActors }}</div>
          <div>{{ item.nation }} | {{ item.runtime }}</div>
        </div>
        <div class="right">
          <span v-if="type == 1">购票</span>
          <span v-else>预购</span>
        </div>
      </div>
    </div>

    <!-- <ul v-if="!flag">
      <li v-for="(item, index) in watchfilmlist" :key="index">
        {{ item.name }}
      </li>
    </ul>   -->
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { nowPlayingListData, comingSoonListData } from "@/api/api";
// gif图loading效果
import loading1 from "./loading1.vue";
// 纯CSS样式的loading 效果
import loading2 from "./loading2.vue";
export default {
  props: ["list2", "type"],
  components: {
    loading1,
    loading2,
  },
  data() {
    return {
      watchfilmlist: [],
      // 控制loading
      flag: true,
      loading: true,
      height: 0,
      bs: null,
      pageNum: 1,
      // 控制节流
      cd: true,
    };
  },

  methods: {
    //   去详情页
    godetail(filmid) {
      this.$router.push("/filmdetail/" + filmid);
    },
    // 获取数据的方法
    // 1 页面无限回弹  new操作符理解错误 
    // 2  ret.data.data.films.length < 10  万一是三个数据的时候 最后三个数据回不来
    // 3 节流的细节问题
    getData: async function () {
      if (this.cd) {
        this.pageNum++;
        // 获取数据
        if (this.type == 1) {
          // 正在热映
          var ret = await nowPlayingListData(this.pageNum);
          console.log("新的电影数据", ret.data.data.films);
        } else {
          // 即将上映
          var ret = await comingSoonListData(this.pageNum);
        }
        // 如果当前请求到的数据数量少于10，则说明后面已经没有数据可以被请求，此时需要将标志设置成false
        if (ret.data.data.films.length < 10) {
          this.cd = false;
        }
        // 将数据处理好新增到列表中去
        this.watchfilmlist = this.watchfilmlist.concat(ret.data.data.films);
      }
    },
    // 正确的请求数据版本
    async getData2() {
      console.log("进来getdata2函数里面了 cd 手抖" );
      if (this.cd) {
        this.cd = false;
        this.pageNum++;
        if (this.type == 1) {
          var ret = await nowPlayingListData(this.pageNum);
            console.log(ret.data.data.films)
        } else {
          // 即将上映
          var ret = await comingSoonListData(this.pageNum);
        
        }
        if (ret.data.data.films.length < 1) {
          this.cd = false;
        } else {
          // 将数据处理好新增到列表中去
          this.watchfilmlist = this.watchfilmlist.concat(ret.data.data.films);
          this.cd = true;
        }
      }
    },
  },

  computed: {
    computedisfalg() {
      return this.list2[0];
    },
  },

  watch: {
    list2(newval) {
      console.log("newval", newval);
      console.log("监听到list2的值过来了");
      this.flag = false;
      this.watchfilmlist = this.list2;
      console.log("this.watchfilmlist", this.watchfilmlist);
    },
  },

  filters: {
    parseActors: function (value) {
      let actors = "";
      if (value) {
        value.forEach((element) => {
          actors += element.name + " ";
        });
      } else {
        actors = "主演缺失了";
      }
      return actors;
    },
  },

  beforeCreate() {},

  created() {
    console.log("filmlist created ");
    if (this.list2.length > 0) {
      this.loading = false;
    }
  },

  beforeMount() {},

  mounted() {
    console.log("filmlist  mounted ");
    // 获取可是高度
    this.height = document.documentElement.clientHeight - 100;
    this.bs = new BScroll(".scroll", {
      pullUpLoad: true,
      // 激活下滑的事件监听
      pullDownRefresh: true,
      // 默认情况下使用bs后，它会禁止浏览器的点击事件
      click: true,
      //mouseWhell支持鼠标事件监听
      mouseWheel: true,
      //是否禁用 触摸事件
      disableTouch: false,
      //不禁用鼠标操作
      disableMouse: false,
    });

    this.bs.on("pullingUp", () => {
      // 获取数据
      this.getData2();
      this.bs.finishPullUp();
    });
  },

  beforeUpdate() {},

  updated() {
    console.log(" film list  updated ");
    // 错误的写法 会不断重新实例化  重获新生  页面回弹
    // this.bs = new BScroll(".scroll", {
    //   pullUpLoad: true,
    //   // 激活下滑的事件监听
    //   pullDownRefresh: true,
    //   // 默认情况下使用bs后，它会禁止浏览器的点击事件
    //   click: true,
    // });
    // this.bs.on("pullingUp", () => {
    //   // 获取数据
    //   this.getData();
    //   this.bs.finishPullUp();
    // });

    // 正确的写法
    if (!this.bs) {
      this.bs = new BScroll(".scroll", {
        pullUpLoad: true,
        // 激活下滑的事件监听
        pullDownRefresh: true,
        // 默认情况下使用bs后，它会禁止浏览器的点击事件
        click: true,
        //mouseWhell支持鼠标事件监听
        mouseWheel: true,
        //是否禁用 触摸事件
        disableTouch: false,
        //不禁用鼠标操作
        disableMouse: false,
      });
    } else {
      // 当前的实例 正常执行 不再重新实例化
      this.bs.refresh();
    }

    this.bs.on("pullingUp", () => {
      // 获取数据
      this.getData2();
      this.bs.finishPullUp();
    });
  },

  beforeDestroy() {},

  destroyed() {},
};
</script>


<style  lang='scss' scoped>
.scroll {
  height: 100%;
  overflow: hidden;
}
.item {
  margin-top: 15px;
  padding-bottom: 35px;
  display: flex;
  color: #797d82;
  font-size: 13px;
  border-bottom: 1px solid #ededed;

  .left {
    width: 77px;
    height: 100px;
    margin-left: 20px;
    img {
      width: 66px;
      height: 100%;
    }
  }

  .middle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;

    div:nth-of-type(1) {
      color: #191a1b;
      font-size: 16px;
    }

    div:nth-of-type(3) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .right {
    width: 15%;
    display: flex;
    align-items: center;
    margin-right: 20px;

    span {
      border: 1px solid #ff5f16;
      background: white;
      color: #ff5f16;
      border-radius: 2px;
      height: 25px;
      line-height: 25px;
      font-size: 13px;
      width: 50px;
      text-align: center;
    }
  }
}

.pingfen {
  color: red;
}
.comfilmlistdivall {
  margin-bottom: 80px;
}
</style>