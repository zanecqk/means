<template>
  <div>
    <el-icon v-if="flag" @click="toggle"><copy-document /></el-icon>
    <el-icon v-if="!flag" @click="toggle"><full-screen /></el-icon>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import screenfull from "screenfull";
import {
  lollipop,
  Avatar,
  Key,
  View,
  TurnOff,
  FullScreen,
  CopyDocument,
} from "@element-plus/icons";

//  是否全屏 
const flag = ref(false)

const change = ()=>{
    console.log('监听到全屏的变化了')
    console.log('screenfull',screenfull)
    flag.value = !flag.value
}

const toggle = () =>[
    screenfull.toggle()
]


onMounted(()=>{
    console.log('全屏组件  onmounted执行了')
    screenfull.on('change',change)
})

</script>
