import Detail from "../views/detail/detail";
import Index from "../views/index/index";
import Login from "../views/login/login";
import Order from "../views/index/order/order";
import Home from "../views/index/home/home";
import My from "../views/index/my/my";

const routes = [
    {
        path:'/index',
        component:Index,
        children:[
            {
                path:'/index/home',
                component:Home,
                children:[]
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
        component:Detail
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