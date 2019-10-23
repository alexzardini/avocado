import firebase from 'firebase'
import ActionTypes from '../actionTypes'

export const loadingProducts = () => async dispatch => {
    return firebase.firestore().collection('products').get().then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data())
        dispatch({
            type: ActionTypes.LOAD_PRODUCTS,
            payload: data,
        })
    });
}
