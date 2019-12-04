<template>
  <div>
    <div>
      <input type="text" v-model="phone" placeholder="请输入用户名" />
    </div>
    <div>
      <input type="text" v-model="pwd" placeholder="请输入密码" />
    </div>
    <div @click="Registry">注册</div>
  </div>
</template>

<script>
// import axios from "axios";
import {registry} from '@/api/api'
export default {
  data() {
    return {
      phone: "",
      pwd: ""
    };
  },
  methods: {
    async Registry() {
      let phone = this.phone,
        pwd = this.pwd;
      try {
        // let res = await axios.post("/api/user/registry", {
        //   phone,
        //   password: pwd
        // });
        let res = await registry({phone,password: pwd});
        if (res.data.code == 1) {
          this.$router.go(-1);
        }
      } catch (e) {
        alert(e);
      }

      // console.log(res);
    }
  }
};
</script>

<style>
</style>