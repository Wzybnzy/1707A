import React from 'react'
import Loadable from 'react-loadable'

const Loading =()=>{
    return <div>loading....</div>
}

const Index = Loadable({
    loader:()=> import('../views/index/index'),
    loading:Loading
})
const Buy = Loadable({
    loader:()=> import('../views/index/buy/buy'),
    loading:Loading
})
const Eat = Loadable({
    loader:()=> import('../views/index/eat/eat'),
    loading:Loading
})
const Detail = Loadable({
    loader:()=> import('../views/detail/detail'),
    loading:Loading
})
const Coll = Loadable({
    loader:()=> import('../views/coll/coll'),
    loading:Loading
})
const Counp = Loadable({
    loader:()=> import('../views/counp/counp'),
    loading:Loading
})

const routes =[
    {
        path:'/index',
        component:Index,
        children:[
            {
                path:'/index/buy/:id',
                component:Buy
            },
            {
                path:'/index/eat',
                component:Eat
            },
            {
                path:'/index',
                to:'/index/buy/0'
            }
        ]
    },
    {
        path:'/detail',
        component:Detail
    },
    {
        path:'/coll',
        component:Coll
    },
    {
        path:'/counp',
        component:Counp
    },
    {
        path:'/',
        to:'/index'
    }
]

export default routes;