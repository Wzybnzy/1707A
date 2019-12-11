import {createStore} from 'redux'
// const {createStore} = require('redux');

const reducer = (state={count:1,list:[]},actions)=>{
    switch(actions.type){
        case 'ADD':
            state.count++;
        return {
            ...state
        }
        case 'DEL':
            state.count--;
            return {
                ...state
            }
        case 'ADD_LIST':
            state.list.push(actions.val);
            return {
                ...state,
                list:[...state.list]
            }
        case 'DEL_LIST':
            state.list.splice(actions.ind,1);
            return {
                ...state,
                list:[...state.list]
            }
        default:return {...state}
    }
}

const store = createStore(reducer);
// console.log(store.getState());
// store.dispatch({type:'ADD'}) //触发一个dispatch
// console.log(store.getState())
window.store = store;

export default store;