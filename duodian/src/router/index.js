import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routerConfig'

Vue.use(VueRouter)  // 注册插件

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// const list = ['car','my'];

router.beforeEach((to,from,next)=>{
  console.log(to,'to********');
  console.log(from,'from********');
  // if(list.includes(to.name)){ //需要守卫
  //   // 判断是否登录
  //   if(!window.localStorage.token){ //没有登录
  //       next('/login');
  //   } else {
  //     next();
  //   }
  // } else {
  //   next();

  // }


  if(to.matched.some(item => item.meta.requiresAuth)){ //需要守卫
      //判断是否登录
      if(!window.localStorage.token){ //没有登录
          next({
            path:'/login',
            query:{
              redirect:to.fullPath
            }
          });
      } else {
        next();
      }
  } else {
    next();
  }


})

export default router
