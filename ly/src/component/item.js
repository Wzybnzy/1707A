import React, { Component } from 'react'

export default class Item extends Component {
    state = {
        arr:['领取','已使用','']
    }
    render() {
        let {item} = this.props;
        let {arr} = this.state;
        return (
            <dl>
                <dt>
                    <img src={item.imgUrl}/>
                </dt>
                <dd>
                    <h3>{item.productTypeName}</h3>
                    <span>{item.peopleCount}人收藏</span>
                    <p onClick={this.handleClickCount.bind(this)}>{arr[item.count]}</p>
                </dd>
            </dl>
        )
    }
    handleClickCount(){
        let {count} = this.props.item;
        if(count == 0){ //当点击的是领取的时候，才能执行
            this.props.handleCount(this.props.ind);
        }
    }
}
