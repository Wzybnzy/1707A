<template>
  <div>
     <div>
       <input type="text" v-model="phone" placeholder="请输入用户名"/>
     </div>
     <div>
       <input type="text" v-model="pwd" placeholder="请输入密码"/>
     </div>
     <button @click="submit">登录</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      phone:'',
      pwd:''
    }
  },
  methods:{
    submit(){
      console.log(this.phone,this.pwd);
      axios.post('/api/user/login',{phone:this.phone,password:this.pwd}).then((res)=>{
        console.log(res);
        if(res.data.code == 1){ //登录成功
          //跳转首页
          window.localStorage.token = res.data.data.token;
          this.$router.push({path:'/index/home'}); // $router所有的路由信息  $route //只有当前的路由信息
        } else {
          // code == 0
          console.log('*****************************')
        }
      }).catch((e)=>{
        console.log(e)
      })
    }
  }
}
</script>

<style>

</style>