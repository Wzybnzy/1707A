import Loadable from 'react-loadable'
import React from 'react'
function Loading(){
    return <div>loading....</div>
}
const Login = Loadable({
    loader:()=> import('../views/login/login'),
    loading:Loading
})

const Registry = Loadable({
    loader:()=> import('../views/registry/registry'),
    loading:Loading
})
const Index = Loadable({
    loader:()=> import('../views/index/index'),
    loading:Loading
})
const Home = Loadable({
    loader:()=> import('../views/index/home/home'),
    loading:Loading
})
const My = Loadable({
    loader:()=> import('../views/index/my/my'),
    loading:Loading
})
const Vote = Loadable({
    loader:()=> import('../views/vote/vote'),
    loading:Loading
})
const CreateVote = Loadable({
    loader:()=> import('../views/createvote/createvote'),
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
        path:'/login',
        component:Login
    },
    {
        path:'/registry',
        component:Registry
    },
    {
        path:'/vote',
        component:Vote
    },
    {
        path:'/createvote',
        component:CreateVote
    },
    {
        path:'/',
        to:'/index'
    }
]

export default routes;