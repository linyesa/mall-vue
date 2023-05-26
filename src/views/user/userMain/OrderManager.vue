<template>
  <div>
    <div style="background-color: #fff;margin-top: 40px;margin-left: 15px;width: 977px;">
      <div>
        <el-row style="padding-top: 50px;padding-left: 40px">
          <h1 class="title">我的订单
            <small>请谨防钓鱼链接或诈骗电话，
              <a href="www.baidu.com" target="_blank">了解更多&gt;</a>
            </small>
          </h1>
        </el-row>
        <el-row style="padding-top: 50px;padding-left: 20px;margin-bottom: 10px">
          <el-col :span="3" style="border-right: 1px solid #e0e0e0;text-align: center"><el-button @click="getOrderList(orderStatus=0,userId)">待支付</el-button></el-col>
          <el-col :span="3" style="border-right: 1px solid #e0e0e0;text-align: center"><el-button @click="getOrderList(orderStatus=1,userId)">已支付</el-button></el-col>
          <el-col :span="3" style="border-right: 1px solid #e0e0e0;text-align: center"><el-button @click="getOrderList(orderStatus=2,userId)">配货完成</el-button></el-col>
          <el-col :span="6" :offset="9">
<!--            <el-input>saf</el-input>-->
            <div class="input_box">
              <el-input
                  v-model="query"
                  placeholder="输入订单号查询">
                <template #append>
                  <el-button @click="searchOrder(query)">
                  <i class="el-icon-search"></i>
                  </el-button>
                </template>
              </el-input>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin-left: 40px;border:1px solid orange;margin-bottom: 40px" v-for="order in list" :key="order.orderNo">
         <el-row>
           <el-row style="margin-left: 30px">等待付款</el-row>
          <el-row>
            <el-col :span="5" style="border-right: 1px solid #e0e0e0;text-align: center;font-size: 14px">{{order.createTime}}</el-col>
            <el-col :span="3" style="border-right: 1px solid #e0e0e0;text-align: center;font-size: 14px">{{order.userName}}</el-col>
            <el-col :span="5" style="border-right: 1px solid #e0e0e0;text-align: center;font-size: 14px">订单号：{{ order.orderNo }}</el-col>
            <el-col :span="3" style="border-right: 1px solid #e0e0e0;text-align: center;font-size: 14px">在线支付</el-col>
            <el-col :span="3" style="text-align: right;font-size: 14px">应付金额:</el-col>
            <el-col :span="3" style="text-align: left;font-size: 14px"><span class="num">{{order.totalPrice}}</span>元</el-col>
          </el-row>
           <el-row>
             <el-row>
               <el-col :span="12">
             <el-col><img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1670745532.86084186.png?thumb=1&w=30&h=30">
               <span >Xiaomi 13 12GB+256GB 黑色</span>
             </el-col>
               <el-col>价格{{order.totalPrice}}X1</el-col>
               </el-col>
               <el-col :span="12">
                 <el-row type="flex" justify="end">
                   <el-button style="background: #ff6700;color: #fff;width: 120px;height: 30px;margin-right: 35px" v-show="order.payStatus!=1" @click="orderPay(order.extraInfo,order.orderNo,order.totalPrice)">立即付款</el-button>
                 </el-row>
                 <el-row type="flex" justify="end">
                   <el-button style="margin-top:10px;width: 120px;height: 30px;margin-right: 35px">订单详情</el-button>
                 </el-row>
                 <el-row type="flex" justify="end">
                   <el-button style="margin-top:10px;width: 120px;height: 30px;margin-right: 35px">联系客服</el-button>
                 </el-row>
               </el-col>
             </el-row>
           </el-row>
        </el-row>
        </el-row>
      </div>
  </div>
  </div>
</template>

<script>
import userIndex from "@/api/user/userIndex";
import mallOrder from "@/api/mallOrder/mallOrder";
export default {
  name: "GoodsManager",
  data(){
    return {
      userInfo:{
      },
      userId:'',
      query:'',
      priceSum:5999,
      list:[],
      orderStatus:'0'
    }
  },
  methods:{
    getOrderList(status,userId){
      mallOrder.getOrderByStatus(userId,status)
          .then(response=>{
            this.list=response.data.list
          })
    },
    searchOrder(orderNo){
      mallOrder.getOrderByOrderNo(orderNo)
          .then(response=>{
            var orderList=response.data.list;
            // eslint-disable-next-line no-empty
            if (orderList==undefined||orderList==null||orderList.length<=0){
              this.$message({
                message: '未找到对应订单',
                type: 'danger'
              });
            }else {
              this.list=orderList
            }
          })
    },
    orderPay(suject,traceNo,totalAmount){
      console.log(suject,traceNo,totalAmount)
      // window.open("http://localhost:6001/alipay/pay?"+"subject="+suject+"&traceNo="+traceNo+"&totalAmount="+totalAmount)
      // window.open("http://182.92.86.247:6001/alipay/pay?"+"subject="+suject+"&traceNo="+traceNo+"&totalAmount="+totalAmount)
      window.location.href="http://localhost:6001/alipay/pay?"+"subject="+suject+"&traceNo="+traceNo+"&totalAmount="+totalAmount;
    }
  },
  created() {
    this.userInfo=JSON.parse(localStorage.getItem('userInfo'))
    userIndex.getUserIdByMobile(this.userInfo.mobile)
        .then(response=>{
          this.userId=response.data.userId;
        })
    setTimeout(() => {
      this.getOrderList(this.orderStatus,this.userId)
    }, 1000)
  },
  mounted() {


  }
}
</script>

<style scoped>
.title{
  margin: 0;
  font-size: 30px;
  font-weight: 400;
  line-height: 68px;
  color: #757575;
}
small{
  margin-left: 10px;
  font-size: 12px;
  line-height: 1.5;
}
.num {
  height: 18px;
  margin-right: 5px;
  font-size: 28px;
  font-weight: 200;
  line-height: 1;
  color: #333;
}
</style>