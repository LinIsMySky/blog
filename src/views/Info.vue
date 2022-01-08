<template>
  <div id="info">
    <Header></Header>
    <el-descriptions title="用户信息">
      <el-descriptions-item label="id">{{ info.id }}</el-descriptions-item>
      <el-descriptions-item label="username">{{
        info.username
      }}</el-descriptions-item>
      <el-descriptions-item label="email">{{
        info.email
      }}</el-descriptions-item>
      <el-descriptions-item label="created">{{
        info.created
      }}</el-descriptions-item>
      <el-descriptions-item label="lastLogin">{{
        info.lastLogin
      }}</el-descriptions-item>
    </el-descriptions>
    <el-button-group>
      <el-button type="primary" icon="el-icon-edit">
        <router-link to="/resinfo">忘记密码?</router-link>
      </el-button>
    </el-button-group>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "Info.vue",
  components: {
    Header,
  },
  data() {
    return {
      info: {},
    };
  },
  methods: {
    getInfo() {
      const _this = this;
      this.$axios.get("/user/index").then((r) => {
        _this.info = r.data.data;
      });
    },
  },
  created() {
    this.getInfo();
    console.log(this.info);
  },
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>