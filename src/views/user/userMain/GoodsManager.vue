<template>
<div>
  <div style="background-color: #fff;margin-top: 40px;margin-left: 15px;width: 977px;">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="在卖商品" name="1">
        <el-row v-for="item in goodsOnInfo" :key="item.goodsId">
          <el-col :span="6"><img :src=item.goodsCoverImg style="width: 150px;height: 150px;margin-left: 10%"></el-col>
          <el-col :span="6">
            <el-row><h1>{{ item.goodsName }}</h1></el-row>
            <el-row>
              <el-col :span="3"><p style="text-align: center;color: #808080;margin-top: 20px">现价:</p></el-col>
              <el-col :span="3"><p style="color:#ff483c;font-size: 18px;margin-bottom: 10px">{{item.sellingPrice}}</p></el-col></el-row>
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
        <el-row v-for="item in goodsDownInfo" :key="item.goodsId">
          <el-col :span="6"><img :src=item.goodsCoverImg style="width: 150px;height: 150px;margin-left: 10%"></el-col>
          <el-col :span="6">
            <el-row><h1>{{ item.goodsName }}</h1></el-row>
            <el-row>
              <el-col :span="3"><p style="text-align: center;color: #808080;margin-top: 20px">现价:</p></el-col>
              <el-col :span="3"><p style="color:#ff483c;font-size: 18px;margin-bottom: 10px">{{item.sellingPrice}}</p></el-col></el-row>
            <el-row><div>浏览量:{{views}}</div></el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16"><el-button>更多</el-button></el-col>
          <el-col :span="4"><el-button>降价</el-button></el-col>
          <el-col :span="4"><el-button>编辑</el-button></el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>

</div>
</template>

<script>
import userIndex from "@/api/user/userIndex";
import goodsIndex from "@/api/goods/goodsIndex";
export default {
  name: "GoodsManager",
  data(){
  return {
    goodsOnInfo:{

    },
    goodsDownInfo:{

    },
    userInfo:{
    },
    userId:'',
    activeNames: [],
    views:100
    }
  },
  methods:{
    handleChange(val) {
      console.log(val);
      goodsIndex.getGoodsInfoByUserId(this.userId,1)
          .then(response=>{
            this.goodsOnInfo=response.data.goodsList
          })
      goodsIndex.getGoodsInfoByUserId(this.userId,0)
          .then(response=>{
            this.goodsDownInfo=response.data.goodsList
          })
    }
  },
  created() {
    this.userInfo=JSON.parse(localStorage.getItem('userInfo'))
    userIndex.getUserIdByMobile(this.userInfo.mobile)
        .then(response=>{
        this.userId=response.data.userId;})
  }
}
</script>

<style scoped>

</style>