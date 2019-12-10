import React, { Component } from 'react'
import isLogin from '../../../utils/islogin';

// export default  class Login extends Component{
//     //如果登录，就展示order组件，没有登录就去登录
//     state = {
//         islogin:false
//     }
//     render(){
//         let {islogin} = this.state;
//         return islogin ? <Order /> : null
//     }

//     componentDidMount(){
//         if(window.localStorage.user){ //登录了 
//             this.setState({islogin:true})
//         } else { //没有登录
//             this.props.history.push('/login');
//         }
//     }
// }

class Order extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                订单
            </div>
        )
    }
}


export default isLogin(Order);