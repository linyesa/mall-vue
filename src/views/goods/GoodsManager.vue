<template>
<div>
  <div style="background-color: #fff;margin-top: 40px;margin-left: 15px;width: 977px;">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="在卖商品" name="1">
        <el-row>
          <el-col :span="6"><img src="../../../static/images/banner02.jpg" style="width: 150px;height: 150px;margin-left: 10%"></el-col>
          <el-col :span="6">
            <el-row><h1>商品标题</h1></el-row>
            <el-row>
              <el-col :span="3"><p style="text-align: center;color: #808080;margin-top: 20px">现价:</p></el-col>
              <el-col :span="3"><p style="color:#ff483c;font-size: 18px;margin-bottom: 10px">1499</p></el-col></el-row>
            <el-row><div>浏览量:{{views}}</div></el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16"><el-button>更多</el-button></el-col>
          <el-col :span="4"><el-button>降价</el-button></el-col>
          <el-col :span="4"><el-button>编辑</el-button></el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item title="已下架" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
    </el-collapse>
  </div>

</div>
</template>

<script>
export default {
  name: "GoodsManager",
  data(){
  return {
      activeNames: ['1'],
    views:100
    }
  },
  methods:{
    handleChange(val) {
      console.log(val);
    }
  }
}
</script>

<style scoped>

</style>