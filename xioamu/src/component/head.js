import React, { Component } from 'react'
import head from './head.module.scss'
import {withRouter} from 'react-router-dom'
// console.log(head)
 class Head extends Component {
    static defaultProps = {
        back:false,
        title:'沐恩menu',
        right:'',
        url:'/createvote'
    }
    render() {
        let {back,title,right,url} = this.props;
        console.log(back,title,url,'^^^^^^^^^^')
        return (
            <header className={`${head['header']}`}>
                {
                    back ? <span onClick={()=>{
                        this.props.history.go(-1);
                    }}>&lt;</span> : null
                }
                <h3>{title}</h3>
                <span onClick={()=>{
                    this.props.history.push(url);
                }}>{right}</span>
            </header>
        )
    }
}

// Head.defaultProps = {

// }

export default withRouter(Head);