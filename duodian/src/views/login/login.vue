<template>
  <div>
    <div>
      <input type="text" v-model="phone" placeholder="请输入用户名" />
    </div>
    <div>
      <input type="text" v-model="pwd" placeholder="请输入密码" />
    </div>
    <div v-if="show" @click="goToRegistry">立即注册</div>
    <button @click="submit">登录</button>
  </div>
</template>

<script>
// import axios from "axios";
import { login } from "@/api/api";
export default {
  data() {
    return {
      phone: "",
      pwd: "",
      show: false
    };
  },
  methods: {
    // submit(){
    //   console.log(this.phone,this.pwd);
    //  axios.post('/api/user/login',{phone:this.phone,password:this.pwd}).then((res)=>{
    //     console.log(res);
    //     if(res.data.code == 1){ //登录成功
    //       //跳转首页
    //       window.localStorage.token = res.data.data.token;
    //       this.$router.push({path:'/index/home'}); // $router所有的路由信息  $route //只有当前的路由信息
    //     } else {
    //       // code == 0
    //       console.log('*****************************')
    //     }
    //   }).catch((e)=>{
    //     console.log(e)
    //   })
    // }
    async submit() {
      try {
        // let res = await axios.post("/api/user/login", {
        //   phone: this.phone,
        //   password: this.pwd
        // }); //await 后边要跟一个promise对象 await要放在async函数里面使用
        // let res1 = await axios.get('/api/list');
        let res = await login({ phone: this.phone, password: this.pwd });
        console.log(res);
        if (res.data.code == 1) {
          window.localStorage.token = res.data.data.token;
          this.$router.push({ path: "/index/home" });
        }
      } catch (e) {
        console.log(e.response);
        this.show = true;
        alert(e.response.data.msg);
      }
    },
    goToRegistry() {
      //去注册
      this.$router.push("/registry");
    }
  }
};
</script>

<style>
</style>