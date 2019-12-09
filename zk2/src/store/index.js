import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    list: [],
    current: {}, //当前的题目
    ind: 0, //当前是第几道题
    length: 0 //所有题目的总长度
  },
  mutations: {
    changeNmae(state, name) { //更改name
      state.name = name;
    },
    changeList(state, list) {
      state.list = list;
      state.length = state.list.length;
      state.current = state.list[state.ind];
    },
    changeInd(state, ind) { //点击的每一个选项
      state.list[state.ind].selected = ind;

    },
    changeExam(state, ind) { //点击的是下一题上一题
      state.ind = ind;
      state.current = state.list[state.ind]
    }
  },
  actions: {
    async getList({ commit }) {
      let res = await axios.get('/api/exam');
      console.log(res);
      commit('changeList', res.data);
    }
  },
  modules: {
  }
})
