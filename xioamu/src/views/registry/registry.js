import React, { Component } from 'react'
import { register } from '../../api/api'
import Toast from 'antd-mobile/lib/toast';  // 加载 JS
import 'antd-mobile/lib/toast/style/css';        // 加载 CSS
export default class Registry extends Component {
    state = {
        name: '',
        user: '',
        pwd: '',
        surepwd: ''
    }
    render() {
        let { name, pwd, surepwd, user } = this.state;
        return (
            <div>
                <input placeholder="请输入用户名" value={name} name='name' onChange={this.handleChange.bind(this)} />
                <input placeholder="请输入姓名" value={user} name='user' onChange={this.handleChange.bind(this)} />
                <input placeholder="请输入密码" value={pwd} name='pwd' onChange={this.handleChange.bind(this)} />
                <input placeholder="请再次输入密码" value={surepwd} name='surepwd' onChange={this.handleChange.bind(this)} />
                <button onClick={this.handleRegistry.bind(this)}>注册</button>
            </div>
        )
    }
    handleChange(e) {
        let name = e.target.name;
        this.setState({ [name]: e.target.value })
    }
    async handleRegistry() {
        let { name, pwd, surepwd, user } = this.state;
        if (pwd == surepwd) { //两次密码一致
            try {
                let res = await register({ userName: name, password: pwd, realName: user });
                console.log(res);
                if (res.data.code == 1) { //注册成功
                    this.props.history.go(-1);
                }
            }
            catch (e) {
                Toast.info(e.response.data.message,3);
                console.log(e.response.data.message)
            }
        } else {
            Toast.info('两次密码不一致', 3);
        }
    }
}
