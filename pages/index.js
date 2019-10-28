import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import ProductCard from 'components/product/card'
import {SearchBox} from 'components/struct'
import Layout from 'components/layout'
import {Content} from 'components/ui'

import {loadingProducts} from '@redux/actions/products'
import {addProduct} from '@redux/actions/cart'

const useFetching = (someFetchActionCreator, dispatch) => {
  useEffect( () => {
    dispatch(someFetchActionCreator())
  }, [])
}


export default function Home() {
  const [search, setSearch] = useState();
  const products = useSelector(state => state.products.data)

  const dispatch = useDispatch()
  useFetching(loadingProducts, dispatch)

  return (
    <Layout>
      <SearchBox handleSearch={setSearch} />
      <Content>
        {products && products.filter(p => 
            search ? p.name.indexOf(search) > -1 : true
          ).map((product, key) => (
          <ProductCard 
            key={key}
            product={product}
            handleClick={addProduct}
          />
        ))}
      </Content>
    </Layout>
  )
}