<template>
  <div class="star">
      <div v-for="(item,index) in count*1" :key="index">
          <p v-if="star*1 > index"></p>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        count:String,
        star:String
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.star{
    display: flex;
}
.star>div{
    height: 30px;
    width: 30px;
    background: red;
    margin: 0 10px;
    position: relative;
}
.star>div>p{
    position: absolute;
    left: 0;
    top: 0;
    background: pink;
    height: 30px;
    width: 30px;
}
</style>