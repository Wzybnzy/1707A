<template>
  <div class="home">
    <div class="left">
        <ul>
          <li 
          v-for="(item,index) in arr" 
          :key="index"
          :class="{'active':index == ind}"
          @click="changeLeft(index)"
          >{{item.name}}</li>
        </ul>
    </div>
    <div class="right">
      <div>
          <Item 
          v-for="(item,index) in newlist" 
          :key="index" 
          :item="item" 
          :ind="index"
          @changeDl="changeDl"
          />
      </div>
    </div>
    <div class="dialog" v-if="foodlist.length>0">
      <h3 @click="goTodetail">去测评</h3>
      <div>
        <span 
        v-for="(item,index) in foodlist" 
        :key="index"
        @click="changeDel(index)"
        >{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from '@/components/item'
import '@/mock/index'
import {mapMutations,mapState} from 'vuex'
export default {
  name: 'home',
  data(){
    return {
      list:{},
      newlist:[],
      arr:[
        {
          name:'大豆',
          type:'beans'
        },
         {
          name:'主食',
          type:'food'
        },
         {
          name:'蔬菜',
          type:'greens'
        }
      ],
      ind:0
    }
  },
  components: {
    Item
  },
  computed:{
    ...mapState(['foodlist'])
  },
  created(){
    this.init();
  },
  methods:{
    ...mapMutations(['changelist','dellist']),
   async init(){
     let res = await this.$http.get('/api/list');
     console.log(res);
     this.list = res.data;
     this.newlist = this.list[this.arr[this.ind].type];
     this.newlist.forEach(item => this.$set(item,'flag',false));


    //tab切换的时候添加样式
    this.foodlist.forEach(item => {
      this.newlist.forEach(item1 => {
        if(item.name == item1.name){
            item1.flag = true;
        }
      })
    })

     console.log(this.newlist);
    },
    changeLeft(ind){ //点击左侧
      this.ind = ind;
      this.init();
    },
    changeDl(ind){
      this.newlist[ind].flag = !this.newlist[ind].flag;
      this.changelist(this.newlist[ind]);
    },
    changeDel(ind){ //点击的是弹框里面的每一项
        let cur = this.newlist.findIndex(item => item.name == this.foodlist[ind].name);
        this.newlist[cur].flag = false;
        this.dellist(ind);
    },
    goTodetail(){
      this.$router.push('/About');
    }
  }
}
</script>
<style>
  .left{
    width: 120px;
    border-right: 1px solid #ccc;
    height: 100%;
  }
  .right{
    flex: 1;
  }
  .right>div{
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    display: flex;
  }
  .active{
    color:red;
  }
  .dialog{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 200px;
    overflow-y: auto;
    width: 100%;
    background: #fff;
  }
</style>