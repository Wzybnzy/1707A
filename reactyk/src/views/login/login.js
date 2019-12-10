import React, { Component } from 'react'
import axios from 'axios'
import '../../mock/index'
export default class Login extends Component {
    state = {
        name:'',
        pwd:'',
        age:''
    }
    render() {
        let {name,pwd} = this.state;
        return (
            <div>
                <input placeholder="请输入用户名" value={name} name="name" onChange={this.handleChange.bind(this)}/>
                <input placeholder="请输入密码" value={pwd} name="pwd" onChange={this.handleChange.bind(this)}/>
                <button onClick={this.handleClick.bind(this)}>登录</button>
            </div>
        )
    }
    handleChange(e){
        console.log(e.target.name);
        let key = e.target.name;
        this.setState({
            [key]:e.target.value
        })
        // this.setState({name:e.target.value})
    }
    handleChangePwd(e){
        this.setState({pwd:e.target.value})
    }
    handleChangeAge(e){
        this.setState({age:e.target.value})
    }

   async handleClick(){ //点击登录
        let {name,pwd} = this.state;
        console.log(name,pwd);
        let res = await axios.post('/api/login',{name,pwd});
        console.log(res);
        if(res.data.code == 1){
            window.localStorage.user = name;
            this.props.history.go(-1);
        }
    }
}
