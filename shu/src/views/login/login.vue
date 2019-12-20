<template>
  <div>
      <input v-model="name"/>
      <input v-model="pwd"/>
      <button @click="login">登录</button>
  </div>
</template>

<script>
import '@/mock/index'
export default {
  data(){
    return {
      name:'',
      pwd:''
    }
  },
  created(){
      console.log(this.$route);
  },
  methods:{
   async login(){
      let {name,pwd} = this;
      console.log(name,pwd);
      let res = await this.$http.post('/api/login',{name,pwd});
      console.log(res);
      if(res.data.code ==1){
        window.localStorage.user = name;
        this.$router.push(this.$route.query.redirect);
      }
    }
  }
}
</script>

<style>

</style>