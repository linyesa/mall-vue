<template>
<div style="padding-left: 25%;padding-right: 25%;background-color: #f5f5f5">
<div style="background-color: #fff">
  <span>收获地址</span>
  <el-row>
    <el-col class="address" :span="8">
      <div>
        <el-col>收货人姓名</el-col>
        <el-col>电话1778305273</el-col>
        <el-col>河南洛阳市瀍河回族区瀍西街道a啊打发撒旦发射点</el-col>
        <el-col><el-button>修改</el-button><el-button>选择</el-button></el-col>
      </div>
    </el-col>
  </el-row>
  <span>商品</span>
  <el-row style="border-bottom: 1px solid #e0e0e0;margin-bottom: 2%;">
    <el-col :span="12"><img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1670745532.86084186.png?thumb=1&w=30&h=30">
      <span >Xiaomi 13 12GB+256GB 黑色</span></el-col>
    <el-col :span="6">价格500X1</el-col>
    <el-col :span="6" style="color: #ff6701">500</el-col>
  </el-row>
  <el-row style="margin-bottom: 3%;">
    <el-col :span="5" style="font-size: 18px">
      配送方式
    </el-col>
    <el-col :span="19">
      <div style="color: #ff6700;">
        包邮
      </div>
    </el-col>
  </el-row>
  <el-row style="border-top: 1px solid #e0e0e0;">
    <el-col>
      <div>
        商品件数：<span style="color: #ff6701">1件</span>
      </div>
    </el-col>
    <el-col>
      <div>
        商品总额：<span style="color: #ff6701">500元</span>
      </div>
    </el-col>
    <el-col>
      <div>
        商品运费：<span style="color: #ff6701">0元</span>
      </div>
    </el-col>
    <el-col>
      <div>
        应付总额：<span style="color: #ff6701">500元</span>
      </div>
    </el-col>
    <el-col>
      <div>
        <el-button style="background: #ff6700;color: #fff;width: 160px;height: 40px" @click="createOrder">立即下单</el-button>
      </div>
    </el-col>
  </el-row>
</div>
</div>
</template>

<script>
import userIndex from "@/api/user/userIndex";
import mallOrder from "@/api/mallOrder/mallOrder";
export default {
  name: "GoodsConfirmOrder",
  data(){
    return{
    orderVO:{
      addressId:'1',
      goodsId:this.$route.params.goodsId,
      userId:''
    },
      userInfo:{

      }
    }
  },
  methods:{
    setAddress(){
    },
    createOrder(){
      mallOrder.createOrder(this.orderVO)
          .then(response=>{
            if (response.data.code===0){
              this.$message({
                message: response.data.msg,
                type: 'success'
              });
              this.$router.replace({path:"/home"})
            }else{
              this.$message.error(response.data.msg);
            }
          })
    }
  },
  created() {
    console.log(this.orderVO)
    this.userInfo=JSON.parse(localStorage.getItem('userInfo'))
    userIndex.getUserIdByMobile(this.userInfo.mobile)
        .then(response=>{
          this.orderVO.userId=response.data.userId;
        })
  }

}
</script>

<style scoped>
.address{
  border: 1px solid #ff6700;margin-right: 3%
}

</style>