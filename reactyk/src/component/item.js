import React, { Component } from 'react'
import {connect} from 'react-redux'
import {ADD_BUYLIST} from '../store/types'
class Item extends Component {
    render() {
        let { item, ind } = this.props;
        return (
            <div className={'title' + ind}>
                <h3>{item.name}</h3>
                {
                    item.foods && item.foods.map((item1, index1) => <dl key={index1}>
                        <dt>
                            <img src={item1.image} />
                        </dt>
                        <dd>
                            <p>标题:{item1.name}</p>
                            <p>描述:{item1.description}</p>
                            <p>价格:{item1.price}</p>
                           {
                               item1.count ?  <>
                               <span onClick={this.handleChangeCount.bind(this,ind,index1,item1.count-1)}>-</span>
                               <span>{item1.count}</span>
                           </> :null
                           }
                            <span onClick={this.handleChangeCount.bind(this,ind,index1,item1.count+1)}>+</span>
                        </dd>
                    </dl>)
                }
            </div>
        )
    }
    handleChangeCount(ind,index,count){
        //通知父组件更新数量
        this.props.handleCount(ind,index,count);
        //通知仓库更新数据
        this.props.addcount(this.props.item.foods[index]);
    }
}


export default  connect((state)=>{
    return {

    }
},(dispatch)=>{
    return {
        addcount(obj){
            dispatch({type:ADD_BUYLIST,obj})
        }
    }
})(Item)