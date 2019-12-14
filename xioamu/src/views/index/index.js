import React, { Component } from 'react'
import RouterView from '../../router/routerview'
import {NavLink} from 'react-router-dom'
export default class Index extends Component {
    render() {
        let {child} = this.props;
        return (
            <div className="index">
                <RouterView routes={child}/>
                <footer>
                    <NavLink to="/index/home">首页</NavLink>
                    <NavLink to="/index/my">我的</NavLink>
                </footer>
            </div>
        )
    }
    
}
