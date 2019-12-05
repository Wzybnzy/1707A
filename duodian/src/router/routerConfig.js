const routes = [
    {
      path: '/login',
      name: 'login',
      meta:{
        requiresAuth:false
      },
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/registry',
      name: 'registry',
      meta:{
        requiresAuth:false
      },
      component: () => import('@/views/registry/registry.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      meta:{
        requiresAuth:false
      },
      component: () => import('@/views/detail/detail.vue')
    },
    {
      path: '/index',
      name: 'index',
      children:[
        {
          path:'home',
          name:'home',
          meta:{
            requiresAuth:false
          },
          component:()=> import('@/views/index/home/home.vue')
        },
        {
          path:'classify',
          name:'classify',
          meta:{
            requiresAuth:false
          },
          component:()=> import('@/views/index/classify/classify.vue')
        },
        {
          path:'my',
          name:'my',
          meta:{
            requiresAuth:true
          },
          component:()=> import('@/views/index/my/my.vue')
        },
        {
          path:'car',
          name:'car',
          meta:{
            requiresAuth:true
          },
          component:()=> import('@/views/index/car/car.vue')
        }
      ],
      component: () => import('@/views/index/index.vue')
    },
    {
      path:'/',
      redirect:'/index/home'
    }
  ]


  export default routes;