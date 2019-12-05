<template>
  <div class="classify">
    <div class="left">
      <ul>
        <li 
        v-for="(item,index) in leftList" 
        :key="index"
        :class="{'active':index==ind}"
        @click="goToRight(index)"
        >{{item.title}}</li>
      </ul>
    </div>
    <div class="right">
      <ol v-if="leftList[ind] && leftList[ind].children.length >0 ">
        <li 
        v-for="(item,index) in leftList[ind].children" 
        :class="{'cur':index == cur}"
        @click="changeRight(index)"
        :key="index">{{item.name}}</li>
      </ol>

      <div v-if="rightList && rightList.length == 0">暂无数据</div>
      <Item v-for="(item,index) in rightList" :key="index" :item="item" v-else></Item>
    </div>
  </div>
</template>

<script>
import {shopType,selectType} from '@/api/api'
import Item from '@/components/item'
export default {
  data(){
    return {
      leftList:[],
      rightList:[],
      ind:0,
      cur:0
    }
  },
  components:{
    Item
  },
  async created(){
    let res = await shopType();
    console.log(res.data);
    this.leftList = res.data.data;
    this.getlist();
  },
  methods:{
    goToRight(index){ //点击左侧
      this.ind = index;
      this.cur = 0;
      this.getlist();
    },
    changeRight(cur){ //点击右侧
      this.cur = cur;
      this.getlist();
    },

    async getlist(){
      let type_id = this.leftList[this.ind].id; //一级id
      let category_id =this.leftList[this.ind].children.length>0 && this.leftList[this.ind].children[this.cur].id; //二级ID
      let shop = await selectType({type_id,category_id});
      console.log(shop.data)
      this.rightList = shop.data.data;
    }
  }
}
</script>

<style scoped>
.classify{
  height: 100%;
  width: 100%;
  display: flex;
}
.left{
  width: 120px;
  height: 100%;
  border-right: 1px solid #ccc;
}
.left li{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
}
.left li.active{
  color: red;
}
.right{
  flex: 1;
  height: 100%;
}
.right ol{
  display: flex;
}
.right ol li{
  flex:1;
  padding:  0 5px;
  box-sizing: border-box;
}
.right ol li.cur{
  color: red;
}
</style>