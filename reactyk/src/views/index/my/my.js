import React, { Component } from 'react'
import isLogin from '../../../utils/islogin'
// export default  class Login extends Component{
//     //如果登录，就展示order组件，没有登录就去登录
//     state = {
//         islogin:false
//     }
//     render(){
//         let {islogin} = this.state;
//         return islogin ? <My /> : null
//     }

//     componentDidMount(){
//         if(window.localStorage.user){ //登录了 
//             this.setState({islogin:true})
//         } else { //没有登录
//             this.props.history.push('/login');
//         }
//     }
// }

class My extends Component {
    render() {
        return (
            <div>
                我的
            </div>
        )
    }
}


export default isLogin(My)