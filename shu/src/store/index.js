import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    booklist:[],
    readlist:[]
  },
  mutations: {
    addbooklist(state,obj){ //添加书架
      let ind = state.booklist.findIndex(item => item.bookId == obj.bookId);
      if(ind == -1){
        state.booklist.push(obj);
      }
    },
    readbooklist(state,obj){ //添加书架
      let ind = state.readlist.findIndex(item => item.bookId == obj.bookId);
      if(ind == -1){
        state.readlist.push(obj);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
