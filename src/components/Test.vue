<template>

  <el-container>
    <el-header height="80px">
      <el-row>
        <el-col :span="6"><el-button type="primary" icon="el-icon-house" @click="backHome">首页</el-button></el-col>
        <el-col :span="6">导航</el-col>
        <el-col :span="6">导航</el-col>
        <el-col :span="6">  <el-button @click="login" type="primary">主要按钮</el-button></el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-cascader :options="options" clearable @change="test"></el-cascader>
      </el-aside>
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
  name: "Test",
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
      router.push("home")
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


</style>