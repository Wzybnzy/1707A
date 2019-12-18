import React, { Component } from 'react'

export default class Food extends Component {
    state = {
        arr:['常吃','不吃','偶尔','']
    }
    render() {
        let {item} = this.props;
        let {arr} = this.state;
        // console.log(this.props);
        return (
            <div>
                <dl>
                    <dt>
                        <img src={item.img} />
                    </dt>
                    <dd>
                        <h3>{item.name}</h3>
                        <span>{item.weight}/千克</span>
                        <div onClick={this.handleClickCheck.bind(this,item.id)}>
                            <span>星星</span>
                            <span>{arr[item.flag]}</span>
                        </div>
                    </dd>
                </dl>

                {
                    item.check ? <ul>

                        {
                            arr && arr.map((item1, index1) =>
                                <li key={index1} onClick={this.handleChangeFlag.bind(this,item.id,index1)}>{item1}</li>)
                        }
                    </ul> : null
                }


            </div>
        )
    }
    handleClickCheck(id){
        console.log('点击星星',id);
        this.props.handleCheck(id);
    }
    handleChangeFlag(id,index1){
        this.props.handleflag(id,index1);
    }
}
