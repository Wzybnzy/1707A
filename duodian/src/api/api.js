import axios from 'axios'

//登录
export const login = (params)=> axios.post('/api/user/login',params);
//注册
export const registry = (params)=> axios.post('/api/user/registry',params);


//获取首页轮播图
export const banner = ()=> axios.get('/api/home/banner');

//获取首页列表
export const homeShop = (params)=> axios.get('/api/home/shop',{params});


