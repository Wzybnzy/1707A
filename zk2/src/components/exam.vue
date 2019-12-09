<template>
  <div>
      <h3>{{current.title}}</h3>
      <ul>
          <li class="examlist" v-for="(item,index) in current.options" :key="index">
              <span @click="clickexam(index)" :class="[{'active': index == current.selected},{'success': index == current.success && current.selected !=-1}]"></span>
              <span>{{arr[index]}}、{{item.txt}}</span>
          </li>
      </ul>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return{
            arr:['A','B','C','D']
        }
    },
    computed:{
        ...mapState(['current'])
    },
    methods:{
        ...mapMutations(['changeInd']),
        clickexam(ind){
            this.changeInd(ind);
        }
    }
}
</script>

<style>
.examlist{
    display: flex;
}
.examlist>span:nth-child(1){
    height: 30px;
    width: 30px;
    display: inline-block;
    border:1px solid #ccc;
    border-radius: 100%;
}

.examlist>span.active{
    background: red;
}
.examlist>span.success{
    background: green;
}
</style>