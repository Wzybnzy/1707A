<template>
  <div>
      阅读
      <Item v-for="(item,index) in readlist" :key="index" :item="item"/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Item from '@/components/item'
export default {
  computed:{
    ...mapState(['readlist'])
  },
  components:{
    Item
  }
}
</script>

<style>

</style>