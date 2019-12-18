import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
function RouterView (props){
    let {routes} = props;
    //找到所有不包含重定向的路由
    let routerArr = routes && routes.filter(item => !item.to);
    //找所有包含重定向的路由
    let redirectArr = routes && routes.filter(item => item.to).map((item,index) => <Redirect path={item.path} to={item.to} key={index}/>)
    return <Switch>
            {
                routerArr && routerArr.map((item,index) => <Route key={index} path={item.path}  render={(props)=>{
                    return <item.component {...props} child={item.children}/>
                }}/>).concat(redirectArr)
            }
        </Switch>
}
 export default RouterView;