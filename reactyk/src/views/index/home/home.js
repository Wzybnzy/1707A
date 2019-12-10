import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                首页
                <Switch>
                    {
                        routerArr.map((item, index) => <Route path={item.path} render={(props) => {
                            return <item.component {...props} />
                        }} />)
                    }
                    {
                        redirectArr && redirectArr.map((item, index) => <Redirect key={index} path={item.path} to={item.to} />)
                    }
                    {/* <Route path="/index/home" component={Home}/>
                   <Route path="/index/order" component={Order}/>
                   <Route path="/index/my" component={My}/>
                   <Redirect path="/index" to="/index/home"/> */}
                </Switch>

            </div>
        )
    }
}
