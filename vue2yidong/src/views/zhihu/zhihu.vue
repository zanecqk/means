<template>
  <div>
    <div id="fix-menu-warp">
      <div id="menu-scroll-div" style="top: 0px">
        <div id="main-menu">主菜单</div>
        <div id="details-menu">详情菜单</div>
      </div>
    </div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
    <div>1111111111</div>
  </div>
</template>

<script>
export default {
  name: "helloworld",
  props: [],
  components: {},
  data() {
    return {};
  },
  //方法 函数写这里
  methods: {},
  //计算属性
  computed: {},
  //侦听器
  watch: {},
  //过滤器
  filters: {},
  //以下是生命周期
  //组件创建之前
  beforeCreate() {},
  //组件创建之后
  created() {
    
  },
  //页面渲染之前
  beforeMount() {},
  //页面渲染之后
  mounted() {
    var oldScrollTop =
      window.pageYOffset ||
      document.body.scrollTop ||
      document.documentElement.scrollTop;
    var menutimeout;

    window.onscroll = () => {
      var newScrollTop =
        window.pageYOffset ||
        document.body.scrollTop ||
        document.documentElement.scrollTop;
      if (newScrollTop === 0) {
        //如果已经在最上面了却还要滑动，就显示主菜单;
        document.getElementById("menu-scroll-div").style.top = "0px";
      } else if (newScrollTop < oldScrollTop) {
        console.log(newScrollTop, "new");
        console.log(oldScrollTop, "old");
        //如果在往上滑，切换到主菜单;
        //切换到主菜单（防抖）;
        if (menutimeout) {
          clearTimeout(menutimeout);
          menutimeout = setTimeout(() => {
            console.log("setTimeout");
            document.getElementById("menu-scroll-div").style.top = "0px";
            oldScrollTop = newScrollTop;
          }, 100);
        } else {
          menutimeout = setTimeout(() => {
            document.getElementById("menu-scroll-div").style.top = "0px";
            oldScrollTop = newScrollTop;
          }, 100);
        }
      } else if (newScrollTop > oldScrollTop) {
        console.log(newScrollTop, "new");
        console.log(oldScrollTop, "old");
        //如果在往下滑，切换到详情菜单;
        //切换到详情菜单（防抖）;
        if (menutimeout) {
          clearTimeout(menutimeout);
          menutimeout = setTimeout(() => {
            document.getElementById("menu-scroll-div").style.top = "-50px";
            oldScrollTop = newScrollTop;
          }, 100);
        } else {
          menutimeout = setTimeout(() => {
            document.getElementById("menu-scroll-div").style.top = "-50px";
            oldScrollTop = newScrollTop;
          }, 100);
        }
      } else {
        //没滑动就不干什么;
        oldScrollTop = newScrollTop;
      }
    };
  },
  //页面视图数据更新之前
  beforeUpdate() {},
  //页面视图数据更新之后
  updated() {},
  //页面销毁之前
  beforeDestroy() {},
  //页面销毁之后
  destroyed() {
      
  },
};
</script>


<style    scoped>
* {
  margin: 0;
  padding: 0;
}

#fix-menu-warp {
  position: fixed;
  width: 100%;
  height: 50px;
  z-index: 10000;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  overflow: hidden;
}

#menu-scroll-div {
  position: relative;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  transition: 0.5s all ease;
}

#main-menu {
  height: 50px;
  width: 100%;
  background-color: brown;
  text-align: center;
  display: block;
  transition: 0.5s all ease;
  line-height: 50px;
  position: relative;
  top: 0;
  margin: 0;
  padding: 0;
}

#details-menu {
  height: 50px;
  width: 100%;
  background-color: pink;
  text-align: center;
  transition: 0.5s all ease;
  display: block;
  line-height: 50px;
  margin: 0;
  padding: 0;
}
</style>