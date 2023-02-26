<template>
  <div style="margin-top: 60px;margin-left:330px;width: 300px;height: 500px;border: 0px solid red;" >
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="订单价格" prop="amount">
        <el-input v-model="ruleForm.amount"></el-input>
      </el-form-item>
      <el-form-item label="同行人数" prop="togetherNumber">
        <el-input v-model="ruleForm.togetherNumber"></el-input>
      </el-form-item>
      <el-form-item label="预定时间" prop="reservationTime">
        <el-date-picker
            v-model="ruleForm.reservationTime"
            type="date"
            placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="订单状态" prop="status">
        <el-select v-model="ruleForm.status" placeholder="请选择">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
export default {
  data() {
    return {
      options: [{
        value: '已支付',
        label: '已支付'
      }, {
        value: '已退款',
        label: '已退款'
      }, {
        value: '已完成',
        label: '已完成'
      }],
      category:null,
      ruleForm: {
        id:null,
        amount:null,
        togetherNumber:null,
        reservationTime:'',
        status:"已支付",
        createUser:null,
        updateUser:null
      },
      rules: {
        id: [
          { required: true, message: '必须为数字', trigger: 'blur',type:'number',transform(value) { return Number(value)} }
        ],
        amount: [
          { required: true, message: '必须为数字', trigger: 'blur' ,type:'number',transform(value) { return Number(value)}}
        ],
        togetherNumber:[
          { required: true, message: '请输入同行人数，必须为数字', trigger: 'blur',type: "number", transform(value) { return Number(value)} }
        ],
        status:[
          { required: true, message: '请输入订单状态',trigger:'blur',}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      const _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.axios.post("http://localhost:9090/line/save",_this.ruleForm).then(function (resp){
          //   console.log(resp);
          //   if(resp.data.code == 0){
          //     _this.$alert(_this.ruleForm.scenicname+'添加成功', '', {
          //       confirmButtonText: '确定',
          //       callback: action => {
          //         console.log(action)
          //         _this.$router.push('/admin')
          //       }
          //     });
          //   }
          // })
          console.log(_this.ruleForm)
          this.axios.post("http://localhost:9090/order/save",_this.ruleForm).then(function(resp){
            if(resp.data.code == 0){
              _this.$alert(_this.ruleForm.scenicname+'添加成功', '', {
                confirmButtonText: '确定',
                callback: action => {
                  console.log(action)
                  _this.$router.push('/admin')
                }
              });
            }
            else if(resp.data.code==-1){
              _this.$alert(_this.ruleForm.scenicname+'添加失败', '', {
                confirmButtonText: '确定',
                callback: action => {
                  console.log(action)
                  _this.$router.push('/admin')
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
    // this.ruleForm.createUser=JSON.parse(window.localStorage.getItem("systemAdmin")).username;
  }
}
</script>
