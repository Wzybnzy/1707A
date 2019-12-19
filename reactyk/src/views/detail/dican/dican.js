import React, { Component } from 'react'
import Item from '@/component/item'
import '@/mock/index.js'
import axios from 'axios'
import BScroll from 'better-scroll'
export default class Dican extends Component {
    state = {
        list: [],
        ind: 0,
        scrollH:[]
    }
    render() {
        let { list, ind } = this.state;
        console.log(list, 'list^^^^^^^^^^^^^^^^');
        return (
            <div className="dican">
                <div className="left">
                    <ul>
                        {
                            list && list.map((item, index) =>
                                <li className={index == ind ? 'cur' : ''} key={index} onClick={this.handleClickleft.bind(this, index)}>{item.name}{item.num ? item.num :''}</li>)
                        }
                    </ul>
                </div>
                <div className="right">
                    <div ref="rightlist">
                        {
                            list && list.map((item, index) => 
                            <Item key={index} item={item} ind={index} handleCount={this.handleCount.bind(this)}/>)
                        }
                    </div>
                </div>
            </div>
        )
    }

    async componentDidMount() {
        let res = await axios.get('/api/shop');
        console.log(res)
        res.data.goods.forEach(item => {
            item.num = 0;
            item.foods.forEach(item1 => {
                item1.count = 0;
            });
        })
        this.setState({ list: res.data.goods })
        let {scrollH} = this.state;
        // console.log(this.refs.rightlist.children);
        let child = Array.from(this.refs.rightlist.children);
        let last = child[child.length -1];
        child.forEach(item => {
            scrollH.push(item.offsetTop - 45);
        })
        console.log(scrollH)
        scrollH.push(last.offsetTop + last.offsetHeight);
        this.setState({scrollH})

        this._initScroll();

        
    }
    handleClickleft(ind) {//点击左侧
        this.setState({ ind })
        this.myScroll.scrollToElement('.title'+ind,500);
    }
    _initScroll(){
        let {scrollH} = this.state;
        this.myScroll = new BScroll('.right',{
            probeType :3,
            click:true
        });
        this.myScroll.on('scroll',({y})=>{
            let scrollY = Math.abs(y);
            console.log(scrollY)
            for(let i =0;i<scrollH.length;i++){
                if(scrollY >= scrollH[i] && scrollY < scrollH[i+1]){
                    console.log(i)
                    this.setState({ind:i})
                }
            }

        });
    }
    handleCount(ind,index,count){ 
        console.log(ind,index,count);
        let {list} = this.state;
        
        list[ind].foods[index].count = count;

        list[ind].num = list[ind].foods.reduce((prev,cur)=> prev + cur.count,0);

        this.setState({list});
    }
}
