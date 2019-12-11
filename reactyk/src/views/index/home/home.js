import React, { Component } from 'react'
import {connect} from 'react-redux'
import {ADD,DEL,ADD_LIST,DEL_LIST} from '@/store/types'

class Home extends Component {
    state = {
        val:''
    }
    render() {
        console.log(this.props);
        let {count,list} = this.props;
        let {val} = this.state;
        return (
            <div>
                <span onClick={this.handleDel.bind(this)}>-</span>
                <span>{count}</span>
                <span onClick={this.handleAdd.bind(this)}>+</span>

                <input value={val} onChange={this.handleChange.bind(this)} onKeyUp={this.handleKeyUp.bind(this)}/>

                <ul>
                    {
                        list && list.map((item,index) => <li key={index} onClick={this.handledelList.bind(this,index)}>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
    handleChange(e){
        this.setState({val:e.target.value})
    }
    handleAdd(){
        console.log(this.props);
        this.props.addCount();
    }
    handleDel(){
        this.props.delCount();
    }
    handleKeyUp(e){
        if(e.keyCode == 13){
            let {val} = this.state;
            this.props.addlist(val);
        }
    }
    handledelList(ind){ //删除
        this.props.dellist(ind);
    }
}

// const mapStateToprops = ()=>{

// }
// const mapDispatchToprops = ()=>{
    
// }

export default connect((state)=>{
    console.log(state,'state^^^^^^^^^')
    return {
        count:state.count.count,
        list:state.list.list
    }
},(dispatch)=>{
    return {
        addCount(){
            dispatch({type:ADD})
        },
        delCount(){
            dispatch({type:DEL})
        },
        addlist(val){
            dispatch({type:ADD_LIST,val})
        },
        dellist(ind){
            dispatch({type:DEL_LIST,ind})
        }
    }
})(Home)
