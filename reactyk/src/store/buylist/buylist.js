import { ADD_BUYLIST ,ADD_CAR_COUNT} from '../types'
const buylistreducer = (state = { buylist: [] }, actions) => {
    switch (actions.type) {
        case ADD_BUYLIST: {
            let ind = state.buylist.findIndex(item => item.name == actions.obj.name);
            if(ind == -1){
                state.buylist.push(actions.obj);
            }

            return {
                ...state,
                buylist: [...state.buylist]
            }
        }
        case ADD_CAR_COUNT:{
            let {ind,count} = actions;
            state.buylist[ind].count = count;
            return {
                ...state,
                buylist: [...state.buylist]
            }
        }
        default: return {
            ...state,
            buylist: [...state.buylist]
        }
    }
}

export default buylistreducer;