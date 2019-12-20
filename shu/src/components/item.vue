<template>
  <dl @click="goToDetail(1,item)">
    <dt>
      <img :src="'http:/'+item.coverUrl" alt="" />
    </dt>
    <dd>
      <h3>标题{{item.bookName}}</h3>
      <p>作者：{{item.authorName}}</p>
      <p>更新：{{item.updteChapterName}}</p>
      <p>简介：{{item.subCateName}}</p>
    </dd>
  </dl>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  methods:{
      goToDetail(id,obj){
          this.$router.push({
              name:'detail',
              params:{id},
              query:{
                 ...obj
              }
          })
      }
  }
};
</script>

<style scoped>
dl {
  height: 120px;
  width: 100%;
  display: flex;
}
dl dt {
  height: 120px;
  width: 120px;
}
dl dt img {
  height: 100%;
  width: 100%;
}
dl dd {
  flex: 1;
}
</style>