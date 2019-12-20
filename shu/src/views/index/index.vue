<template>
  <div class="index">
      <ul>
        <router-link 
        :to="item.url"
        tag="li"
        v-for="(item,index) in arrtitle" 
        :key="index" 
        :class="{'active':index == ind}"
        @click="changeInd(index)"
        >{{item.name}}</router-link >
      </ul>
      <keep-alive include="classify">
        <router-view />
      </keep-alive>
  </div>
</template>

<script>
export default {
  data(){
    return{
      arrtitle:[
        {
          name:'首页',
          url:'/index/home'
        },
         {
          name:'分类',
          url:'/index/classify'
        }, {
          name:'排行',
          url:'/index/ranking'
        }, {
          name:'书架',
          url:'/index/book'
        }
      ],
      ind:0
    }
  },
  methods:{
    changeInd(ind){
      // this.ind = ind;
    }
  }
}
</script>

<style scoped>
.index>ul{
  height: 44px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.index>ul>li{
  flex: 1;
  line-height: 44px;
  text-align: center;
}
.router-link-active{
  color: red;
}
</style>