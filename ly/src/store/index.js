import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'

const reducer = (state={counplist:[]},actions)=>{
    switch(actions.type){
        case 'addcounp':{
            state.counplist.push(actions.obj);

            return {
                ...state,
                counplist:[...state.counplist]
            }
        }
        default:return {
            ...state,
            counplist:[...state.counplist]
        }
    }
}


const store = createStore(reducer,applyMiddleware(logger));

export default store;