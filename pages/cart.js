import React from 'react'
import {useSelector} from 'react-redux'
import Layout from 'components/layout'
import CartItem from 'components/product/cartItem'

import {currencyConvert} from 'utils/func'
import {addProduct} from '@redux/actions/cart'

export default function Cart() {
  const cart = useSelector(state => state.cart.data)

  let totalPrice = 0

  function returnProduct(p, key) {
    totalPrice = totalPrice + p.price * p.qtd

    return ( <CartItem 
      key={key}
      product={p}
      handleClick={addProduct}
      />
    )
  }


  return (
    <Layout withContent>
      <h2>Seu carrinho de compras</h2>
      {cart && cart.map((product, key) => returnProduct(product, key))}
      <br />
      VALOR TOTAL DA COMPRA: {currencyConvert(totalPrice)}
    </Layout>
  )
}