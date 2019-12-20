import Mock from 'mockjs'

import data from './data.json'

Mock.mock('/api/list',data);

Mock.mock('/api/login',({body})=>{
    let {name,pwd} = JSON.parse(body);
    console.log(name,pwd,'&&&&&&&&&&&&&');
    if(name == 'zs' && pwd == '123'){
        return {
            code:1,
            mes:'成功'
        }
    } else {
        return {
            code:0,
            mes:'失败'
        }
    }
});