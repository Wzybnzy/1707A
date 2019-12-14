// import axios from 'axios'
import httpAxios from '../utils/request'

export const login = (params)=> httpAxios.post('/login',params); 
export const register = (params)=> httpAxios.post('/register',params); 
//获取所有投票的接口
export const allVote = ()=> httpAxios.get('/vote/allVote'); 

//添加投票
export const newvote = (params)=> httpAxios.post('/vote/newvote',params); 
