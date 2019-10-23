import ActionTypes from '../actionTypes'
import initialState from '../initialState'

export const products = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
      case ActionTypes.LOAD_PRODUCTS:
        return [
          ...payload,
          ...state,
        ]
      case ActionTypes.FAIL_PRODUCTS:
        return [
          ...state,
        ]
      default:
        return state
    }
}

export default products