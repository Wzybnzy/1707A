<template>
  <div class="index">
    <keep-alive include="home,classify">
      <router-view />
    </keep-alive>
    <footer>
        <router-link :to="item.url" v-for="(item,index) in arr" :key="index" tag="dl">
           <dt :class="['icon', 'iconfont',item.icon ]"></dt>
           <dd>{{item.title}}</dd>
        </router-link>
    </footer>
  </div>
</template>

<script>
export default {
   data(){
     return {
       arr:[
         {
           url:'/index/home',
           title:'首页',
           icon:'icon-shouye'
         },
         {
           url:'/index/classify',
           title:'分类',
           icon:'icon-fenlei'
         },
         {
           url:'/index/car',
           title:'购物车',
           icon:'icon-icon22fuzhi'
         },
         {
           url:'/index/my',
           title:'我的',
           icon:'icon-wode'
         }
       ]
     }
   }
}
</script>

<style>
.index>footer{
  height: 50px;
  width: 100%;
  display: flex;
  border-top: 1px solid #ccc;
}

footer dl {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 3px 0 ;
  box-sizing: border-box;
}
footer dl dt{
  height: 30px;
  width: 30px;
  font-size: 24px;
}
.index>div{
  flex: 1;
  width: 100%;
  overflow: hidden;
}
.router-link-active{
  color: red;
}
</style>