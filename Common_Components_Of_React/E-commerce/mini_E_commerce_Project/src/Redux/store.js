import {legacy_createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { productReducer } from './Product/productReducer';
const rootReducer = combineReducers({
    storeData:productReducer
})
export let store = legacy_createStore(rootReducer,applyMiddleware(thunk));


