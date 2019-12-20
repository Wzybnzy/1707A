import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import RouterView from '../../router/routerview'
export default class Index extends Component {
    state = {
        arr:['全部','商圈','便利商店','美妆服饰','箱包','百货'],
        ind:0
    }
    render() {
        let {child} = this.props;
        let {arr,ind} = this.state;
        return (
            <div>
                <header>
                    头部
                    <span onClick={()=>{
                        this.props.history.push('/counp')
                    }}>优惠券</span>
                    <span>收藏</span>
                </header>

                <div>
                    <NavLink to="/index/buy">当地必买</NavLink>
                    <NavLink to="/index/eat">当地必吃</NavLink>
                </div>
                <div className="title">
                    {
                        arr && arr.map((item,index)=>
                        <span onClick={this.handleClickInd.bind(this,index)} className={index == ind ? 'current':''} key={index}>{item}</span>)
                    }
                </div>

                <RouterView routes={child}/>

            </div>
        )
    }
    handleClickInd(ind){
        this.setState({ind})
        this.props.history.push('/index/buy/'+ind);
    }
}
