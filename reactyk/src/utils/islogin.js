import React,{Component} from 'react'
const isLogin = (Com)=>{
    return  class Login extends Component{
        //如果登录，就展示order组件，没有登录就去登录
        state = {
            islogin:false
        }
        render(){
            let {islogin} = this.state;
            return islogin ? <Com /> : null
        }
    
        componentDidMount(){
            if(window.localStorage.user){ //登录了 
                this.setState({islogin:true})
            } else { //没有登录
                this.props.history.push('/login');
            }
        }
    }
}

export default isLogin;