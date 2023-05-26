<template>
  <div style="margin-top: 60px;margin-left:80px;border: 0px solid red;" >
    <el-form style="margin-left: -40px" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="字段：" prop="key">
        <el-select v-model="ruleForm.key" style="width: 160px;float: left" placeholder="请选择字段">
          <el-option label="商品id" value="goods_id"></el-option>
          <el-option label="商品名" value="goods_name"></el-option>
        </el-select>
      </el-form-item>
      <div style="border: 0px solid red;width: 400px;height: 60px;position: relative;top: -64px;left: 270px">
        <el-form-item label="值：">
          <el-input v-model="ruleForm.value" placeholder="请输入关键字" style="width: 160px;"></el-input>
          <el-button type="primary" icon="el-icon-search" style="position: relative;left: 10px;" @click="submitForm('ruleForm')">搜索</el-button>
        </el-form-item>
      </div>
    </el-form>

    <el-table
        :data="tableData"
        :key="isKey"
        border
        stripe
        style="width: 100%;position: relative;top:-30px">
      <el-table-column
          fixed
          prop="goodsId"
          label="商品ID"
          width="170">
      </el-table-column>
      <el-table-column
          prop="goodsName"
          label="商品名称"
          width="160">
      </el-table-column>
      <el-table-column
          prop="goodsIntro"
          label="商品介绍"
          width="160">
      </el-table-column>
      <el-table-column
          prop="goodsDetailContent"
          label="商品详情"
          width="160">
      </el-table-column>
      <el-table-column
          prop="sellingPrice"
          label="商品实际售价"
          width="160">
      </el-table-column>
      <el-table-column
          label="商品上架状态"
          width="160">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ status(scope.row.goodsSellStatus) }}</span>
        </template>
      </el-table-column>
      <el-table-column
          prop="createTime"
          label="创建时间"
          width="160">
      </el-table-column>
      <el-table-column
          prop="updateTime"
          label="更新时间"
          width="160">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
<!--          :disabled="scope.row.status== '已退款' ? true : false"-->
<!--          <el-button-->
<!--              type="primary"-->
<!--              icon="el-icon-edit"-->
<!--              size="mini"-->
<!--              @click="edit(scope.row)">编辑</el-button>-->
          <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="offShelf(scope.row.goodsId,scope.row.goodsSellStatus)">{{scope.row.goodsSellStatus==1?'下架':'上架'}}</el-button>
          <el-button
              icon="el-icon-delete"
              size="mini"
              type="danger"
              @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination style="margin-top: 20px;float: right"
                   background
                   layout="prev, pager, next"
                   :page-size="pageSize"
                   :total="total"
                   :current-page.sync="currentPage"
                   @current-change="page">
    </el-pagination>
  </div>

</template>

<script>
import goodsIndex from "@/api/goods/goodsIndex";
export default {
  name: "AdminGoods",
  data() {
    return {
      tableData:null,
      currentPage: 1,
      pageSize: 3,
      total: null,
      key: '',
      value: '',
      ruleForm: {
        key: '',
        value: '',
        page: '',
        size: 3
      },
      rules: {
        key: [
          { required: true, message: '请选择字段', trigger: 'change' }
        ]
      },
      isKey:false
    }
  },
  methods:{
    offShelf(goodsId,goodsSellStatus){
      let noteMessage=goodsSellStatus==1?'下架':'上架'
      this.$confirm('此操作将'+noteMessage+'该商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        goodsIndex.goodsOffShelf(goodsId).then(response=>{
          if (response.data.code==0){
            // this.rendering()// ---删除了重新渲染
            this.isKey=!this.isKey
            this.$message({
              type: 'success',
              message: noteMessage+"成功"
            });
          }else{
            this.$message({
              type: 'error',
              message: response.data.msg
            });
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'+noteMessage
        });
      });
    },
    submitForm(formName) {
      const _this = this
      //让翻页复原
      _this.currentPage = 1
      this.$refs[formName].validate((valid) => {
        if (valid) {
          _this.ruleForm.page = _this.currentPage
          goodsIndex.goodsSearch(_this.ruleForm).then(response=>{
            _this.tableData=response.data.goodsList
            _this.total=response.data.total
          })
        }
      });
    },
    page(currentPage){
      const _this = this
      // if(_this.ruleForm.value == ''){
      //   this.axios.get('http://localhost:9090/order/list/'+currentPage+'/'+_this.pageSize).then(function (resp) {
      //     _this.tableData = resp.data.data.data
      //     _this.total = resp.data.data.total
      //   })
      // } else {
      //   _this.ruleForm.page = _this.currentPage
      //   this.axios.get('http://localhost:9090/order/search',{params:_this.ruleForm}).then(function (resp) {
      //     _this.tableData = resp.data.data.data
      //     _this.total = resp.data.data.total
      //   })
      // }
      if(_this.ruleForm.value == ''){
        goodsIndex.getAllGoods(currentPage,_this.pageSize).then(response=>{
          _this.tableData=response.data.goodsList
          _this.total=response.data.total
        })
      } else {
        _this.ruleForm.page = _this.currentPage
        goodsIndex.goodsSearch(_this.ruleForm).then(response=>{
          _this.tableData=response.data.goodsList
          _this.total=response.data.total
        })
      }
    },
    edit(row){
      this.$router.push('/admin/ordermanager?id='+row.id)
    },
    del(row) {
      const _this = this
      this.$confirm('确认删除【'+row.goodsName+'】吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.axios.delete('http://localhost:9090/order/deletebyid/'+row.id).then(function (resp) {
          if(resp.data.code==0){
            _this.$alert('【'+row.username+'】已删除', '', {
              confirmButtonText: '确定',
              // eslint-disable-next-line no-unused-vars
              callback: action => {
                location.reload()
              }
            });
          }
        });
      });
    },
    status(code){
      if (code ==0){
        return "已下架"
      }
      if (code==1){
        return "上架中"
      }
      return "联系管理员"
    }
  },
  created() {
    const _this=this
    // _this.axios.get('http://localhost:9090/order/list/1/'+_this.pageSize).then(function(resp){
    //   console.log("scenicspot resp",resp)
    //   _this.tableData=resp.data.data.data
    //   _this.total=resp.data.data.total
    // })
    goodsIndex.getAllGoods(1,_this.pageSize).then(response=>{
      _this.tableData=response.data.goodsList
      _this.total=response.data.total
    })
  }
}
</script>