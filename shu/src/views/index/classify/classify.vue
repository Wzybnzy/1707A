<template>
  <div>
      <ul class="classifytitle">
        <li 
        v-for="(item,index) in arr" 
        :key="index" 
        :class="{'current':index ==ind}"
        @click="changeInd(index)"
        >{{item}}</li>
      </ul>

      <div>
        <Item v-for="(item,index) in newlist" :key="index" :item="item"/>
      </div>
  </div>
</template>

<script>
import '@/mock/index'
import Item from '@/components/item'
export default {
  name:'classify',
  data(){
    return {
      arr:['热门','新书','免费','完本'],
      ind:0,
      list:{},
      newlist:[]
    }
  },
  components:{
    Item
  },
 async created(){
   let res = await this.$http.get('/api/list');
   console.log(res);
   this.list = res.data;
   //初始值
   this.newlist = this.list['ranklist'+this.ind]
   console.log(this.newlist)
  },
  methods:{
    changeInd(ind){
      this.ind = ind;
      this.newlist = this.list['ranklist'+ind];
    }
  }
}
</script>

<style scoped>
.classifytitle{
  height: 44px;
  width: 100%;
  display: flex;
}
.classifytitle>li{
  padding: 0 10px;
  box-sizing: border-box;
  background: #f2f2f2;
  flex: 1;
  margin: 0 10px;
  border-radius: 5px;
  line-height: 44px;
  text-align: center;
}
.classifytitle>li.current{
  background: #ff4544;
  color: #fff;
}
</style>