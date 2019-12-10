import Mock from 'mockjs'

Mock.mock('/api/list',{
    'list|10-20':[]
});

Mock.mock('/api/login',({body})=>{
    console.log(body);
    let {name,pwd} = JSON.parse(body);
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