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
        meta: { requiresAuth: false },
        component:()=> import('../views/index/home/home.vue')
      },
      {
        path:'classify',
        name:'classify',
        meta: { requiresAuth: false },
        component:()=> import('../views/index/classify/classify.vue')
      },
      {
        path:'ranking',
        name:'ranking',
        meta: { requiresAuth: false },
        component:()=> import('../views/index/ranking/ranking.vue')
      },
      {
        path:'book',
        name:'book',
        children:[
          {
            path:'mybook',
            name:'mybook',
            meta: { requiresAuth: true },
            component:()=> import('../views/index/book/mybook/mybook.vue')
          },
          {
            path:'myread',
            name:'myread',
            meta: { requiresAuth: true },
            component:()=> import('../views/index/book/myread/myread.vue')
          }
        ],
        component:()=> import('../views/index/book/book.vue')
      }
    ],
    component: () => import('../views/index/index.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    meta: { requiresAuth: false },
    component: () => import('../views/detail/detail.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: { requiresAuth: false },
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/read',
    name: 'read',
    meta: { requiresAuth: true },
    component: () => import('../views/read/read.vue')
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


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
  
    if (!window.localStorage.user) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
