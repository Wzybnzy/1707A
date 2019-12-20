import React, { Component } from 'react'
import axios from 'axios'
import '../../../mock/index'
import Item from '../../../component/item'
import {connect} from 'react-redux'
 class Buy extends Component {
    state = {
        list:{},
        newlist:[]
    }
    render() {
        let {list,newlist} = this.state;
        console.log(this.props);
        let {id} = this.props.match.params;
        // console.log(Object.values(list).flat())
        // console.log(Object.entries(list))
        // console.log(list['products'+(id-1)])
        // 
        return (
            <div>
                <div className="counplist">
                   {
                       newlist && newlist.map((item,index) =>  
                       <Item key={index} item={item} ind={index} handleCount={this.handleCount.bind(this)}/>)
                   }
                </div>
            </div>
        )
    }

    async componentDidMount(){
        let res = await axios.get('/api/list');
        console.log(res);
        this.setState({list:res.data,newlist:Object.values(res.data).flat()})
    }
    handleCount(ind){ //点击领取的时候触发父组件的事件
        let {newlist} = this.state;
        console.log(ind,'*******'); //[]
        newlist[ind].count = 1;
        //告诉仓库更改数据
        this.props.addcounp(newlist[ind]);

        this.setState({newlist})
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps,'*******');
        let {id} = nextProps.match.params;
        let {list} = this.state;
        let newlist = id == 0 ? Object.values(list).flat() : list['products'+(id-1)]
        this.setState({newlist})
    }

}


export default connect((state)=>{
    return {

    }
},(dispatch)=>{
    return {
        addcounp(obj){
            dispatch({type:'addcounp',obj})
        }
    }
})(Buy)