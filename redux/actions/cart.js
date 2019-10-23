import ActionTypes from '../actionTypes'

export const addProductInCart = (id) => async dispatch => {
    return dispatch({
          type: ActionTypes.ADD_CART,
          payload: id,
    })
}

export const removeProductInCart = (id) => async dispatch => {
    return dispatch({
          type: ActionTypes.REMOVE_CART,
          payload: id,
    })
}

export const incrementProductInCart = (id) => async dispatch => {
    return dispatch({
          type: ActionTypes.INCREMENT_PRODUCT,
          payload: id,
    })
}

export const decrementProductInCart = (id) => async dispatch => {
    return dispatch({
          type: ActionTypes.DECREMENT_PRODUCT,
          payload: id,
    })
}