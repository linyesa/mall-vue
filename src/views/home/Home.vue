<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-cascader :options="options" clearable @change="typeSearch"></el-cascader>
      </el-aside>

      <el-main><el-row>
      <el-col :span="2" :offset="21"><el-input v-model="searchVO.keyWord" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="1"><el-button @click="goodsSearch()" icon="el-icon-search" circle></el-button>
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
      <el-col :span="6" v-for="item in goodsInfo" :key="item.goodsId">
        <div style="width:100%;height: 540px;background-color: #FCF7FF" @click="goodsDetail(item.goodsId)">
          <img :src=item.goodsCoverImg style="width: 100%">
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
import goodsIndex from "@/api/goods/goodsIndex";
import typeIndex from "@/api/type/typeIndex";
export default {
  name: "Home",
  data(){
    return{
      searchVO:{
        keyWord:'',
        typeId: ""
      },
      options:[

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
      goodsInfo:[],
      userInfo:{

      }
    }
  },
  methods:{
    goodsSearch(){
      goodsIndex.searchGoods(this.searchVO)
          .then(response=>{
            this.goodsInfo=response.data.goodsInfo
          });
    },
    goodsDetail(goodsId){
      this.$router.push('goodsdetails/'+goodsId);
    },
    getImgUrl(imgName){
      let urlName = imgName.replace(/\s/g, '')
      return require("../../../static/images/"+urlName);
    },
    typeSearch(e) {
      this.searchVO.typeId=e[1];
      goodsIndex.searchGoods(this.searchVO)
          .then(response=>{
            this.goodsInfo=response.data.goodsInfo
          });
    }

  },
  created() {
    this.userInfo=JSON.parse(localStorage.getItem('userInfo'))
    goodsIndex.getGoodsInfo()
        .then(response=>{
          this.goodsInfo=response.data.goodsInfo
        });
    typeIndex.getTypeInfo()
    .then(response=>{
      this.options=response.data.typeVOList
    })
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