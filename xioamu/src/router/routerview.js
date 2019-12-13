import {Switch,Route,Redirect} from 'react-router-dom'
import React from 'react'
function RouterView(props){
    let {routes} = props;
    let routerArr = routes && routes.filter(item => !item.to); 
    let redirectArr = routes && routes.filter(item => item.to).map((item,index) => <Redirect path={item.path} to={item.to} key={index}/>)

    return <Switch>
        {
            routerArr && routerArr.map((item,index) => <Route key={index} path={item.path} render={(props)=>{
                return <item.component {...props} child={item.children}/>
            }}/>).concat(redirectArr)
        }
        </Switch>
}

export default RouterView;