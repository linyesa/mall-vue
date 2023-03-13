<template>
<div>
  <el-input v-model="filterText" placeholder="输入关键字进行过滤" style="margin-bottom:30px;" />
  <el-tree
      ref="tree2"
      :data="data2"
      show-checkbox
      :filter-node-method="filterNode"
      class="filter-tree"
      default-expand-all
      id="value"
  >
     <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button
              type="text"
              size="mini"
              icon="el-icon-plus"
              @click="() => append(data)">
          </el-button>
          <el-button
              type="text"
              size="mini"
              icon="el-icon-minus"
              @click="() => remove(node, data)">
          </el-button>
        </span>
      </span>
  </el-tree>
  <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
    <span><el-input v-model="typeVO.label">请输入添加类别名称</el-input></span>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="saveType">确 定</el-button>
  </span>
  </el-dialog>
</div>
</template>

<script>
import typeIndex from "@/api/type/typeIndex";
export default {
  name: "AdminTypeManager",
  data() {
    return {
      dialogVisible: false,
      filterText: '',
      data2: [],  //返回所有分类数据
      typeVO:{
        value:'',
        label:''
      }
    }
  },
  created() {
    typeIndex.getTypeInfo()
        .then(response => {
          this.data2 = response.data.typeVOList
        })
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val)
    }
  },

  methods: {
    test(){
      console.log("测试，先执行test再添加")
    },
    getAllTypeList() {
      typeIndex.getTypeInfo()
          .then(response => {
            this.data2 = response.data.typeVOList
          })
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    saveType(){
      typeIndex.addressType(this.typeVO)
          .then(response=>{
            if (response.data.code===0){
              this.$message({
                message: response.data.msg,
                type: 'success'
              });
              this.getAllTypeList()
            }else{
              this.$message.error(response.data.msg);
            }
          })
      this.dialogVisible=false
    },
    append(data) {
      this.typeVO.value=data.value
      this.dialogVisible=true
      // const newChild = { value: data.value++, label: 'testtest', children: [] };
      // if (!data.children) {
      //   this.$set(data, 'children', []);
      // }
      // data.children.push(newChild);
    },

    remove(node, data) {
      console.log(data)
      typeIndex.deleteTypeById(data.value)
      .then(response=>{
        if (response.data.code===0){
          this.$message({
            message: response.data.msg,
            type: 'success'
          });
          this.getAllTypeList()
        }else{
          this.$message.error(response.data.msg);
        }
      })
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(() => {
            done();
          })
          .catch(() => {});
    }
  }
}
</script>

<style scoped>

</style>