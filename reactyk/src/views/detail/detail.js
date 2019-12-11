import React, { Component } from 'react'
import RouterView from '@/router/routerview'
export default class Detail extends Component {
    state = {
        arr: [
            {
                name: '点餐',
                url: '/detail/dican'
            },
            {
                name: '评价',
                url: '/detail/comment'
            },
            {
                name: '商家',
                url: '/detail/bussi'
            }
        ],
        ind:0
    }
    render() {
        console.log(this.props);
        let { arr,ind } = this.state;
        let {child} = this.props;
        return (
            <div className="detail">
                <ul className="title">
                    {
                        arr && arr.map((item, index) => 
                        <li className={index == ind ? 'active' :''} onClick={this.handleClick.bind(this, index,item.url)} key={index}>{item.name}</li>)
                    }
                </ul>
                <RouterView routes={child}/>
            </div>
        )
    }
    handleClick(ind,url) {
        this.setState({ind});
        this.props.history.push(url);
    }
}
