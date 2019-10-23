import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducerers'
import thunkMiddleware from 'redux-thunk'
import initialState from './initialState'

const defaultState = initialState
export function initializeStore (initialState = defaultState) {
    return createStore(
      reducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
  }
  