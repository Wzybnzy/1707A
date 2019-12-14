import React, { Component } from 'react'
import Head from '../../component/head'
import vote from './vote.module.scss'
import { allVote } from '../../api/api'
export default class Vote extends Component {
    state = {
        arr: ['全部', '已结束', '正在进行'],
        ind: 0,
        list: [],
        newlist:[]
    }
    render() {
        let { arr, ind, list,newlist } = this.state;
        return (
            <div className={`${vote['voter']}`}>
                <Head back={true} title="投票" right="发起投票" />
                <div className={`${vote['tab']}`}>
                    <ul>
                        {
                            arr && arr.map((item, index) =>
                                <li key={index} className={ind == index ? `${vote['active']}` : ''} onClick={this.handleChangeTab.bind(this, index)}>{item}</li>)
                        }
                    </ul>
                </div>


                <div className={`${vote['votelist']}`}>
                    {
                        newlist && newlist.map((item, index) => <dl key={index}>
                            <dt>
                                <img />
                            </dt>
                            <dd>
                                <p>{item.title}</p>
                                <p>{item.endTime}</p>
                                <p>{item.isSingle ? '多选' : '单选'}</p>
                            </dd>
                        </dl>)
                    }
                </div>
            </div>
        )
    }
    handleChangeTab(ind) {
        this.setState({ ind })
        let time = new Date().getTime();
        let {list,newlist} = this.state;

        newlist = ind == 0 ? list : list.filter(item => ind == 1 ? time > new Date(item.endTime) : time < new Date(item.endTime))

        this.setState({newlist})

    }
    async componentDidMount() {
        let res = await allVote();
        console.log(res)
        this.setState({ list: res.data,newlist:res.data })
    }
}
