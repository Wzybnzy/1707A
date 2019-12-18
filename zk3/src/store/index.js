import {createStore,combineReducers,applyMiddleware} from 'redux'
import list from './list/list'
import logger from 'redux-logger'

const reducer = combineReducers({
    list
})


const store = createStore(reducer,applyMiddleware(logger));

window.store = store;
export default store;