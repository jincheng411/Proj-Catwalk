import React from 'react';
import axios from 'axios';
import Product from './ProductCard';
class RelatedProducts extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    productsShown: [],
    hiddenLeft: [],
    hiddenRight: [],
    left: false,
    right: true
  }
  this.setProductsShown = this.setProductsShown.bind(this)
}

componentDidUpdate(prevProps) {
  if (prevProps.relatedProducts !== this.props.relatedProducts && this.props.relatedProducts.name !== 'Error') {
    this.setProductsShown();
  }
}
setProductsShown() {
  this.setState({
    productsShown: this.props.relatedProducts.slice(0, 5),
    hiddenRight: this.props.relatedProducts.slice(5)
  })
}

render() {
  const {currentProduct, currentProductId, products, relatedProducts} = this.props;
  const {productsShown} = this.state;

  console.log('STATE--> ', this.state, 'PROPS -->', this.props)
  return (
    <div className = "related-products-car">
      <h2> Related sub</h2>
      <>
      {productsShown.map(relatedProduct => <Product relatedProduct={relatedProduct} currentProductId={currentProductId} products={products} currentProduct={currentProduct}/>)}
     </>

    </div>
  )
}
}

export default RelatedProducts;