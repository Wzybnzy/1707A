<template>
  <div>
      详情
      <Item :item="item">
        <button @click.stop="goToBook">书架</button>
      </Item>
      <div @click="goToRead">立即阅读</div>
  </div>
</template>

<script>
import Item from '@/components/item.vue'
import {mapMutations} from 'vuex'
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
  },
  methods:{
    ...mapMutations(['addbooklist','readbooklist']),
    goToBook(){ //点击书架
      console.log('*******');
      this.addbooklist(this.item);
      // this.$router.push('/index/book/mybook');
    },
    goToRead(){ //去阅读
      this.$router.push('/read');
      this.readbooklist(this.item);
    }
  }
}
</script>

<style>

</style>