import Loadable from 'react-loadable';

import React from 'react'

function Loading(){
    return <div>loading....</div>
}


const Index = Loadable({
    loader: ()=> import('../views/index/index'),
    loading:Loading
})

const Home = Loadable({
    loader: ()=> import('../views/index/home/home'),
    loading:Loading
})
const Sort = Loadable({
    loader: ()=> import('../views/index/sort/sort'),
    loading:Loading
})
const Classify = Loadable({
    loader: ()=> import('../views/classify/classify'),
    loading:Loading
})
const Coll = Loadable({
    loader: ()=> import('../views/coll/coll'),
    loading:Loading
})
const My = Loadable({
    loader: ()=> import('../views/index/my/my'),
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
                path:'/index/sort',
                component:Sort
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
        path:'/classify/:type',
        component:Classify
    },
    {
        path:'/coll',
        component:Coll
    },
    {
        path:'/',
        to:'/index'
    }
]


export default routes;