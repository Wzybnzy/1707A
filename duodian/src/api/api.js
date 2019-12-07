// import httpAxios from 'axios'

import httpAxios from '@/utils/request.js'


//登录
export const login = (params)=> httpAxios.post('/api/user/login',params);
//注册
export const registry = (params)=> httpAxios.post('/api/user/registry',params);


//获取首页轮播图
export const banner = ()=> httpAxios.get('/api/home/banner');

//获取首页列表
export const homeShop = (params)=> httpAxios.get('/api/home/shop',{params});

//分类页面
export const shopType = ()=> httpAxios.get('/api/shop/shopType');
//刷选分类
export const selectType = (params)=> httpAxios.get('/api/shop/selectType',{params});

//添加购物车

export const addCar = (params)=> httpAxios.post('/api/car/addCar',params);

//删除购物车
export const removeCar = (params)=> httpAxios.post('/api/car/removeCar',params);


// 获取用户信息
export const getUserInfo = ()=> httpAxios.get('/api/user/getUserInfo');


// 获取购物车商品
export const getCar = (params)=> httpAxios.get('/api/car/getCar',{params});








