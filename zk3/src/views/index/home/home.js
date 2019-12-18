import React, { Component } from 'react'
import axios from 'axios'
import '../../../mock/index'
export default class Home extends Component {
    state = {
        list: []
    }
    render() {
        let { list } = this.state;
        return (
            <div>
                {
                    list && list.map((item, index) => 
                    <dl key={index} onClick={this.handleClick.bind(this,item.type)}>
                        <dt>
                            <img src={item.img}/>
                        </dt>
                        <dd>{item.name}</dd>
                    </dl>)
                }
            </div>
        )
    }
    async componentDidMount() {
        let res = await axios.get('/api/list');
        console.log(res);
        this.setState({ list: res.data });
    }
    handleClick(type){
        this.props.history.push('/classify/'+type);
    }
}
