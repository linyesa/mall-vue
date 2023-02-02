<template>
  <div>
    <el-container>
    <el-aside width="575px">
      <div style="background-color: #fff;margin-left:338px;margin-top: 40px;margin-bottom: 40px;width: 234px;height: 916px">
        <el-row style="margin-left: 50px">
          <el-row style="width: 138px;height: 52px;color: #333">
            <h3 style="font-size: 16px">订单中心</h3>
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
            我的个人中心
          </el-row>
          <el-row style="margin-top: 10px;width: 138px;height: 33px;font-size: 14px;color: #757575">
            消息通知
          </el-row>
        </el-row>
      </div>
    </el-aside>
    <el-main>
      <div style="background-color: #fff;margin-top: 40px;margin-left: 15px;width: 977px">
      <el-row style="border-bottom: 1px solid #e0e0e0;">
        <el-col :span="11">
          <el-col :span="12" >
            <img src="../../../static/images/banner01.jpg" style="text-align:right;width: 150px;height: 150px;border-radius: 150px;margin-top: 60px;margin-left: 60px">
          </el-col>
          <el-col :span="6" style="margin-top: 110px;text-align: left">
            <el-col class="username">balabala</el-col>
            <el-col class="tip">下午好~</el-col>
            <el-col class="link">修改个人信息></el-col>
          </el-col>
        </el-col>
        <el-col :span="13" style="margin-top: 100px;">
          <div style="margin-left: 140px">
          <el-col class="user-actions">账号安全：<span style="color: #ffac13;">普通</span></el-col>
          <el-col class="user-actions">绑定手机：<span>177******43</span></el-col>
          <el-col class="user-actions">绑定邮箱：<span>未绑定</span></el-col>
          </div>
        </el-col>
      </el-row>
      </div>
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

    }
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
