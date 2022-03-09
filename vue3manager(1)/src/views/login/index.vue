<template>
  <div class="login-container">
    <el-form 
    class="login-form" 
    :model='loginForm' 
    :rules='loginRules'
    ref="loginFromRef"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <el-icon><avatar /></el-icon>
        </span>
        <el-input 
        placeholder="username" 
        name="username" 
        type="text"
        v-model="loginForm.username"
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <el-icon><Key /></el-icon>
        </span>
        <el-input 
        placeholder="password" 
        name="password"
         v-model="loginForm.password"
         v-bind:type='passwordType'
        ></el-input>
        <span class="show-pwd" @click="onChnagePwdType">
          <el-icon>
            <View v-if="passwordType=='password'"/>
            <TurnOff v-if="passwordType=='text'"/>
          </el-icon>
        </span>
      </el-form-item>

      <el-button 
      :loading='loading'
      @click="handleLogin"
      type="primary" style="width: 100%; margin-bottom: 30px"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
// 导入 vue3 elementplus的图标
import { lollipop, Avatar, Key, View ,TurnOff} from "@element-plus/icons";
import { ref } from "vue";
import { useStore } from 'vuex'
import { useRouter} from 'vue-router'

// 登录逻辑  
 const loginForm = ref({
  username: "18612345678",
  password: "123456",
});
// button默认没有loading效果
const loading = ref(false) 
// vue3 使用ref  引用组件
const loginFromRef = ref(null)
// vue3中使用store必须线引用useStore 然后调用useStore才能拿到store的实例  
const store = useStore()  //等同于以前的this.$store
const router = useRouter()   // router 等于vue2 this.$router
// 点击登陆后的方法 
const handleLogin = ()=>{
  // this.$refs.loginFromref.valid
  loginFromRef.value.validate(valid=>{
      console.log('valid')
      console.log(valid)
      if(!valid) return 
      loading.value = true 

    //  调用vuex里面的axios 封装请求  
    store
    .dispatch('user/login',loginForm.value)
    .then((res)=>{
      loading.value = false 
      console.log('loginindex 调用数据回来了',res)
      router.push('/')
      setTimeout(()=>{
        location.reload('')
      },300)
    }).catch(err=>{
      console.log('登录失败')
      loading.value = false
    })


  })
 
}
// 登录逻辑







// 以下是form表单的数据代码块
// form表单的数据源
 
// 验证规则
const loginRules = ref({
  username: [
    { required: true, 
    trigger: "blur", 
    message: "用户名必须填写" }
    ],
  password:[
    {
      required:true,
      trigger: "blur",
      message:'密码必须填写'
    },
     {
       min:3,
       max:15,
       message:'密码长度必须3-15',
       trigger: "blur",
    }
  ]
});
// 以上是form表单的数据代码块





// 处理密码框眼睛切换密码状态 逻辑
const passwordType = ref('password')
const onChnagePwdType = ()=>{
  if(passwordType.value =='password') {
    passwordType.value = 'text'
  }else {
     passwordType.value = 'password'
  }
}
// 处理密码框眼睛切换密码状态 逻辑



</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>