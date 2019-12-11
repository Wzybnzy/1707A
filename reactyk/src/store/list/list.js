import {ADD_LIST,DEL_LIST} from '../types'
const list = (state = { list: [] }, actions) => {
    switch (actions.type) {
        case ADD_LIST:
            state.list.push(actions.val);
            return {
                ...state,
                list: [...state.list]
            }
        case DEL_LIST:
            state.list.splice(actions.ind, 1);
            return {
                ...state,
                list: [...state.list]
            }
        default: return {
            ...state,
            list: [...state.list]
        }
    }
}

export default list;