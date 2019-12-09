<template>
  <dl>
      <dt>
          <img v-lazy="item.cover" alt="">
      </dt>
      <dd>
          <h3>{{item.name}}</h3>
          <div>累计{{item.volume}}份</div>
          <div>
              <span>价格:{{item.price}}</span>
              <slot>
                <span @click="goToAddCar">购物车</span>
              </slot>
          </div>
      </dd>
  </dl>
</template>

<script>
import {getUserInfo,addCar} from '@/api/api'
export default {
    props:{
        item:{
            type:Object
        }
    },
    methods:{
       async goToAddCar(){
            console.log(1321341241234123);
            if(!window.localStorage.token){ //没有登录
                this.$router.push({
                    path:'/login',
                    query:{
                        redirect:'/index/home'
                    }
                })
                return;
            }

            console.log(this.item.id);
            let res = await getUserInfo();
            console.log(res);
            //添加购物车
            let shop = await addCar({
                shop_id:this.item.id,
                user_id:res.data.data.uid
            })
            //消息提示

            this.$toast('添加购物车成功',1500);
            // this.$router
            // this.$route


            console.log(shop,'shop************')
        }
    }
}
</script>

<style scoped>
dl{
    display: flex;
    padding:  5px 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
}
dl> dt{
    height: 120px;
    width: 120px;
}
dl>dt>img{
    height: 100%;
    width: 100%;
}
dl dd{
    flex: 1;
    height: 120px; 
}
</style>