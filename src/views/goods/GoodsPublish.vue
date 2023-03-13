<template>
  <div style="margin-top: 60px;margin-left:25%;width: 500px;height: 500px;border: 0px solid red;" >
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm">
      <el-form-item label="商品名" prop="goodsName">
        <el-input v-model="ruleForm.goodsName"></el-input>
      </el-form-item>
      <el-form-item label="商品简介" prop="goodsIntro">
        <el-input v-model="ruleForm.goodsIntro" type="textarea"  :rows="2"></el-input>
      </el-form-item>
      <el-form-item label="商品分类id">
        <el-aside width="200px">
          <el-cascader :options="options" clearable @change="typeSearch"></el-cascader>
        </el-aside>
      </el-form-item>
      <el-form-item label="商品详情" prop="goodsDetailContent">
        <el-input v-model="ruleForm.goodsDetailContent"></el-input>
      </el-form-item>
      <el-form-item label="商品原价" prop="originalPrice">
        <el-input v-model="ruleForm.originalPrice"></el-input>
      </el-form-item>
      <el-form-item label="商品售卖价格" prop="sellingPrice">
        <el-input v-model="ruleForm.sellingPrice"></el-input>
      </el-form-item>
      <el-form-item label="商品标签">
        <el-input v-model="ruleForm.tag"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import typeIndex from "@/api/type/typeIndex";
import goodsIndex from "@/api/goods/goodsIndex";
import userIndex from "@/api/user/userIndex";
export default {
  data() {
    return {
      userInfo:{},
      options: [],
      category:null,
      ruleForm: {
        goodsName:'',
        goodsIntro:'',
        goodsCategoryId:'',
        goodsCoverImg: 'https://edu-lysa.oss-cn-hangzhou.aliyuncs.com/mall/0a592388-1535-4f9f-8201-ecb78c48bb3d.jpg',
        goodsDetailContent:'',
        originalPrice:'',
        sellingPrice:'',
        tag:'',
        createUser:''
      },
      rules: {
        goodsName: [
          {required:true, message:'必须填写',trigger:'blur'}
          ],
        goodsIntro: [
          {required:true, message:'必须填写',trigger:'blur'}
        ],
        goodsDetailContent: [
          {required:true, message:'必须填写',trigger:'blur'}
        ],
        originalPrice: [
          {required:true, message:'必须填写',trigger:'blur'},
          { required: true, message: '必须为数字', trigger: 'blur' ,type:'number',transform(value) { return Number(value)}}
        ],
        sellingPrice: [
          {required:true, message:'必须填写',trigger:'blur'},
          { required: true, message: '必须为数字', trigger: 'blur' ,type:'number',transform(value) { return Number(value)}}
        ]

      }
    };
  },
  methods: {
    typeSearch(e) {
      this.ruleForm.goodsCategoryId=e[1];
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          goodsIndex.saveGoods(this.ruleForm)
          .then(response=>{
            if (response.data.code==0){
              this.$alert(this.ruleForm.goodsName+'添加成功', '', {
                confirmButtonText: '确定',
                callback: action => {
                  console.log(action)
                }
              });
            }else{
              this.$alert(this.ruleForm.goodsName+'添加失败', '', {
                confirmButtonText: '确定',
                callback: action => {
                  console.log(action)
                }
              });
            }
          })
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created() {
    this.userInfo=JSON.parse(localStorage.getItem('userInfo'))
    typeIndex.getTypeInfo()
        .then(response=>{
          this.options=response.data.typeVOList
        })
    userIndex.getUserIdByMobile(this.userInfo.mobile)
    .then(response=>{
      this.ruleForm.createUser=response.data.userId
    })
  }
}
</script>
