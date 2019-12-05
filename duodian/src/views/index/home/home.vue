<template>
  <div class="home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
          <img :src="item.image" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { banner } from "@/api/api";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      banner: []
    };
  },
  async created() {
    let res = await banner();
    // console.log(res.data);
    this.banner = res.data.data;
    this.$nextTick(()=>{
      new Swiper('.swiper-container');
    })
  }
};
</script>

<style scoped>
.home{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.swiper-container{
  height: 200px;
  width: 100%;
}
.swiper-wrapper,.swiper-slide,img{
  height: 100%;
  width: 100%;
}
</style>