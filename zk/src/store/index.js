import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  //放的是共享的数据 
    list:[]
  },
  mutations: { // 修改state的唯一途径就是触发mutations的方法，是同步的方法
    changelist(state,list){
      state.list = list;
    }
  },
  actions: { //异步的操作
    getlist({commit},str){
      console.log(str)
      // console.log(context) // {commit state getters  }
      axios.get('/api/list').then((res)=>{
          // res.data.list
          console.log(res.data);
          commit('changelist',res.data.list);
      });
    }
  },
  getters: { // 对state里面的数据派生出来一些新的数据的时候
    getlistgetters(state,getters){
      return (type)=>{
        console.log(type,'type^^^^^^^^')
        return type == 'all' ? state.list : state.list.filter(item => item.type == type)
      }
    }
  }
})
