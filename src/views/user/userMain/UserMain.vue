<template>
  <div>
    <div style="background-color: #fff;margin-top: 40px;margin-left: 15px;width: 977px">
    <el-row style="border-bottom: 1px solid #e0e0e0;">
      <el-col :span="11">
        <el-col :span="12" >
          <img src="../../../../static/images/banner01.jpg" style="text-align:right;width: 150px;height: 150px;border-radius: 150px;margin-top: 60px;margin-left: 60px">
        </el-col>
        <el-col :span="6" style="margin-top: 110px;text-align: left">
          <el-col class="username">{{userInfo.username}}</el-col>
          <el-col class="tip">下午好~</el-col>
          <el-col class="link">修改个人信息></el-col>
        </el-col>
      </el-col>
      <el-col :span="13" style="margin-top: 100px;">
        <div style="margin-left: 140px">
          <el-col class="user-actions">账号安全：<span style="color: #ffac13;">普通</span></el-col>
          <el-col class="user-actions">绑定手机：<span>{{userInfo.mobile}}</span></el-col>
          <el-col class="user-actions">绑定邮箱：<span>{{ userInfo.email }}</span></el-col>
        </div>
      </el-col>
    </el-row>
  </div>
    <div style="background-color: #fff;margin-top: 40px;margin-left: 15px;width: 977px">
      <el-row>
        <h1>密码设置</h1>
        <el-row type="flex" justify="center">
          <el-col :span="6">
            账户密码：<el-tag size="small" type="success">{{user.password}}</el-tag>
          </el-col>
          <el-col :span="6">
            <el-button
                type="primary"
                icon="el-icon-edit"
                size="mini"
                @click="dialogPasswordVisible = true">编辑</el-button>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="6">
            绑定手机号：<el-tag size="small" type="success">{{user.phone}}</el-tag>
          </el-col>
          <el-col :span="6">
            <el-button
                type="primary"
                icon="el-icon-edit"
                size="mini"
                @click="dialogPhoneVisible = true">编辑</el-button>
          </el-col>
        </el-row>
        <el-dialog title="修改手机号" :visible.sync="dialogPhoneVisible">
          <el-form :model="form" :rules="rules">
            <el-form-item label="旧手机号" :label-width="formLabelWidth">
              <el-input  :disabled="false" autocomplete="off" v-text="user.phone"></el-input>
            </el-form-item>
            <el-form-item label="新手机号" :label-width="formLabelWidth" prop="phone">
              <el-input v-model="form.phone" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogPhoneVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogPhoneVisible = false">确 定</el-button>
          </div>
        </el-dialog>
        <el-dialog title="修改密码" :visible.sync="dialogPasswordVisible">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item label="请输入密码" :label-width="formLabelWidth" prop="newPassword">
              <el-input  :disabled="false" autocomplete="off" v-model="ruleForm.newPassword"
                         @keyup.enter.native="updatepwFunc" show-password></el-input>
            </el-form-item>
            <el-form-item label="请再次输入密码" :label-width="formLabelWidth" prop="confirmPwd">
              <el-input autocomplete="off" v-model="ruleForm.confirmPwd"
                        @keyup.enter.native="updatepwFunc" show-password></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogPasswordVisible = false">取 消</el-button>
            <el-button type="primary" @click="submit()">确 定</el-button>
          </div>
        </el-dialog>
      </el-row>
    </div>

  </div>
</template>

<script>
export default {
  name: "UserMain",
  data(){
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.confirmPwd !== "") {
          this.$refs.ruleForm.validateField("confirmPwd");
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.newPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return{
      userInfo:{

      },
      user:{
        username:'test',
        password:'******',
        phone:"17783052743"
      },
      dialogPhoneVisible: false,
      dialogPasswordVisible: false,
      form: {
        phone: '',
        delivery: false,
      },
      ruleForm:{
        newPassword: "",
        confirmPwd: "",
        delivery:false
      },
      rules: {
        newPassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
          { validator: validatePass, trigger: "blur" },
        ],
        confirmPwd: [
          { required: true, message: "请确认密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符",
            trigger: "blur",
          },
          { validator: validatePass2, trigger: "blur", required: true },
        ],
        phone:[
          { required: true, message: '请输入手机号',trigger: 'blur' },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '手机号格式错误'
          }
        ]
      },
      formLabelWidth: '120px'

    }
  },
  methods:{
    async submit(){
      const _this=this;
      _this.dialogPasswordVisible=false
      await _this.axios(
          {
            method:'post',
            url:"http://localhost:9090/admin/changepassword",
            data:{
              confirmPwd:_this.ruleForm.confirmPwd,
              username:_this.user.username
            }
          }
      ).then(function (resp){
        if (resp.data.code==0){
          _this.$message({
            message: '密码修改成功',
            type: 'success'
          });
          _this.ruleForm.confirmPwd=''
          _this.ruleForm.newPassword=''
          _this.axios.get("http://localhost:9090/admin/user/logout").then(function (){
            localStorage.removeItem("token");
            localStorage.removeItem('systemAdmin')
            _this.$router.replace({path: '/loginto'})
          })
        }
        else{
          _this.$message({
            message: '密码修改失败',
            type: 'warning'
          });
        }
      })
    },
  },
  created() {
    this.userInfo=JSON.parse(localStorage.getItem('userInfo'))
  }

}
</script>

<style scoped>

</style>