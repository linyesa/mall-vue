<template>
  <el-container>
    <el-header height="80px">
      <el-row>
        <el-col :span="5"><el-button type="primary" icon="el-icon-house" @click="skip('/home')">首页</el-button></el-col>
        <el-col :span="5"><el-button @click="skip('/login')" type="primary">主要按钮</el-button></el-col>
        <el-col :span="5"><el-button @click="skip('/goodspublish')" type="primary">商品发布</el-button></el-col>
        <el-col :span="5"><el-button @click="skip('/adminaside')" type="primary">管理员后台修改</el-button></el-col>
        <el-col :span="4">
          <div>
            <el-dropdown>
                  <span class="el-dropdown-link home_userinfo">
                    {{userInfo.username}}<i class="el-icon-arrow-down el-icon--right home_userinfo"></i>
                  </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-user" @click.native="skip('/usermanager')">账号管理</el-dropdown-item>
                <el-dropdown-item icon="el-icon-s-goods" @click.native="skip('/usermanager/goodsmanager')">商品管理</el-dropdown-item>
                <el-dropdown-item icon="el-icon-switch-button" @click.native="skip('usermanager')">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
        </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
     </el-container>
    <el-footer>
      <div class="gcs-footer">
        <div class="footer-top">
          <a href="#">百度网</a> |
          <a href="#">新浪网</a> |
          <a href="#">腾迅房产</a> |
          <a href="#">找货网</a> |
          <a href="#">北极绒</a> |
          <a href="#">阿里巴巴</a> |
        </div>
        <p>©Copyright 2023 林也是lystqn版权所有 | 重庆ICP备19946895740号-4</p>
      </div>
    </el-footer>
  </el-container>

</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
      userInfo:{
      },
      options:[
        {
          value:"1",
          label:"手机",
          children:[
            {
              value:"1.1",
              label:"小米手机"
            },
            {
            value: "1.2",
              label: "华为手机"
            },
            {
              value:"1.3",
              label:"苹果手机"
            },
          ]
        },
        {
          value:"2",
          label:"数码",
          children:[
            {
              value:"2.1",
              label:"游戏主机"
            },
            {
              value: "2.2",
              label: "二手电脑"
            }
          ]
        }
      ]

    }
  },
  methods:{
    test(val){
      console.log("test")
      console.log(val)
      // router.push("/login")

    },
    logout(){
      let _this = this;
      this.$confirm('注销登录吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this.axios.get("http://localhost:9090/admin/user/logout").then(function (){
          console.log("logout")
          localStorage.removeItem("token");
          console.log(localStorage.getItem("token"))
        })
        localStorage.removeItem('systemAdmin')
        _this.$router.replace({path: '/loginto'})
      })
    },
    skip(pathName){
      this.$router.replace({path:pathName})
    }
  },
  created() {
    this.userInfo=JSON.parse(localStorage.getItem('userInfo'))
  }
}
</script>

<style scoped>
.el-header{
  background-color: #B3C0D1;
  /*background-color: #222c3a;*/
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
/*.home_userinfoContainer {*/
/*  display: inline;*/
/*  margin-right: 20px;*/
/*}*/
.gcs-footer{

   margin-top: 20px;

   background:#222c3a;

   width: 100%;

   height: 165px;

   text-align: center;

   color: white;

   position: absolute;

 }

.gcs-footer .footer-top{

  margin-top: 50px;

}

.gcs-footer a{

  color: #f0f1f1;

  text-decoration: none;

  padding: 0 10px;

  vertical-align:middle;

}

.gcs-footer a:hover{

  color: red;

  text-decoration: underline;

}

.gcs-footer p{

  height: 15px;

  color: #888888;

  margin-top: 30px;

}
</style>