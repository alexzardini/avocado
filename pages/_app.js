import App from 'next/app'
import React from 'react'
import withRedux from '../utils/withRedux'
import Firebase from 'firebase'
import firebaseConfig from '../utils/firebase'
import { Provider } from 'react-redux'

class Avocado extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    !Firebase.apps.length
        ? Firebase.initializeApp(firebaseConfig).firestore()
        : Firebase.app().firestore()
    
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withRedux(Avocado)