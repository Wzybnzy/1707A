import React, { Component } from 'react'
import head from './head.module.scss'
import {withRouter} from 'react-router-dom'
// console.log(head)
 class Head extends Component {
    static defaultProps = {
        back:false,
        title:'沐恩menu',
        right:''
    }
    render() {
        let {back,title,right} = this.props;
        console.log(back,title)
        return (
            <header className={`${head['header']}`}>
                {
                    back ? <span onClick={()=>{
                        this.props.history.go(-1);
                    }}>&lt;</span> : null
                }
                <h3>{title}</h3>
                <span>{right}</span>
            </header>
        )
    }
}

// Head.defaultProps = {

// }

export default withRouter(Head);