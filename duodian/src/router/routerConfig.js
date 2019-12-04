const routes = [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/registry',
      name: 'registry',
      component: () => import('@/views/registry/registry.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/views/detail/detail.vue')
    },
    {
      path: '/index',
      name: 'index',
      children:[
        {
          path:'home',
          name:'home',
          component:()=> import('@/views/index/home/home.vue')
        },
        {
          path:'classify',
          name:'classify',
          component:()=> import('@/views/index/classify/classify.vue')
        },
        {
          path:'my',
          name:'my',
          component:()=> import('@/views/index/my/my.vue')
        },
        {
          path:'car',
          name:'car',
          component:()=> import('@/views/index/car/car.vue')
        }
      ],
      component: () => import('@/views/index/index.vue')
    },
    {
      path:'/',
      redirect:'/index'
    }
  ]


  export default routes;