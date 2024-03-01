import {combineReducer} from 'redux'
import {productReducer} from './productReducer'

const reducers=combineReducers({
    allProducts:productReducer,
})