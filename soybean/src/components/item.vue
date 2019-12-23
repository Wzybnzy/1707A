<template>
  <dl :class="{'current':item.flag}" @click="changeDl">
      <dt>
          <img :src="item.imgUrl"/>
      </dt>
      <dd>{{item.name}}</dd>
  </dl>
</template>

<script>
export default {
    props:{
        item:{
            type:Object
        },
        ind:{
            type:Number
        }
    },
    methods:{
        changeDl(){ //通知父组件更新数据
            this.$emit('changeDl',this.ind);
        }
    }
}
</script>

<style>
dl{
    width: 33%;
    height: 150px;
}
dl dt{
    height: 90px;
    width: 90px;
}
dl dt img{
    height: 100%;
    width: 100%;
}
dl.current>dt{
    border: 1px solid red;
}
dl.current>dd{
    color: red;
}
</style>