<template>
  <div>
      详情
      <Item :item="item"/>
  </div>
</template>

<script>
import Item from '@/components/item.vue'
export default {
  data(){
    return {
      item:{}
    }
    
  },
  components:{
    Item
  },
  created(){
    this.item = this.$route.query;
    console.log(this.item);
  }
}
</script>

<style>

</style>