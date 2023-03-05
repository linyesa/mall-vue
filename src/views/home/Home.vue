<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-cascader :options="options" clearable></el-cascader>
      </el-aside>

      <el-main><el-row>
      <el-col :span="2" :offset="21"><el-input  placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="1"><el-button icon="el-icon-search" circle></el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in imagePathList" :key="item">
          <img :src="item">
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <el-row>
      <el-col :span="6" v-for="item in goodsData" :key="item.goodsId">
        <div style="width:100%;height: 540px;background-color: #FCF7FF" @click="goodsDetail(item.goodsId)">
          <img :src="item.imgPath" style="width: 100%">
          <p style="text-align: center">{{ item.goodsName }}</p>
          <p style="text-align: center">{{item.goodsIntro}}</p>
          <p style="text-align: center;color:#00C0A3">{{item.originalPrice}}元</p>
        </div>
      </el-col>
<!--      <el-col :span="6">-->
<!--        <div style="width: 100%;height: 100px;background-color: blue">test</div>-->
<!--      </el-col>-->
<!--      <el-col :span="6">-->
<!--        <div style="width: 100%;height: 100px;background-color: yellow">test</div>-->
<!--      </el-col>-->
<!--      <el-col :span="6">-->
<!--        <div style="width: 100%;height: 100px;background-color: green">test</div>-->
<!--      </el-col>-->
    </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import router from "@/router";
import userIndex from "@/api/user/userIndex";
export default {
  name: "Home",
  data(){
    return{
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
      ],
      imagePathList:[
          require('../../..//static/images/banner01.jpg'),
          require('../../..//static/images/banner02.jpg'),
          require('../../..//static/images/banner03.jpg')
      ],
      goodsData:[
        {
          goodsId:"1",
          imgPath:require("../../../static/images/0a592388-1535-4f9f-8201-ecb78c48bb3d.jpg"),
          goodsName:'华为：华而不实，为所欲为',
          goodsIntro:'好物精选gfaggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg',
          originalPrice:'1299'
        },
        {
          goodsId:"2",
          imgPath:require("../../../static/images/00a5036a-07d3-4131-b677-956312bbbc2c.jpg"),
          goodsName:'华为：华而不实，为所欲为',
          goodsIntro:'好物精选gfaggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg',
          originalPrice:'1499'
        },
        {
          goodsId:"3",
          imgPath:require("../../../static/images/00e53d76-db08-4ae2-864f-ca1cd7c8c32b.jpg"),
          goodsName:'华为：华而不实，为所欲为',
          goodsIntro:'好物精选gfaggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg',
          originalPrice:'1499'
        },
        {
          goodsId:"4",
          imgPath:require("../../../static/images/0a592388-1535-4f9f-8201-ecb78c48bb3d.jpg"),
          goodsName:'华为：华而不实，为所欲为',
          goodsIntro:'好物精选gfaggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg',
          originalPrice:'1499'
        }
      ],
      userInfo:{

      }
    }
  },
  methods:{
    goodsDetail(goodsId){
      console.log(goodsId)
      router.push("goodsdetails")
    },

  },
  created() {
    console.log(JSON.parse(localStorage.getItem('userInfo')))
    this.userInfo=JSON.parse(localStorage.getItem('userInfo'))
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
img{
  max-height: 100%;
}
p{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

}
</style>