import {applyMiddleware, compose, createStore } from 'redux'
import {persistReducer, persistStore} from 'redux-persist'
import thunk from 'redux-thunk'
import reducer from './reducers'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'primary',
    storage,
}
const persistedReducer = persistReducer(persistConfig, reducer)

let store  

export const getStore = (state, isServer) => {
  if (isServer && typeof window === 'undefined') {
    return createStore(persistedReducer, state, applyMiddleware(thunk))
  } else if (typeof window !== 'undefined') {
    const composeEnhancers = compose
    if (!store) {
        const mw = [thunk]
        if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
            window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = () => undefined
        }

        store = createStore(
            persistedReducer,
            state,
            composeEnhancers(applyMiddleware(...mw), ),
        )

        persistStore(store)
    }
    return store
  }
}