import React from 'react'
import Layout from '../components/layout'
import ProductCard from '../components/product/card'
import {loadingProducts} from '../redux/actions/products'

const Home = ({products}) => (
  <Layout>
    {products && products.map((product, key) => (
      <ProductCard 
        key={key}
        photo={product.image_url}
        title={product.name}
        price={product.price}
        id={product.id}
      />
    ))}
  </Layout>
)

Home.getInitialProps = async ({ reduxStore}) => {
  await reduxStore.dispatch(loadingProducts());
  const state = reduxStore.getState()
  return { products: state.products }
}

export default Home
