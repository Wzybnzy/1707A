<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <div class="top">
      <div
        class="title"
        v-for="(item, index) in arr"
        :key="index"
        @click="changeClick(item.type)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="content">
      <div v-for="(item, index) in getlistgetters(type)" :key="index">
        <Icon :type="item.type"/>
        <div>{{ item.title }}</div>
        <Star :star="item.star" :count="5"/>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import Icon from "@/components/icon";
import Star from "@/components/star";

export default {
  data() {
    return {
      type: "all",
      arr: [
        {
          title: "全部",
          type: "all"
        },
        {
          title: "进行中",
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
  created() {
    // this.$store.dispatch("getlist", "123"); // action
    this.getlist();
  },
  components: {
    Icon,
    Star
  },
  methods: {
    ...mapActions(["getlist"]), // {getlist:(){},getlist1:(){},getlist2(){}}
    changeClick(type) {
      console.log(type, "type&&&&&&&&&&");
      this.type = type;
    }
  },
  computed: {
    ...mapGetters(["getlistgetters"])
    // getlists(){
    //   return this.$store.getters.getlistgetters;
    // }
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.top {
  display: flex;
}
.top > div.title {
  margin: 0 10px;
}
.content>div{
  border: 1px solid #ccc;
}
</style>
