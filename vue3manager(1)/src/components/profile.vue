<template>
  <div class="tag-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: 0 }">
          <commoncard title="累计销售业绩" value="12,033,777">
            <div class="compare">
              <span class="day">日同比</span>
              <span class="money">50%</span>
            </div>
            <div class="compare">
              <span class="month">月同比</span>
              <span class="money">30%</span>
            </div>

            <template #footer>
              <span>昨日销售额</span>
              <span class="money">￥30，000，000</span>
            </template>
          </commoncard>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: 0 }">
          <commoncard title="累计订单数量" value="29,188">
            <div
              :style="{ width: '100%', height: '100%' }"
              id="totalorder"
            ></div>

            <template #footer>
              <span>昨日订单量</span>
              <span class="money">￥78，130，000</span>
            </template>
          </commoncard>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: 0 }">
          <commoncard title="近期用户退货率" value="15,654,233">
            <div
              :style="{ width: '100%', height: '100%' }"
              id="useralltotal"
            ></div>

            <template #footer>
              <span>近期用户退货率</span>
              <span class="money">￥68，430，000 </span>
            </template>
          </commoncard>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: 0 }">
          <commoncard title="季度销售增长" value="95,654,233">
            <div
              :style="{ width: '100%', height: '100%' }"
              id="userincrease"
            ></div>

            <template #footer>
              <span>季度销售增长</span>
              <span class="money">￥95,654,233 </span>
            </template>
          </commoncard>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import commoncard from "./commoncard.vue";
import echarts from "echarts";
import { ref, onMounted } from "vue";

onMounted(() => {
  const chartsDom = document.getElementById("totalorder");
  const chart = echarts.init(chartsDom);

  chart.setOption({
    xAxis: {
      type: "category",
      show: false,
    },
    yAxis: {
      show: false,
    },
    // echarts布局调整
    grid: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    series: [
      {
        type: "line",
        data: [320, 432.22, 534, 555, 420, 320, 368, 444, 123, 333, 456, 654],
        areaStyle: {
          color: "purple",
        },
        lineStyle: {
          width: 0,
        },
        itemStyle: { opacity: 0 },
        smooth: true,
      },
    ],
  });

  const chartDom1 = document.getElementById("useralltotal");
  const chart1 = echarts.init(chartDom1);
  chart1.setOption({
    xAxis: {
      type: "category",
      show: false,
    },
    yAxis: {
      show: false,
    },
    grid: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },

    // 系列配置 series
    series: [
      {
        type: "bar",
        smooth: true,
        data: [320, 432.22, 534, 555, 420, 320, 368, 444, 123, 333, 456, 654],
      },
    ],
  });


  const chartDom2 = document.getElementById('userincrease')
  const chart2 = echarts.init(chartDom2,'light')

   chart2.setOption({
       xAxis:{
           data:['一季度','二季度','三季度','四季度']
       },
       yAxis:{
           show:false
       },
    //    系列配置
    series:[
        {
            type:'bar',
            data:[100,130,90,150]
            
        },
        {
            type:'line',
             data:[100,130,90,150],
             smooth:true 
        }
    ]
   })
});
</script>
