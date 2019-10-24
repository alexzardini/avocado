import React from 'react'
import {connect} from 'react-redux'
import Layout from '../components/layout'
import ProductCard from '../components/product/card'
import {addProductInCart} from '../redux/actions/cart'
import {loadingProducts} from '../redux/actions/products'

const Home = ({products, addProduct}) => (
  <Layout>
    {products && products.map((product, key) => (
      <ProductCard 
        key={key}
        photo={product.image_url}
        title={product.name}
        price={product.price}
        id={product.id}
        handleClick={addProduct}
      />
    ))}
  </Layout>
)

Home.getInitialProps = async ({ reduxStore}) => {
  await reduxStore.dispatch(loadingProducts());
  const state = reduxStore.getState()
  return { products: state.products }
}

const mapDispatchToProps = dispatch => ({
  addProduct: id => dispatch(addProductInCart(id)),
})

export default connect(null, mapDispatchToProps)(Home)
