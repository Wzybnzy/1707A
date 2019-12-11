import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        let { item ,ind} = this.props;
        return (
            <div className={'title'+ind}>
                <h3>{item.name}</h3>
                {
                    item.foods && item.foods.map((item1, index1) => <dl key={index1}>
                        <dt>
                            <img src={item1.image}/>
                        </dt>
                        <dd>
                            <p>标题:{item1.name}</p>
                            <p>描述:{item1.description}</p>
                            <p>价格:{item1.price}</p>
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </dd>
                    </dl>)
                }
            </div>
        )
    }
}
