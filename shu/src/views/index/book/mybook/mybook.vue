<template>
  <div>
      <Item v-for="(item,index) in booklist" :key="index" :item="item"/>
      <!-- {{booklist}} -->
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Item from '@/components/item'
export default {
  data(){
    return {

    }
  },
  components:{
    Item
  },
  computed:{
    ...mapState(['booklist'])
  }
}
</script>

<style>

</style>