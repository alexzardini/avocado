import ActionTypes from '@redux/actionTypes'
import {REHYDRATE} from 'redux-persist'

const defaultState = {
  data: []
}

const cart = (state = defaultState, action) => {
    const {type, payload} = action
    switch (type) {
      case ActionTypes.ADD_CART:
        if(state.data.findIndex(c => c.product_id === payload.product_id) > -1) { return state }
        return {
          ...state,
          data: [
            ...state.data,
            { 
              ...payload,
              qtd: 1
            }
          ],
        }
      case ActionTypes.REMOVE_CART:
        var index = state.data.findIndex(c => c.product_id === payload)
        if(index < 0) { return state }
        var copy = Object.assign([], state.cart)
        copy.splice(index, 1)
        return {
          ...state,
          data: [...copy],
        }
      case ActionTypes.INCREMENT_ITEM:
        var index = state.data.findIndex(c => c.product_id === payload)
        if(index < 0 || state.data[index].qtd === 5) { return state }
        var copy = Object.assign([], state.data)
        copy[index].qtd = copy[index].qtd + 1
        
        return {
          ...state,
          data: [...copy],
        }
      case ActionTypes.DECREMENT_ITEM:
        var index = state.data.findIndex(c => c.product_id === payload)
        if(index < 0 || state.data[index].qtd === 1) { return state }
        var copy = Object.assign([], state.data)
        copy[index].qtd = copy[index].qtd - 1
        
        return {
          ...state,
          data: [...copy],
        }
      case REHYDRATE:
        return {
          ...state,
          ...payload.cart,
          error: false,
          reHydrated: true,
        }
      default:
        return state
    }
}
  
export default cart