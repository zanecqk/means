<template>
  <div class="login">
      <el-container>
          <el-header>登录</el-header>
          <el-main>
              <el-form :rules='rules' :model='formData' ref="formData">
                  <el-form-item label='手机号' prop='mobile'>
                      <el-input
                        placeholder="请输入手机号"
                        v-model="formData.mobile"
                        maxlength='11'
                      ></el-input>
                  </el-form-item>
                   <el-form-item label='密码' prop='password'>
                      <el-input
                        placeholder="请输入手机号"
                        v-model="formData.password"
                        type='password'
                      ></el-input>
                  </el-form-item>
                   <el-form-item  >
                       <el-button @click="submitlogin" type='primary'>点击登录</el-button>
                  </el-form-item>
              </el-form>
          </el-main>
      </el-container>
 
  </div>
</template>

<script>
 import { userLogin } from "@/api/api";

export default {
 
  props:[],
  components: {
   
  },
  data() {
    return {
     formData:{
         mobile:'',
         password:''
     },
     rules:{
         mobile:[
             {
                 required:true,
                 message:'请输入手机号',
                 trigger:'blur'
             },
             {
                 pattern:/^1[3,5,7,8][0-9]{9}$/,
                 message:'手机号格式不正确',
                 trigger:'blur'
             }
         ],
         password:[
             {
                 required:true,
                 message:'请输入密码',
                 trigger:'blur'
             },
             {
                 pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/,
                 message:'字母+数字8位数以上',
                 trigger:'blur'
             }
         ],
     }
    };
  },
  
  methods: {
      submitlogin() {
          this.$refs.formData.validate(async (valid)=>{
               console.log('valid',valid)
               if(valid) {
                   console.log('前端数据输入正确 可以和服务器交互')
                   let ret = await userLogin(this.formData)
                   console.log('ret 登录请求结果',ret)
                   if(ret.data.code =='1000') {
                        console.log('登录成功了') 
                        this.$store.commit('usermobile',ret.data.mobile)
                         this.$store.commit('tokenadd',ret.data.data._token)
                         localStorage.setItem('_token',ret.data.data._token)
                         this.$message ({
                             message:'登录成功准备跳转',
                             type:'success'
                         })

                         setTimeout(()=>{
                             this.$router.push('/center')
                         },1000)
                   }else {
                         this.$message ({
                             message:'服务器校验不正确请重新登录',
                             type:'error'
                         })
                         return 
                   }
               }else {
                   console.log('校验失败 前端')
               }
          })
      }
  },
 
  computed: {},
 
  watch: {},
 
  filters: {},
 
  beforeCreate() {},
 
  created() {},
 
  beforeMount() {},
 
  mounted() {
        setTimeout(()=>{
           this.eventbus.$emit("footnav", false);
      },0)
  },
 
  beforeUpdate() {},
 
  updated() {},
 
  beforeDestroy() {},
 
  destroyed() {
        setTimeout(()=>{
           this.eventbus.$emit("footnav", true);
      },0)
  },
}
</script>


<style  lang='scss' scoped>
.login {
  padding-top: 80px;
  .el-container {
    width: 80%;
    margin-left: 40px;
    .el-header {
      font-size: 23px;
    }
  }
}
</style>