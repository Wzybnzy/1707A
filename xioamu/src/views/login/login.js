import React, { Component } from 'react'
import {login} from '../../api/api'
export default class Login extends Component {
    state = {
        name:'',
        pwd:'',
        isshow:false
    }
    render() {
        let {name,pwd,isshow} = this.state;
        return (
            <div>
                <input placeholder="请输入用户名" value={name} name='name' onChange={this.handleChange.bind(this)}/>
                <input placeholder="请输入密码" value={pwd} name='pwd' onChange={this.handleChange.bind(this)}/>
                {
                    isshow ? <div onClick={this.handleRegistry.bind(this)}>注册</div> : null
                }
                <button onClick={this.handleSubmit.bind(this)}>登录</button>
            </div>
        )
    }
    handleChange(e){
        let name = e.target.name;
        this.setState({
            [name]:e.target.value
        })
    }
    async handleSubmit(){
        let {name,pwd} = this.state;
       let res = await login({userName:name,password:pwd});
       console.log(res)
       if(res.data.code == 1){ //登录成功
           window.localStorage.token = res.data.token;
           window.localStorage.userId = res.data.userId;
           this.props.history.push('/index/home');
       } else if(res.data.code == -1){
           this.setState({isshow:true})
       }
    }
    handleRegistry(){
        this.props.history.push('/registry');
    }
}
