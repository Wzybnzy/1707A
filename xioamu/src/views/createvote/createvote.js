import React, { Component } from 'react'
import Head from '../../component/head'
import createvote from './createvote.module.scss'
import DatePicker from 'antd-mobile/lib/date-picker';
import List from 'antd-mobile/lib/list';
import 'antd-mobile/lib/date-picker/style/css';
import 'antd-mobile/lib/list/style/css';
import {newvote} from '../../api/api'

export default class Createvote extends Component {
    state = {
        title: '',
        info: '',
        add: '',
        chooseList: [],
        isSingle: 0, //单选
        anonymity: 0, //匿名
        date: ''
    }
    render() {
        let { date, title, info, add, chooseList, isSingle, anonymity } = this.state;
        return (
            <div>
                <Head back={true} title="发起投票" url={"/createvote"} />
                <div className={`${createvote['createwrapp']}`}>
                    <label>
                        标题
                        <input placeholder="请输入标题" value={title} name="title" onChange={this.handleChange.bind(this)} />
                    </label>
                    <label>
                        描述
                        <input placeholder="请输入内容" value={info} name="info" onChange={this.handleChange.bind(this)} />
                    </label>
                    <ul>
                        {
                            chooseList && chooseList.map((item, index) =>
                                <li key={index}>
                                    <span>选项一：{item}</span>
                                    <span onClick={this.handledel.bind(this, index)}>删除</span>
                                </li>)
                        }
                    </ul>

                    <label>
                        <input placeholder="请输入标题" value={add} name="add" onChange={this.handleChange.bind(this)} />
                        <span onClick={this.handleadd.bind(this)}>添加</span>
                    </label>

                    <label>
                        请选择单选多选
                        <select value={isSingle} name="isSingle" onChange={this.handleChange.bind(this)}>
                            <option value="0">单选</option>
                            <option value="1">多选</option>
                        </select>
                    </label>
                    <label>
                        是否匿名
                        <select value={anonymity} name="anonymity" onChange={this.handleChange.bind(this)}>
                            <option value="0">匿名</option>
                            <option value="1">不匿名</option>
                        </select>
                    </label>

                    <DatePicker
                        value={date}
                        onChange={date => this.setState({ date })}
                    >
                        <List.Item arrow="horizontal">Datetime</List.Item>
                    </DatePicker>

                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
    handleChange(e) {
        let name = e.target.name;
        this.setState({ [name]: e.target.value })
    }
    handleadd() {
        let { chooseList, add } = this.state;
        chooseList.push(add);
        this.setState({ chooseList })
    }
    handledel(ind) {
        let { chooseList } = this.state;
        chooseList.splice(ind, 1);
        this.setState({ chooseList })
    }
   async handleSubmit(){
        let { date, title, info, add, chooseList, isSingle, anonymity } = this.state;
        let res = await newvote({
            title,
            info,
            userId:window.localStorage.userId*1,
            chooseList,
            anonymity:anonymity*1,
            isSingle:isSingle*1,
            endTime:date,
            startTime:new Date()
        });

        if(res.data.code == 1){
            this.props.history.push('/vote');
        }
        console.log(res);
    }

}
