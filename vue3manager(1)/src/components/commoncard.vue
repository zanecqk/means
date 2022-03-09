<template>
  <div class="common-card">
      <div class="title">{{title}}</div>
      <div class="value">￥{{value}}</div>
      <div class="chart">
          <slot> </slot>
      </div>
      <div class="line"></div>
      <div class="total">
            <slot name="footer"> </slot>
      </div>
  </div>
</template>

<script setup>
//  vue3 如何进行 父子组件传值 
import {defineProps,defineEmits,ref} from 'vue'
// 生成emits的实例  和vue2中的 this.$emit 
const emits = defineEmits(['rocket'])
defineProps({
    title:String,
    value:String
})



const fn1 = ()=>{
    // this.$emits
    emits('rocket',{a:1})
}
</script>



<style lang='scss' scoped>
    .title {
        font-size: 12px;
        color: #999;
    }

    .value {
        font-size: 25px;
        color: #000;
        margin-top: 5px;
        letter-spacing: 1px;
    }

    .chart {
        height: 50px; 
        // background-color: red;
    }

    .line {
        margin: 10px 0;
        border-top:1px solid #ccc;
    }


    .total {
        font-size: 12px;
        color: #666;
    }
</style>