<template>
  <div>
      姓名：{{name}}
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <span>{{index+1}}</span>:
          <span>你选的是：{{arr[item.selected]}}</span>
          <span>正确答案是：{{arr[item.success]}}</span>
        </li>
      </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return {
      arr:['A','B','C','D']
    }
  },
  computed:{
    ...mapState(['name','list'])
  }
}
</script>

<style>

</style>