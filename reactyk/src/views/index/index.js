import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import Home from './home/home'
import Order from './order/order'
import My from './my/my'
import RouterView from '../../router/routerview'
export default class Index extends Component {
    state = {
        arr: [
            {
                txt: '首页',
                url: '/index/home'
            },
            {
                txt: '订单',
                url: '/index/order'
            },
            {
                txt: '我的',
                url: '/index/my'
            }
        ]
    }
    render() {
        console.log(this.props)
        let { arr } = this.state;
        let {child} = this.props;
        return (
            <div>
                <RouterView routes={child}/>
                {/* <Switch>
                    {
                        routerArr.map((item, index) => <Route path={item.path} render={(props) => {
                            return <item.component {...props} />
                        }} />)
                    }
                    {
                        redirectArr && redirectArr.map((item, index) => <Redirect key={index} path={item.path} to={item.to} />)
                    }
                </Switch> */}

                <footer>
                    {
                        arr && arr.map((item, index) => <NavLink key={index} to={item.url}>{item.txt}</NavLink>)
                    }
                </footer>
            </div>
        )
    }
}
