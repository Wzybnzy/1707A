import React, { Component } from 'react'
import axios from 'axios'
import '../../mock/index'
import Food from '../../component/food'
import {connect} from 'react-redux'
import {ADD_LIST} from '../../store/types'
class Classify extends Component {
    state = {
        list: [],
        newlist:[]
        
    }
    render() {
        let { newlist} = this.state;
        return (
            <div className="food">
                {
                    newlist && newlist.map((item, index) => 
                    <Food 
                    handleCheck={this.handleCheck.bind(this)}
                    handleflag={this.handleflag.bind(this)}
                    key={index} 
                    item={item}/>)
                }

            </div>
        )
    }
    async componentDidMount() {
        let res = await axios.get('/api/classify');
        console.log(this.props)
        let {type} = this.props.match.params;
        let {list,newlist} = this.state;
        this.setState({list:res.data,newlist: res.data.filter(item => item.type == type)})
        // this.setState({ list: res.data.filter(item => item.type == type) })
    }
    handleCheck(id){
        console.log(id);
        let {list} = this.state;
        let ind = list.findIndex(item => item.id == id);
        console.log(ind);
        list.forEach(item => item.check = false);
        list[ind].check = !list[ind].check;
        this.setState({list});
    }
    handleflag(id,cur){ //点击的是常吃不吃偶尔
        console.log(id);
        let {list} = this.state;
        let ind = list.findIndex(item => item.id == id);
        list[ind].flag = cur;
        list[ind].check = false;
        this.props.addlist(list[ind]);
        this.setState({list});
    }
}

export default connect((state)=>{
    return {

    }
},(dispatch)=>{
    return {
        addlist(obj){
            dispatch({type:ADD_LIST,obj})
        }
    }
})(Classify)