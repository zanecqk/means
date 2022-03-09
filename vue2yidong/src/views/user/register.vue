<template>
  <div>
    <h1>电影的用户注册页面</h1>
    <div>mobile <input type="text" v-model="mobile" /></div>
    <span>{{ errormsg1 }}</span>
    <div>password <input type="text" v-model="password" /></div>
    <span>{{ errormsg2 }}</span>
    <button @click="handlerRegister">点击注册账号</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: [],
  components: {},
  data() {
    return {
      mobile: "",
      password: "",
      errormsg1: "",
      errormsg2: "",
      valid:false 
    };
  },

  methods: {
    handlerRegister() {
      console.log("handlerRegister");
    // 是否输入值判断 




      //   1 校验手机号是否正确
      var myreg1 = /^1[3,5,7,8][0-9]{9}$/;



      if (!myreg1.test(this.mobile)) {
        this.$message({
          message: "手机号不正确重新输入",
          type: "warning",
        });

        return;
      }

      //   校验密码规则
      //  这个正则的规则 数字+字母  8  以上或者更大
      var myreg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/;
      if (!myreg2.test(this.password)) {
        this.$message({
          message: "密码格式不对重新输入",
          type: "error",
        });

        return;
      }



   
      //   都通过 输入正确的情况
      axios
        .post("http://127.0.0.1:3000/zhuce", {
          mobile: this.mobile,
          password: this.password,
        })
        .then((res) => {
          console.log("res 注册结果", res);
          if (res.data.code == "200") {
            this.$message({
              message: "成功注册准备跳转",
              type: "success",
            });
            this.$router.push("/login");
          } else {
            this.$message({
              message: "注册失败用户名重复",
              type: "error",
            });
          }
        });
    },
  },

  computed: {},

  watch: {},

  filters: {},

  beforeCreate() {},

  created() {
        setTimeout(()=>{
           this.eventbus.$emit("footnav", false);
      },0)
  },

  beforeMount() {},

  mounted() {},

  beforeUpdate() {},

  updated() {},

  beforeDestroy() {},

  destroyed() {
         setTimeout(()=>{
           this.eventbus.$emit("footnav", true);
      },0)
  },
};
</script>


<style  lang='scss'>
</style>