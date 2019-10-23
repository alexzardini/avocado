import ActionTypes from '../actionTypes'
import initialState from '../initialState'

const cart = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
      case ActionTypes.ADD_CART:
        return {
          ...state,
          cart: [...state.products[payload], ...state.cart],
        }
      case ActionTypes.REMOVE_CART:
        var copy = Object.assign([], state.cart)
        copy.splice(payload, 1)
        return {
          ...state,
          cart: [...copy],
        }
      case ActionTypes.INCREMENT_PRODUCT:
        state.cart[payload].unity = state.cart[payload].unity + 1
        return {
          ...state,
          cart: [...state.cart],
        }
      case ActionTypes.DECREMENT_PRODUCT:
        state.cart[payload].unity = state.cart[payload].unity - 1
        return {
          ...state,
          cart: [...state.cart],
        }
      default:
        return state
    }
}
  
export default cart