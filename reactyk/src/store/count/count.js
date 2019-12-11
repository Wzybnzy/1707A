import {ADD,DEL} from '../types'
const count = (state={count:0},actions)=>{
    switch(actions.type){
        case ADD:
            state.count++;
        return {
            ...state
        }
        case DEL:
            state.count--;
            return {
                ...state
            }
        default:return {...state}
    }
}

export default count;