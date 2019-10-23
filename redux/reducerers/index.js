import {combineReducers} from 'redux'
import ProductsReducer from './reducers/products'
import CartReducer from './reducers/cart'

export const reducer = combineReducers({
    ProductsReducer,
    CartReducer
})
