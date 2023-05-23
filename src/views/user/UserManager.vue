<template>
  <div>
    <el-container>
    <el-aside width="575px">
      <div style="background-color: #ffffff;margin-left:338px;margin-top: 40px;margin-bottom: 40px;width: 234px;height: 916px">
        <el-row style="margin-left: 50px">
          <el-row style="width: 138px;height: 52px;color: #333">
            <h3 style="font-size: 16px">订单中心</h3>
          </el-row>
          <el-row style="margin-top: 10px;width: 138px;height: 33px;font-size: 14px;color: #757575">
            <el-button class="left-navigation" type="text" @click="navigatetomain('ordermanager')">我的订单</el-button>
          </el-row>
          <el-row style="margin-top: 10px;width: 138px;height: 33px;font-size: 14px;color: #757575">
            <el-button class="left-navigation" @click="myorder" type="text">我的评价</el-button>
          </el-row>
          <el-row style="margin-top: 10px;width: 138px;height: 33px;font-size: 14px;color: #757575">
            <el-button class="left-navigation" type="text" @click="myorder">以旧换新 </el-button>
          </el-row>
          <el-row style="margin-top: 10px;width: 138px;height: 33px;font-size: 14px;color: #757575">
            <el-button class="left-navigation" type="text" @click="myorder">测试士大夫安抚</el-button>
          </el-row>
        </el-row>
        <el-row style="margin-left: 50px">
          <el-row style="width: 138px;height: 52px;color: #333">
            <h3 style="font-size: 16px">个人中心</h3>
          </el-row>
          <el-row style="margin-top: 10px;width: 138px;height: 33px;font-size: 14px;color: #757575">
            <el-button class="left-navigation" @click="navigatetomain('usermain')" type="text">我的个人中心</el-button>
          </el-row>
          <el-row style="margin-top: 10px;width: 138px;height: 33px;font-size: 14px;color: #757575">
            消息通知
          </el-row>
        </el-row>
        <el-row style="margin-left: 50px">
          <el-row style="width: 138px;height: 52px;color: #333">
            <h3 style="font-size: 16px">我的交易</h3>
          </el-row>
          <el-row style="margin-top: 10px;width: 138px;height: 33px;font-size: 14px;color: #757575">
            <el-button class="left-navigation" @click="navigatetomain('goodsmanager')" type="text">我发布的</el-button>
          </el-row>
          <el-row style="margin-top: 10px;width: 138px;height: 33px;font-size: 14px;color: #757575">
            <el-button class="left-navigation" @click="navigatetomain('goodsmanager')" type="text">我卖出的</el-button>
          </el-row>
          <el-row style="margin-top: 10px;width: 138px;height: 33px;font-size: 14px;color: #757575">
            <el-button class="left-navigation" @click="navigatetomain('goodsmanager')" type="text">我买到的</el-button>
          </el-row>
        </el-row>
        <el-row style="margin-left: 50px">
          <el-row style="width: 138px;height: 52px;color: #333">
            <h3 style="font-size: 16px">我的统计</h3>
          </el-row>
          <el-row style="margin-top: 10px;width: 138px;height: 33px;font-size: 14px;color: #757575">
            <el-button class="left-navigation" @click="navigatetomain('salesstatistics')" type="text">售卖统计</el-button>
          </el-row>
          </el-row>
      </div>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>

  </el-container>
  </div>
</template>

<script>
export default {
  name: "UserManager",
  // data(){
  //   return{
  //
  //   }
  // },
  methods:{
    myorder(){
      alert("tesxt");
      console.log("test")
    },
    navigatetomain(path){
      console.log(path)
      this.$router.push('/usermanager/'+path)
    },
  }
}
</script>

<style scoped>
.el-aside {
  background-color: #f5f5f5;
  /*color: #333;*/
  /*line-height: 200px;*/
}

.el-main {
  background-color: #f5f5f5;
  color: #333;
  /*text-align: center;*/
  /*line-height: 160px;*/
  padding: 0px;
}
.left-navigation{
  color: #757575
}
.left-navigation:hover{
  color: #333;
}
.left-navigation:focus{
  color: #ff6700;
}
.username{
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  color: #616161;
}
.tip{
  margin: 0 0 10px;
  color: #b0b0b0;
}
.link{
  font-size: 12px;
  color: #ff6700;
}
.user-actions{
  color:#757575;
  font-size:16px;
  padding:6px 0px;
}
</style>
