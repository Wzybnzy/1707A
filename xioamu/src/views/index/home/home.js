import React, { Component } from 'react'
import Head from '../../component/head'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Head/>
                <div onClick={()=>{
                    this.props.history.push('/vote');
                }}>投票</div>
            </div>
        )
    }
}
