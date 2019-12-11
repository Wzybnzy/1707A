// import Detail from "../views/detail/detail";
// import Index from "../views/index/index";
// import Login from "../views/login/login";
// import Order from "../views/index/order/order";
// import Home from "../views/index/home/home";
// import My from "../views/index/my/my";
import Loadable from 'react-loadable';

import React from 'react'

function Loading(){
    return <div>loading....</div>
}


const Index = Loadable({
    loader: ()=> import('@/views/index/index'),
    loading:Loading
})
const Login = Loadable({
    loader: ()=> import('@/views/login/login'),
    loading:Loading
})

const Detail = Loadable({
    loader: ()=> import('@/views/detail/detail'),
    loading:Loading
})

const Dican = Loadable({
    loader: ()=> import('@/views/detail/dican/dican'),
    loading:Loading
})
const Comment = Loadable({
    loader: ()=> import('@/views/detail/comment/comment'),
    loading:Loading
})
const Bussi = Loadable({
    loader: ()=> import('@/views/detail/bussi/bussi'),
    loading:Loading
})

const Home = Loadable({
    loader: ()=> import('@/views/index/home/home'),
    loading:Loading
})
const Order = Loadable({
    loader: ()=> import('@/views/index/order/order'),
    loading:Loading
})
const My = Loadable({
    loader: ()=> import('@/views/index/my/my'),
    loading:Loading
})


const routes = [
    {
        path:'/index',
        component:Index,
        children:[
            {
                path:'/index/home',
                component:Home
            },
            {
                path:'/index/order',
                component:Order
            },
            {
                path:'/index/my',
                component:My
            },
            {
                path:'/index',
                to:'/index/home'
            }
        ]
    },
    {
        path:'/detail',
        component:Detail,
        children:[
            {
                path:'/detail/dican',
                component:Dican
            },
            {
                path:'/detail/comment',
                component:Comment
            },
            {
                path:'/detail/bussi',
                component:Bussi
            },
            {
                path:'/detail',
                to:'/detail/dican'
            }
        ]
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/',
        to:'/index'
    }
]


export default routes;