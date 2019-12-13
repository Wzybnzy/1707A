import React, { Component } from 'react'
import Head from '../component/head'
export default class Vote extends Component {
    render() {
        return (
            <div>
                <Head back={true} title="投票" right="发起投票"/>
                <div></div>
            </div>
        )
    }
}
