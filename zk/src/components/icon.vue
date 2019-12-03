<template>
  <div>
    <div v-for="(item,index) in arr" :key="index">
      <img src="" />
      <div>{{ type == item.type ? item.title :'' }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          title: "进行中",
          icon: "",
          type: "pending"
        },
        {
          title: "强制执行",
          type: "reject"
        },
        {
          title: "已完成",
          type: "fullfilled"
        }
      ]
    };
  },
  props: {
    type: {
      type: String
    }
  }
};
</script>

<style>
</style>