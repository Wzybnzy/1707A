import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
function RouterView(props) { // [{children:[],path:,componet},{path:coponent:}]
    let {routes} = props;
    let routerArr = routes && routes.filter(item => !item.to); //所有不包含重定向的
    let redirectArr = routes && routes.filter(item => item.to); //所有包含重定向的
    return <Switch>
        {
            routerArr && routerArr.map((item, index) => <Route key={index} path={item.path} render={(props) => {
                return <item.component {...props} child={item.children}/>
            }} />)
        }
        {
            redirectArr && redirectArr.map((item, index) => <Redirect key={index} path={item.path} to={item.to} />)
        }
    </Switch>
}
export default RouterView;