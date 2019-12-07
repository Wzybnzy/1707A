<template>
  <div class="carlist">
    <div class="car" v-for="(item, index) in list" :key="index">
      <span @click="changeCheck(item.id)" :class="{ active: item.flag }"></span>
      <Item :item="item.shopdata">
        <template>
          <span @click="delCount(item,item.userid, item.shopid)">-</span>
          <span>{{ item.count }}</span>
          <span @click="addCount(item,item.userid, item.shopid)">+</span>
        </template>
      </Item>
    </div>
    <div class="car">
      <span :class="{ active: allflag }" @click="allCheck"></span>全选
      <p>总价:{{sumPrice}}</p>
    </div>
  </div>
</template>

<script>
import Item from "@/components/item";
import { getCar, getUserInfo, addCar, removeCar } from "@/api/api";
export default {
  data() {
    return {
      list: [],
      allflag: false,
      sumPrice:0
    };
  },
  components: {
    Item
  },
  async created() {
    let user = await getUserInfo();
    console.log(user);
    let res = await getCar({ user_id: user.data.data.uid });
    console.log(res, "&&&&&&&&&&&&&&&&&&&");
    this.list = res.data.data;
    this.list.forEach(item => this.$set(item, "flag", false));
  },
  methods: {
    changeCheck(id) {
      let ind = this.list.findIndex(item => item.id == id);
      this.list[ind].flag = !this.list[ind].flag;
      console.log(this.list[ind]);
      //全选
      this.allflag = this.list.every(item => item.flag);
     this.sumPrice = this.getSumPrice();
    },
    allCheck() {
      //点击全选
      this.allflag = !this.allflag;
      this.list.forEach(item => (item.flag = this.allflag));
      //this.$toast('message');
     this.sumPrice = this.getSumPrice();
    },
    async addCount(obj,user_id, shop_id) {
      //点击加号
      let res = await addCar({
        user_id,
        shop_id
      });
      obj.count++;
      this.sumPrice =this.getSumPrice();
      console.log(res.data);
    },
   async delCount(obj,user_id,shop_id) {
       //点击加号
      let res = await removeCar({
        user_id,
        shop_id
      });
      obj.count--;
      this.sumPrice = this.getSumPrice();
      console.log(res.data);
    },
    getSumPrice(){
        // this.list.forEach(item => {
        //   if(item.flag){
        //      this.sumPrice += item.count * item.shopdata.price;
        //   }
        // })
        return this.list.reduce((prev,cur) => { //[10,20,43]
          return prev + (cur.flag ? cur.count * cur.shopdata.price : 0)
        },0)
    }
  }
};
</script>

<style>
.index > .carlist {
  height: 100%;
  width: 100%;
  overflow-y: auto;
}
.car {
  display: flex;
}
.car > span {
  display: inline-block;
  height: 30px;
  width: 30px;
  border: 1px solid #ccc;
  border-radius: 100%;
}
.car > span.active {
  background: red;
}
.car dl {
  flex: 1;
}
</style>