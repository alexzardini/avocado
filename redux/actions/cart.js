import ActionTypes from '@redux/actionTypes'

export const addProduct = (product) => async dispatch => {
    const add = await dispatch({
          type: ActionTypes.ADD_CART,
          payload: product,
    })

    return dispatch({
        type: ActionTypes.SUCCESS_ADD,
        payload: product.name
    })
}

export const removeItem = (id) => dispatch => {
    return dispatch({
          type: ActionTypes.REMOVE_CART,
          payload: id,
    })
}

export const incrementItem = (id) => dispatch => {
    return dispatch({
          type: ActionTypes.INCREMENT_ITEM,
          payload: id,
    })
}

export const decrementItem = (id) => dispatch => {
    return dispatch({
          type: ActionTypes.DECREMENT_ITEM,
          payload: id,
    })
}