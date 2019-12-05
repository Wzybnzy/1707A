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
              <span>购物车</span>
          </div>
      </dd>
  </dl>
</template>

<script>
export default {
    props:{
        item:{
            type:Object
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