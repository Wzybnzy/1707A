import React, { Component } from 'react'
import {connect} from 'react-redux'
 class Counp extends Component {
    render() {
        let {list} = this.props;
        console.log(list)
        return (
            <div>
                
            </div>
        )
    }
}


export default connect((state)=>{
    console.log(state,'&&&&&&&');
    return {
        list:state.counplist
    }
})(Counp)