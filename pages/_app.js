import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import React from 'react'
import { Provider } from 'react-redux'
import {getStore} from '@redux/store'
import Firebase from 'firebase'
import firebaseConfig from 'utils/firebase'

class Avocado extends App {
  render () {
    const { Component, pageProps, store } = this.props
    !Firebase.apps.length
        ? Firebase.initializeApp(firebaseConfig).firestore()
        : Firebase.app().firestore()
    
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withRedux(getStore)(Avocado)