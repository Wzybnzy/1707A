<template>
  <div class="home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in banner" :key="index">
          <img :src="item.image" alt="" />
        </div>
      </div>
    </div>
    <div class="scroll">
      <div>
        <Item v-for="(item, index) in list" :key="index" :item="item"></Item>
        <div v-if="show">---我是有底线的---</div>
      </div>
    </div>
  </div>
</template>

<script>
import { banner, homeShop } from "@/api/api";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import Item from "@/components/item";
import BScroll from "better-scroll";
export default {
  name:'home',
  data() {
    return {
      banner: [],
      list: [],
      pageid: 0,
      limit: 10,
      show: false
    };
  },
  components: {
    Item
  },
  async created() {
    let res = await banner();
    // console.log(res.data);
    this.banner = res.data.data;
    this.getlist();
    this.$nextTick(() => {
      new Swiper(".swiper-container");
      this._initBScroll();
    });
  },
  methods: {
    _initBScroll() {
      this.myBScroll = new BScroll(".scroll", {
        click:true,
        pullUpLoad: {
          threshold: -100
        },
        pullDownRefresh: {
          threshold: 50
        }
      });

      this.myBScroll.on("pullingUp", () => {
        console.log("上拉加载");
        this.pageid++; //0-9  10-19  20-29    0 10  1 10   2 10 3 10
        if (!this.show) {
          this.getlist();
        }
      });

      this.myBScroll.on("pullingDown", () => {
        this.pageid = 0;  
        this.list = [];
        this.show = false;
        this.getlist();
      });
    },
    async getlist() {
      let shop = await homeShop({ pageid: this.pageid, limit: this.limit });
      console.log(shop.data.data);
      this.list = this.list.concat(shop.data.data);

      if (shop.data.data.length <= 0) {
        this.show = true;
      }
      this.myBScroll.refresh();
      this.myBScroll.finishPullUp();
      this.myBScroll.finishPullDown();
    }
  }
};
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.swiper-container {
  height: 200px;
  width: 100%;
}
.swiper-wrapper,
.swiper-slide,
img {
  height: 100%;
  width: 100%;
}
.scroll {
  flex: 1;
  width: 100%;
  overflow: hidden;
}
</style>