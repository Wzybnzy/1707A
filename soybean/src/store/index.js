import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foodlist:[]
  },
  mutations: {
    changelist(state,obj){
      let ind = state.foodlist.findIndex(item => item.name == obj.name);
      if(obj.flag){
        if(ind == -1){
          state.foodlist.push(obj);
        }
      } else { //不被选择的时候
        state.foodlist.splice(ind,1)
      }
     
    },
    dellist(state,ind){
      state.foodlist.splice(ind,1)
    }
  },
  actions: {
  },
  modules: {
  }
})
