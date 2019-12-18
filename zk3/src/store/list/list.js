import {ADD_LIST} from '../types'
const listreducer = (state={list:[]},actions)=>{
    switch(actions.type){
        case ADD_LIST:
            state.list.push(actions.obj);
        return {
            ...state,
            list:[...state.list]
        }

        default: return {
            ...state,
            list:[...state.list]
        }
    }
}

export default listreducer;