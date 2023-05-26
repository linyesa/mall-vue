<template>
  <div>
    <div style="background-color: #fff;margin-top: 40px;margin-left: 15px;width: 977px;">
      <el-row>
        <el-col :span="12">
          <div id="myChart" :style="{ width: '800px', height: '500px',marginTop: '50px' }"></div>
        </el-col>
        <el-col :span="12" >
          <div id="myChart1" :style="{ width: '800px', height: '500px' ,marginTop:'200px'}"></div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import mallOrder from "@/api/mallOrder/mallOrder";
export default {
  name: "AdminChart",
  data(){
    return{
      chartList:[]
    }},
  methods:{
    test() {
      console.log(this.chartList[0].sum)
    },
    drawChart(){
      // // eslint-disable-next-line no-unused-vars
      // const _this=this
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: '订单支付状态统计',
          subtext: '饼图',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '单位：个',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 123, name: '未支付' },
              { value: 3234, name: '支付成功' },
              { value: 580, name: '支付失败' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },true)
    }
  },
  created() {
    mallOrder.getOrderChartsData(1)
        .then(response=>{
          this.chartList=response.data.list
          console.log(this.chartList)
          console.log(this.chartList[0].sum)
        })
  },
  mounted() {
    this.drawChart()

  }
}
</script>

<style scoped>

</style>