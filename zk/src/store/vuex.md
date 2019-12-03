 
- vuex

 state: {  //放的是共享的数据 
    list:[],
    aa:''
  },
  mutations: { // 修改state的唯一途径就是触发mutations的方法，是同步的方法
    changelist(state,list){ 
        state.list = list;
    }
  },
  actions: { //异步的操作
    getlist(context){
      console.log(context) // {commit state getters  }
      axios.get('/api/list').then((res)=>{
          // res.data.list
          context.commit('changelist',res.data.list);
      });
    }
  },
  getters: { // 对state里面的数据派生出来一些新的数据的时候
    getnewlist(){

    }
  }


- 在.vue文件里面

1. state

    this.$store.state.list
    

2. mustations 

    this.$store.commit('方法名','参数');

3. actions

    this.$store.dispatch('方法名','参数');

4. getters

    this.$store.getters.getnewlist