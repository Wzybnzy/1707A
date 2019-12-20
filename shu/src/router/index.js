import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'index',
    children:[
      {
        path:'home',
        name:'home',
        component:()=> import('../views/index/home/home.vue')
      },
      {
        path:'classify',
        name:'classify',
        component:()=> import('../views/index/classify/classify.vue')
      },
      {
        path:'ranking',
        name:'ranking',
        component:()=> import('../views/index/ranking/ranking.vue')
      },
      {
        path:'book',
        name:'book',
        component:()=> import('../views/index/book/book.vue')
      }
    ],
    component: () => import('../views/index/index.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/detail/detail.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path:'/',
    redirect:'/index/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
