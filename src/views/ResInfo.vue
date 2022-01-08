<template>
  <div id="resinfo">
    <Header></Header>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="id" prop="id">
        <el-input v-model="ruleForm.id" disabled> </el-input>
      </el-form-item>
      <el-form-item label="username" prop="username">
        <el-input v-model="ruleForm.username"> </el-input>
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input v-model="ruleForm.password" type="password"> </el-input>
      </el-form-item>
      <el-form-item
        prop="email"
        label="邮箱"
        :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change'],
          },
        ]"
      >
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="postInfo('ruleForm')">保存</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <router-view></router-view>
  </div>
</template>


<script>
import Header from "../components/Header.vue";
export default {
  name: "ResInfo",
  components: {
    Header,
  },
  data() {
    return {
      ruleForm: {
        id: "",
        username: "",
        avatar: "",
        email: "",
        password: "",
        status: "",
        created: "",
        lastLogin: "",
      },
      info: {},
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 15,
            message: "长度在 3 到 15 个字符",
            trigger: "blur",
          },
        ],
        password: [{ required: true, message: "请填写密码", trigger: "blur" }],
        email: [{ required: true, message: "请填写邮箱", trigger: "blur" }],
      },
    };
  },
  methods: {
    getInfo() {
      const _this = this;
      this.$axios.get("/user/index").then((res) => {
        _this.info = res.data.data;
        _this.ruleForm.id = res.data.data.id;
        _this.ruleForm.username = res.data.data.username;
        _this.ruleForm.avatar = res.data.data.avatar;
        _this.ruleForm.email = res.data.data.email;
        _this.ruleForm.password = res.data.data.password;
        _this.ruleForm.status = res.data.data.status;
        _this.ruleForm.created = res.data.data.created;
        _this.ruleForm.lastLogin = res.data.data.lastLogin;
      });
    },
    postInfo() {
      let reg =
        /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
      if (this.ruleForm.email == null) {
        this.$message.error("邮箱不能为空哦");
      } else if (!reg.test(this.ruleForm.email)) {
        this.$message.error("邮箱格式不对哦");
      } else {
        const _this = this;
        this.$axios
          .get("http://222.186.36.138:9017/user/index", this.ruleForm)
          .then((res) => {
            console.log(res);
            _this.$message({
              message: "成功修改",
              type: "success",
            });
          });
      }
    },
  },
  created() {
    this.getInfo();
    console.log(this.info);
  },
};
</script>

<style>
.demo-ruleForm {
  width: 400px;
  margin: 100px auto;
  text-align: center;
}
</style>