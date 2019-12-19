import React, { Component } from 'react'
import RouterView from '@/router/routerview'
import {connect} from 'react-redux'
import {ADD_CAR_COUNT} from '../../store/types'
class Detail extends Component {
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
        ind: 0,
        show:false
    }
    render() {
        console.log(this.props);
        let { arr, ind,show } = this.state;
        let { child,buylist } = this.props;
        return (
            <div className="detail">
                <ul className="title">
                    {
                        arr && arr.map((item, index) =>
                            <li className={index == ind ? 'active' : ''} onClick={this.handleClick.bind(this, index, item.url)} key={index}>{item.name}</li>)
                    }
                </ul>
                <RouterView routes={child} />
                <div className={`dialog ${!show ? 'none':''}`}>
                    <div>
                        <h3>清空</h3>
                        <ul>
                            {
                                buylist && buylist.map((item,index)=><li key={index}>
                                <span>名称{item.name}</span>
                                <span>价格{item.price}</span>
                                <span onClick={this.handleCarCount.bind(this,index,item.count-1)}>-</span>
                                <span>{item.count}</span>
                                <span onClick={this.handleCarCount.bind(this,index,item.count+1)}>+</span>
                            </li>)
                            }
                        </ul>
                    </div>

                </div>
                <footer onClick={()=>{
                    let {show} = this.state;
                    this.setState({show:!show})
                }}>
                    <span>购物车{buylist.reduce((prev,cur)=> prev + cur.count,0)}</span>
                </footer>
            </div>
        )
    }
    handleClick(ind, url) {
        this.setState({ ind });
        this.props.history.push(url);
    }
    handleCarCount(ind,count){
        this.props.addcarcount(ind,count);
    }
}


export default connect((state)=>{
    return {
        buylist:state.buylist.buylist
    }
},(dispatch)=>{
    return {
        addcarcount(ind,count){
            dispatch({type:ADD_CAR_COUNT,ind,count})
        }
    }
})(Detail)