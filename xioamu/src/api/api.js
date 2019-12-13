import axios from 'axios'

export const login = (params)=> axios.post('/login',params); 
export const register = (params)=> axios.post('/register',params); 