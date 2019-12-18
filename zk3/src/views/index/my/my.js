import React, { Component } from 'react'

export default class My extends Component {
    render() {
        return (
            <div>
                <div onClick={()=>{
                    this.props.history.push('/coll');
                }}>我的收藏</div>
            </div>
        )
    }
}
