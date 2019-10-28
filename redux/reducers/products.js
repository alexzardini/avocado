import ActionTypes from '@redux/actionTypes'
import {REHYDRATE} from 'redux-persist'

const defaultState = {
  data: [],
}

export const products = (state = defaultState, action) => {
    const {type, payload} = action
    switch (type) {
      case ActionTypes.LOAD_PRODUCTS:
        return {
          ...state,
          data: [
            ...payload
          ],
        }
      case ActionTypes.FAIL_PRODUCTS:
        return {
          ...state,
        }
      case REHYDRATE:
        return {
          ...state,
          error: false,
          reHydrated: true,
        }
      default:
        return state
    }
}

export default products