<template>
  <div>
    <Item :item="item">
       <template>
         <span>-</span>
         <span>10</span>
         <span>+</span>
       </template>
    </Item>
  </div>
</template>

<script>
import Item from '@/components/item'
export default {
  data(){
    return{
      item:{
          cover:'',
          name:'1231',
          volume:'131231',
          price:4123
      }
    }
  },
  components:{
    Item
  }
}
</script>

<style>

</style>