<template>
  <div>
      请输入姓名：
      <input type="text" v-model="name">
      <button @click="goToBegin">开始测试</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    data(){
        return {
            name:''
        }
    },
    methods:{
        ...mapMutations(['changeNmae']),
        goToBegin(){
            this.changeNmae(this.name);
            this.$router.push('/list');
        }
    }
}
</script>

<style>

</style>