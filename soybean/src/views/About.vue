<template>
  <div class="about">
    <ul>
      <li v-for="(item,index) in arr" :key="index" @click="changeInd(index)">{{item}}</li>
    </ul>
    <div>
        <Item v-for="(item,index) in newlist" :key="index" :item="item" :ind="index"/>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import Item from '@/components/item'
export default {
  data(){
    return {
      arr:['少吃','适量','使用'],
      ind:0,
      newlist:[]
    }
  },
  components:{
    Item
  },
  created(){
    this.newlist = this.foodlist.filter(item => (item.category_id-1) == this.ind);
  },
  computed:{
    ...mapState(['foodlist'])
  },
  methods:{
    changeInd(ind){
      this.ind = ind;
      this.newlist = this.foodlist.filter(item => (item.category_id-1) == this.ind);

    }
  }
}
</script>
<style >
.about{
  display: flex;
  flex-direction: column;
}
.about>ul{
  height: 44px;
  width: 100%;
  display: flex;
}
ul>li{
  flex: 1;
  text-align: center;
}
  
</style>
