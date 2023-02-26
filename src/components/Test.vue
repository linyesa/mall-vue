<template>
  <el-container>
    <el-header height="80px">
      <el-row>
        <el-col :span="6"><el-button type="primary" icon="el-icon-house" @click="backHome">首页</el-button></el-col>
        <el-col :span="6">  <el-button @click="login" type="primary">主要按钮</el-button></el-col>
        <el-col :span="6"><el-button @click="publish" type="primary">商品发布</el-button></el-col>
        <el-col :span="6">
          <div>
            <el-dropdown>
                  <span class="el-dropdown-link home_userinfo">
                    用户名<i class="el-icon-arrow-down el-icon--right home_userinfo"></i>
                  </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-user" @click.native="usercustom">账号管理</el-dropdown-item>
                <el-dropdown-item icon="el-icon-s-goods" @click.native="togoodsmanager">商品管理</el-dropdown-item>
                <el-dropdown-item icon="el-icon-switch-button" @click.native="logout">退出登录</el-dropdown-item>
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
    <el-footer>Footer</el-footer>
  </el-container>

</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
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
    login(){
      router.push("/login")
    },
    test(val){
      console.log("test")
      console.log(val)
      // router.push("/login")

    },
    backHome(){
      router.push("/home")
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
    usercustom(){
      let _this=this;
      _this.$router.replace({path:"/usermanager"})
    },
    publish(){
      this.$router.replace({path:"/goodspublish"})
    },
    togoodsmanager(){
      this.$router.replace({path:"/usermanager/goodsmanager"})
    }
  },
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
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

</style>