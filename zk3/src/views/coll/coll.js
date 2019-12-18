import React, { Component } from 'react'
import {connect} from 'react-redux'
import Food from '../../component/food'
class Coll extends Component {
    state = {
        arr:['常吃','不吃','偶尔'],
        ind:0
    }
    render() {
        let {list} = this.props;
        console.log(list,'*****');
        let {arr,ind} = this.state;
        return (
            <div>
                <ul className="title">
                   {
                       arr && arr.map((item,index) =>  
                       <li 
                       key={index} 
                       onClick={()=>{
                           this.setState({ind:index})
                       }}
                       className={index == ind ? 'current':''}>{item}</li>)
                   }
                </ul>
                {
                    list && list.filter(item => item.flag == ind).map((item,index) =>  <Food key={index} item={item}/>)
                }
               
            </div>
        )
    }
}


export default connect((state)=>{
    return {
        list:state.list.list
    }
},(dispatch)=>{
    return {

    }
})(Coll)