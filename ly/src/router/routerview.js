import React from 'react'

import {Switch,Route,Redirect} from 'react-router-dom'


function RouterView(props){
    let {routes} = props;
    let routerArr = routes &&routes.filter((item) => !item.to);
    let redirectArr = routes && routes.filter(item => item.to).map((item1,index1)=> <Redirect path={item1.path} to={item1.to} key={index1}/>);
     return <Switch>
            {
                routerArr && routerArr.map((item,index) => <Route key={index} path={item.path} render={(props)=>{
                    return <item.component {...props} child={item.children}/>
                }}/>).concat(redirectArr)
            }
        </Switch>

}

export default RouterView;